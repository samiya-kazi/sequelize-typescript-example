import { Router } from 'express';
import { getAllRestaurants, postRestaurant, searchRestaurant } from '../controllers/restaurant.controller';
const router = Router();

router.get('/all', getAllRestaurants);
router.post('/new', postRestaurant);
router.get('/search', searchRestaurant);

export default router;