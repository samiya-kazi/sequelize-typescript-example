import { DataTypes, Model, Optional, OrderItem } from "sequelize";
import { IOrderItem } from "../../interfaces/orderItems.interface";
import sequelize from "..";

interface OrderItemCreationAttributes extends Optional<IOrderItem, 'id'> {};

interface OrderItemInstance extends Model<IOrderItem, OrderItemCreationAttributes>, IOrderItem {
  createdAt?: Date;
  updatedAt?: Date;
}

const OrderItem = sequelize.define<OrderItemInstance>('order_items', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    unique: true,
  },
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  foodId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  quantity: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
})



export default OrderItem;