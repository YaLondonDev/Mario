import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { Request, Response } from 'express';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';
import { App } from 'src/App';
import { store } from './store';

export default (req: Request, res: Response) => {
  const location = req.url;
  const context = {};
  const html = renderToString(
    <ReduxProvider store={store}>
      <StaticRouter context={context} location={location}>
        <App />
      </StaticRouter>
    </ReduxProvider>,
  );
  const helmetData = Helmet.renderStatic();

  const rendered = `
  <!DOCTYPE HTML>
  <html lang="ru">
    <head>
      <meta charse="UTF-8">
      <title>${helmetData.title.toString()}</title>
    </head>
    <body>
      <div id="root">${html}</div>
    </body>
    <script src="./main.js"></script>
  </html>
  `;
  res.status(200).send(rendered);
};
