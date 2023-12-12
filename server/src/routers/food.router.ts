import { Router } from 'express';
import { getAllFoodOfRestaurant, getAllFoodWithRestaurantInfo, postFoodToRestaurant, searchFood } from '../controllers/food.controller';
const router = Router();

router.get('/all', getAllFoodWithRestaurantInfo);
router.get('/restaurant/:id', getAllFoodOfRestaurant);
router.post('/restaurant/:id', postFoodToRestaurant);
router.get('/search', searchFood);

export default router;