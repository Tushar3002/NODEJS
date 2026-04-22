
import Order from "./Order.model.js";
import OrderItem from "./OrderItem.model.js";
import Product from "./Product.model.js";
import User from "./User.model.js";


User.hasMany(Order);
Order.belongsTo(User);

Order.hasMany(OrderItem);
OrderItem.belongsTo(Order);

Product.hasMany(OrderItem);
OrderItem.belongsTo(Product);

export {
  User,
  Product,
  Order,
  OrderItem
};