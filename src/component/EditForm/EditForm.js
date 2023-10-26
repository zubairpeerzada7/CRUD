import React from "react";
import css from "./EditForm.module.css";
export default function EditForm({ product, onSave, onDelete, onEdit }) {
  const newProd = product._id === "new";
  console.log({ newProd });

  const [name, setName] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [price, setPrice] = React.useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeCategory = (e) => {
    setCategory(e.target.value);
  };
  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const onChangePrice = (e) => {
    setPrice(e.target.value);
  };
  React.useEffect(() => {
    if (product._id !== "new") {
      setName(product.name);
      setCategory(product.category);
      setDescription(product.description);
      setPrice(product.price);
    }
  }, [product]);
  const onSubmit = () => {
    if (!name) {
      return;
    }
    if (newProd) {
      onSave({
        name: name,
        category: category,
        description: description,
        price: price,
        _id: product._id,
      });
    } else {
      onEdit({
        name: name,
        _id: product._id,

        category: category,
        description: description,
        price: price,
      });
    }
  };
  return (
    <form className={css.formContainer}>
      <h4>{newProd ? "New Product" : "Edit Product"}</h4>
      <div className="form-group">
        <label className="form-label" htmlFor="name">
          Name(required):{" "}
        </label>
        <input
          className="form-control"
          id="name"
          name="name"
          value={name}
          onChange={onChangeName}
        />
      </div>
      <div className="form-group">
        <label htmlFor="category" className="form-label">
          Category:{" "}
        </label>
        <input
          id="category"
          name="category"
          value={category}
          onChange={onChangeCategory}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="description">
          Description:{" "}
        </label>
        <input
          className="form-control"
          id="description"
          name="description"
          value={description}
          onChange={onChangeDescription}
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="price">
          Price:{" "}
        </label>
        <input
          className="form-control"
          id="price"
          name="price"
          value={price}
          onChange={onChangePrice}
        />
      </div>

      <button className="btn btn-primary" type="button" onClick={onSubmit}>
        {newProd ? "Save" : "Edit"}
      </button>
      {
        <button className="btn btn-danger" onClick={onDelete}>
          Cancel
        </button>
      }
    </form>
  );
}
