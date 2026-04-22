import { Order, OrderItem, Product } from "../models/index.js";

export const createOrder = async (req, res) => {
  try {
    const { items } = req.body; // [{ productId, quantity }]

    let total = 0;

    const order = await Order.create({
      UserId: req.user.id,
      totalPrice: 0,
    });

    for (const item of items) {
      const product = await Product.findByPk(item.productId);

      const price = product.price * item.quantity;
      total += price;

      await OrderItems.create({
        OrderId: order.id,
        ProductId: product.id,
        quantity: item.quantity,
        price,
      });
    }

    order.totalPrice = total;
    await order.save();

    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};