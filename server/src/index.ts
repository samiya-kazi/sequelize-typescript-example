import express, { Express } from 'express';
import config from './config';
const app : Express = express();

app.use(express.json());

app.listen(config.PORT, () => {
  console.log(`[server]: Server is running on port ${config.PORT}`);
});