import { Router } from 'express';
import { getAllRestaurants, postRestaurant } from '../controllers/restaurant.controller';
const router = Router();

router.get('/all', getAllRestaurants);
router.post('/new', postRestaurant);

export default router;