import { Router } from 'express';
import { getAllFoodOfRestaurant, postFoodToRestaurant } from '../controllers/food.controller';
const router = Router();

router.get('/restaurant/:id', getAllFoodOfRestaurant);
router.post('/restaurant/:id', postFoodToRestaurant);

export default router;