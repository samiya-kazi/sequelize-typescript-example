import { DataTypes, Model, Optional } from "sequelize";
import { IOrder } from "../../interfaces/order.interface";
import sequelize from "..";
import OrderItem from "../orderItem/orderItem.model";

interface OrderCreationAttributes extends Optional<IOrder, 'id'> {};

interface OrderInstance extends Model<IOrder, OrderCreationAttributes>, IOrder {
  createdAt?: Date;
  updatedAt?: Date;
}

const Order = sequelize.define<OrderInstance>('orders', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    unique: true,
  },
  restaurantId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  timestamp: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: new Date()
  },
  status: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  totalPrice: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
})

Order.hasMany(OrderItem, {
  sourceKey: 'id',
  foreignKey: 'orderId',
});

OrderItem.belongsTo(Order, {
  foreignKey: 'orderId',
})

export default Order;