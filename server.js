const https = require('https');
const http = require('http');
const fs = require('fs');
const { app } = require('./build/server');

const port = process.env.PORT || 5000;
const credentials = {
  key: fs.readFileSync('./secure/key.pem'),
  cert: fs.readFileSync('./secure/cert.pem'),
};

console.log(process.env.SSL_ENABLED, process.env.NODE_ENV);

const server = process.env.SSL_ENABLED
  ? https.createServer(credentials, app)
  : http.createServer(app);

server.listen(port, () => {
  console.log(`App listen on ${port}`);
});
