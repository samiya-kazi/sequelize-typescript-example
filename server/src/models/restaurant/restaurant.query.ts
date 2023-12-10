import db from '../index';

export async function findAllRestaurants () {
  try {
    const restaurants = await db.Restaurant.findAll();
    return restaurants;
  } catch (error) {
    throw new Error('Error finding all restaurants in DB.');
  }
}

export async function createRestaurant (data: {name: string, address: string}) {
  try {
    const newRestaurant = await db.Restaurant.create(data);
    return newRestaurant;
  } catch (error) {
    throw new Error('Error creating new restaurant in DB.');
  }
}