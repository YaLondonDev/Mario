const https = require('https');
const http = require('http');
const fs = require('fs');
const { app } = require('./build/server');

const port = process.env.PORT || 5000;

const server = process.env.SSL_ENABLED
  ? https.createServer(
      {
        key: fs.readFileSync('./secure/key.pem'),
        cert: fs.readFileSync('./secure/cert.pem'),
      },
      app,
    )
  : http.createServer(app);

server.listen(port, () => {
  console.log(`App listen on ${port}`);
});
