import * as ProductServices from "../services/product.service.js";
//create

export const createProduct = async (req, res) => {
  try {
    const product = await ProductServices.createProduct(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//get
 
export const getAllProduct = async (req, res) => {
  try {
    const product = await ProductServices.getProducts();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSingleProduct = async (req, res) => {
  try {
    const product = await ProductServices.getProductById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//update

export const updateProduct = async (req, res) => {
  try {
    const updated = await ProductServices.updateProduct(
      req.params.id,
      req.body,
    );
    if (!updated) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//delete

export const deleteProduct = async (req, res) => {
  try {
    const deleted = await ProductServices.deleteProduct(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};