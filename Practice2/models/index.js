
import Order from "./Order.model.js";
import OrderItem from "./OrderItem.model.js";
import Product from "./Product.model.js";
import User from "./User.model.js";



User.hasMany(Order, { foreignKey: "userId" });
Order.belongsTo(User, { foreignKey: "userId" });

Order.hasMany(OrderItem, { foreignKey: "orderId" });
OrderItem.belongsTo(Order, { foreignKey: "orderId" });

Product.hasMany(OrderItem, { foreignKey: "productId" });
OrderItem.belongsTo(Product, { foreignKey: "productId" });

export {
  User,
  Product,
  Order,
  OrderItem
};