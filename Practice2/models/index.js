
import Order from "./Order.model.js";
import OrderItem from "./OrderItem.model.js";
import Product from "./Product.model.js";
import User from "./User.model.js";
import WishList from "./WishList.model.js";



User.hasMany(Order, { foreignKey: "userId" });
Order.belongsTo(User, { foreignKey: "userId" });

Order.hasMany(OrderItem, { foreignKey: "orderId" });
OrderItem.belongsTo(Order, { foreignKey: "orderId" });

Product.hasMany(OrderItem, { foreignKey: "productId" });
OrderItem.belongsTo(Product, { foreignKey: "productId" });

User.belongsToMany(Product,{
  through:WishList,
  foreignKey:"userId",
  as:"wishlist"
})

Product.belongsToMany(User,{
  through:WishList,
  foreignKey:"productId",
  as:"wishlistedBy"
})

export {
  User,
  Product,
  Order,
  OrderItem,
  WishList
  
};