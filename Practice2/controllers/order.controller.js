import { Order, OrderItem, Product } from "../models/index.js";

export const createOrder = async (req, res) => {
  try {
    const userId = req.user.id; 
    const { items } = req.body;

    let totalPrice = 0;

    const productIds = items.map((i) => i.productId);

    const products = await Product.findAll({
      where: { id: productIds },
    });
  
    const orderItemsData = items.map((item) => {
      const product = products.find(p => p.id === item.productId);

      if (!product) throw new Error("Product not found");

      totalPrice += product.price * item.quantity;

      return {
        productId: product.id,
        quantity: item.quantity,
        price: product.price,
      };
    });

    //  create order
    const order = await Order.create({
      userId,
      totalPrice,
    });

    // attach orderId to items
    const finalItems = orderItemsData.map((item) => ({
      ...item,
      orderId: order.id,
    }));

    await OrderItem.bulkCreate(finalItems);

    res.status(201).json({
      message: "Order created",
      orderId: order.id,
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const getOrder=async(req,res)=>{
  try {
    const orders=await Order.findAll({
      where:{userId:req.user.id},
      include:[
        {
          model:OrderItem,
          include:[{
            model:Product,
            attributes:["id","name","price","imageUrl"],
          }]        
        }
      ],
      order:[["createdAt","DESC"]]
    })

    res.json(orders);
  } catch (err) {
    res.status(500).json({error:err.message})
  }
}