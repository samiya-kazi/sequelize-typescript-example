import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '..';
import { IRestaurant } from '../../interfaces/restaurant.interface';
import Food from '../food/food.model';

interface RestaurantCreationAttributes extends Optional<IRestaurant, 'id'> {};

interface RestaurantInstance extends Model<IRestaurant, RestaurantCreationAttributes>, IRestaurant {
  createdAt?: Date;
  updatedAt?: Date;
}

const Restaurant = sequelize.define<RestaurantInstance>(
  'restaurant',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  }
);


Restaurant.hasMany(Food, {
  sourceKey: 'id',
  foreignKey: 'restaurantId',
});

Food.belongsTo(Restaurant, {
  foreignKey: 'restaurantId',
})

export default Restaurant;