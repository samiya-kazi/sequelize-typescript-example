import express, { Express } from 'express';
import config from './config';
import db from './models';
import restaurantRouter from './routers/restaurant.router';

const app : Express = express();

app.use(express.json());

app.use('/restaurants', restaurantRouter);

(async function bootstrap () {
  try {
    await db.sequelize.sync();
    app.listen(config.PORT, () => {
      console.log(`[server]: Server is running on port ${config.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
})();