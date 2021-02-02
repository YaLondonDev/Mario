import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { Request, Response } from 'express';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';
import App from 'src/App';
import { configureStore } from './store';
import { getInitialState } from './reducers/getInitialState';
import { rootSaga } from './actions/rootSaga';
import { fetchProfileRequested } from './actions/authActions/auth.actions';

export default (req: Request, res: Response) => {
  const location = req.url;
  const context = {};
  const store = configureStore(getInitialState());

  function renderApp() {
    const html = renderToString(
      <ReduxProvider store={store}>
        <StaticRouter context={context} location={location}>
          <App />
        </StaticRouter>
      </ReduxProvider>,
    );
    const helmetData = Helmet.renderStatic();

    const reduxState = store.getState();

    const rendered = `
    <!DOCTYPE HTML>
    <html lang="ru">
      <head>
        <meta charse="UTF-8">
        ${helmetData.title.toString()}
      </head>
      <body>
        <div id="root">${html}</div>
      </body>
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(reduxState)}
      </script>
      <script src="./main.js"></script>
    </html>
    `;
    res.status(200).send(rendered);
  }

  store
    .runSaga(rootSaga)
    .toPromise()
    .then(() => {
      renderApp();
    });

  store.dispatch(fetchProfileRequested(req.headers.cookie));

  store.close();
};
