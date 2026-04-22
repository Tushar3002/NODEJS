
import Order from "./Order.model.js";
import OrderItems from "./OrderItems.model.js";
import Product from "./Product.model.js";
import User from "./User.model.js";


User.hasMany(Order);
Order.belongsTo(User);

Order.hasMany(OrderItems);
OrderItems.belongsTo(Order);

Product.hasMany(OrderItems);
OrderItems.belongsTo(Product);

export {
  User,
  Product,
  Order,
  OrderItems
};