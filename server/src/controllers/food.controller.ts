import { Request, Response } from "express";
import { addFoodToRestaurant, findAllFoodInRestaurant } from "../models/food/food.query";

export async function getAllFoodOfRestaurant (req: Request, res: Response) {
  try {
    let id = req.params.id;
    const restaurantId = Number(id);
    if (id && restaurantId) {
      const food = await findAllFoodInRestaurant(restaurantId);
      res.json({ data: food });
    } else res.status(400).json({ message: "Invalid restaurant ID." });

  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export async function postFoodToRestaurant (req: Request, res: Response) {
  try {
    let id = req.params.id;
    const restaurantId = Number(id);
    if (id && restaurantId) {
      const { name, price } = req.body;
      if (typeof name === 'string' && typeof price === 'number') {
        const food = await addFoodToRestaurant(restaurantId, {name, price});
        res.status(201).json(food);
      } else res.status(400).json({ message: "Invalid food information." });
    } else res.status(400).json({ message: "Invalid restaurant ID." });

  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}