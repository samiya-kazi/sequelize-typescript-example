import Food from "./food.model";

export async function findAllFoodInRestaurant (id: number) {
  try {
    const food = await Food.findAll({
      where: {
        restaurantId: id
      }
    });

    return food;
  } catch (error) {
    throw new Error('Error finding food in restaurant.');
  }
}


export async function addFoodToRestaurant (restaurantId: number, data: { name: string, price: number }) {
  try {
    const newFood = await Food.create({ ...data, restaurantId });
    return newFood;
  } catch (error) {
    throw new Error('Error adding food to restaurant.');
  }
}