const Product = require("../models/product.js");
class ProductController {
  fetchProduct = async (req, res, next) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        res.status(404).json({ error: "Product not found" }); // 404 Not Found status code
      } else {
        res.status(200).json(product); // 200 OK status code
      }
    } catch (error) {
      res.status(500).json({ error: error.message }); // 500 Internal Server Error status code
    }
  };
  fetchProducts = async (req, res, next) => {
    // Read all products

    try {
      const products = await Product.find();
      res.status(200).json(products); // 200 OK status code
    } catch (error) {
      res.status(500).json({ error: error.message }); // 500 Internal Server Error status code
    }
  };
  putProduct = async (req, res, next) => {
    try {
      const product = req.body;
      if (!product) {
        res.status(404).json({ error: "Product not found" }); // 404 Not Found status code
      }
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedProduct) {
        res.status(404).json({ error: "Product not found" }); // 404 Not Found status code
      } else {
        res.status(200).json(updatedProduct); // 200 OK status code
      }
    } catch (error) {
      res.status(400).json({ error: error.message }); // 400 Bad Request status code
    }
  };
  saveProduct = async (req, res, next) => {
    try {
      const product = new Product(req.body);
      await product.save();
      res.status(201).json(product); // 201 Created status code
    } catch (error) {
      res.status(400).json({ error: error.message }); // 400 Bad Request status code
    }
  };
  deleteProduct = async (req, res, next) => {
    try {
      const deletedProduct = await Product.findByIdAndRemove(req.params.id);
      if (!deletedProduct) {
        res.status(404).json({ error: "Product not found" }); // 404 Not Found status code
      } else {
        res.status(204).send(); // 204 No Content status code
      }
    } catch (error) {
      res.status(500).json({ error: error.message }); // 500 Internal Server Error status code
    }
  };
}

module.exports = new ProductController();
