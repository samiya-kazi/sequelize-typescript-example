import { Model, DataTypes, Optional, Sequelize } from 'sequelize';
import { IRestaurant } from '../../interfaces/restaurant.interface';

const model = (sequelize: Sequelize) => {

  type RestaurantCreationAttributes = Optional<IRestaurant, 'id'>;

  class Restaurant extends Model<IRestaurant, RestaurantCreationAttributes> {
    declare id: number;
    declare name: string;
    declare address: string;
  }
  
  Restaurant.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    address: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    tableName: 'restaurants',
    sequelize
  });

  return Restaurant
}


export default model;