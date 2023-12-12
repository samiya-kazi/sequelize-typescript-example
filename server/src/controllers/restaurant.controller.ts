import { Request, Response } from "express";
import { createRestaurant, findAllRestaurants, findRestaurantBySearchTerm } from "../models/restaurant/restaurant.query";

export async function getAllRestaurants (req: Request, res: Response) {
  try {
    const restaurants = await findAllRestaurants();
    res.json({ data: restaurants });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}


export async function postRestaurant (req: Request, res: Response) {
  try {
    const { name, address } = req.body;
    if (name && address && typeof name === 'string' && typeof address === 'string') {
      const restaurant = await createRestaurant({ name, address });
      res.status(201).json(restaurant);
    } else res.status(400).json({message: 'Invalid restaurant fields.'});
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}


export async function searchRestaurant (req: Request, res: Response) {
  try {
    const search = req.query.q;
    const searchTerm = search?.toString();

    if (searchTerm) {
      const restaurants = await findRestaurantBySearchTerm(searchTerm);
      res.json({ data: restaurants });
    } else res.json({ data: [] });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}