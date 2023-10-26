const express = require("express");
const router = express.Router();

const productController = require("../controllers/product.controller");

// Fetch all company details
router.get("/:id", productController.fetchProduct);
router.get("/", productController.fetchProducts);
router.put("/:id", productController.putProduct);
router.post("/", productController.saveProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
