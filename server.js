const { app } = require('./build/server');

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App listen on ${port}`);
});
