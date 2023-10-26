import React from "react";
import css from "./ProductCard.module.css";
export default function ProductCard({ product, onDelete, onSave, onEdit }) {
  return (
    <div className={css.cardContainer}>
      {/* <h1>Product</h1> */}
      <h4>Product : {product.name}</h4>
      <p>Price : {product.price}</p>
      <p>Description : {product.description}</p>
      <p>Category : {product.category}</p>
      <button className="btn btn-primary" onClick={() => onEdit(product)}>
        Edit
      </button>
      <button className="btn btn-danger" onClick={() => onDelete(product._id)}>
        Delete
      </button>
    </div>
  );
}
