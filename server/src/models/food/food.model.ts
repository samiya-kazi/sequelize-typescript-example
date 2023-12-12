import { Model, DataTypes, Optional } from 'sequelize';
import { IFood } from '../../interfaces/food.interface';
import sequelize from '..';

interface FoodCreationAttributes extends Optional<IFood, 'id'> {};

interface FoodInstance extends Model<IFood, FoodCreationAttributes>, IFood {
  createdAt?: Date;
  updatedAt?: Date;
}


const Food = sequelize.define<FoodInstance>('food', {
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
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  restaurantId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})



export default Food;