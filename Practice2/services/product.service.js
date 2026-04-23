import { Product } from "../models/index.js";

export const createProduct = async (data) => {
  return await Product.create(data);
};

export const getProducts = async () => {
  return await Product.findAll();
};

export const getProductById = async (id) => {
  return await Product.findByPk(id);
};

export const updateProduct=async(id,data)=>{
    const [updated]= await Product.update(data,{
        where:{id}
    })
    if (!updated) return null;

  return await Product.findByPk(id);
}

export const deleteProduct=async(id)=>{
    return await Product.destroy({
        where:{id}
    })
}