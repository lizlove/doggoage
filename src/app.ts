import express from 'express';
const app = express();
const PORT = 8000;

app.use(express.static('public'));

app.get('/', (req: express.Request, res: express.Response) => {
  res.sendFile('./public/index.html', { root: __dirname });
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
