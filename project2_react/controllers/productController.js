const Product = require("../models/Product");

// CREATE
exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ ALL
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ ONE
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
exports.updateProduct = async (req, res) => {
  try {
    await Product.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ message: "Updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
exports.deleteProduct = async (req, res) => {
  try {
    await Product.destroy({
      where: { id: req.params.id },
    });
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};  