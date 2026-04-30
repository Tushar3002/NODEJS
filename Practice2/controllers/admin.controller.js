import Order from "../models/Order.model.js";
import OrderItem from "../models/OrderItem.model.js";
import Product from "../models/Product.model.js";
import User from "../models/User.model.js";


export const adminDashboard=async (req, res) => {
  try {
    const totalOrders = await Order.count();

    const orders = await Order.findAll();

    const totalRevenue = orders.reduce(
      (sum, order) => sum + order.totalPrice,
      0
    );

    const totalUsers = await User.count();

    res.json({
      totalOrders,
      totalRevenue,
      totalUsers,
    });
  } catch (err) {
    console.error("DASHBOARD ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
}


export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [
        {
          model: OrderItem,
          include: [
            {
              model: Product,
              attributes: ["id", "name", "price", "imageUrl"],
            },
          ],
        },
      ],
      order: [["createdAt", "DESC"]],
    });

    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const order = await Order.findByPk(id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.status = status;
    await order.save();

    res.json({ message: "Order updated", order });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updatePaymentStatus = async(req,res)=>{
  try {
    const {id}= req.params;
    const {paymentStatus}=req.body;
    const order=await Order.findByPk(id)
    if(!order) return res.json(404).json({message:"Order Not Found"})

    order.paymentStatus=paymentStatus
    await order.save()
    res.status(200).json({message:"Status Updated successfully"})

  } catch (error) {
    res.status(500).json({message:error.message})
  }
}


export const getAllUsersDetails = async(req,res)=>{
  try {
    const data = await User.findAll()
    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json({error:error.message})
  }
}

export const deleteUser = async(req,res)=>{
  try {
    const deleted = await User.destroy({ where:{id:req.params.id}})
    if(!deleted) return res.status(404).json({message:"USer NOT Found"})

    return res.status(200).json({message:"User has been deleted"})
  } catch (error) {
    return res.status(500).json({error:error.message})
  }
}