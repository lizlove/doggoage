import express from 'express';
import Bundler from 'parcel-bundler';
import path from 'path';
import http from 'http';

const app = express();
const server = new http.Server(app);
const PORT = 8080 || process.env.PORT;

const bundler = new Bundler(path.join(__dirname, '../src/client/index.html'));
app.use(bundler.middleware());

server.listen(PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
