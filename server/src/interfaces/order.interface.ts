export interface IOrder {
  id: number,
  restaurantId: number,
  timestamp: Date;
  status: string;
  totalPrice: number;
}