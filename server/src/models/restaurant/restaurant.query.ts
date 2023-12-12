import Restaurant from "./restaurant.model";


export async function findAllRestaurants () {
  try {
    const restaurants = await Restaurant.findAll();
    return restaurants;
  } catch (error) {
    throw new Error('Error finding all restaurants in DB.');
  }
}

export async function createRestaurant (data: {name: string, address: string}) {
  try {
    const newRestaurant = await Restaurant.create(data);
    return newRestaurant;
  } catch (error) {
    throw new Error('Error creating new restaurant in DB.');
  }
}