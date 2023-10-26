import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React from "react";
import ProductCard from "./component/ProductCard/ProductCard";
import EditForm from "./component/EditForm/EditForm";
import css from "./App.module.css";
function App() {
  const [products, setProducts] = React.useState([]);
  const [editForm, setEditForm] = React.useState(null);
  console.log({ editForm });
  const fetchProducts = React.useCallback(async () => {
    const products = await axios.get("/api/product");
    setProducts(products.data);
  }, []);
  const saveNewProduct = async (product) => {
    fetchProducts();
  };
  React.useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <div className="App">
      <button
        onClick={() => {
          setEditForm({ _id: "new" });
        }}
        className="btn btn-primary"
      >
        Create New
      </button>
      <div className={css.productCardsContainer}>
        {products.map((product) => (
          <div key={product._id}>
            <ProductCard
              product={product}
              onDelete={async (_id) => {
                await axios.delete(`/api/product/${_id}`);
                fetchProducts();
              }}
              onSave={() => {}}
              onEdit={(data) => {
                setEditForm(data);
              }}
            />
          </div>
        ))}
        {editForm ? (
          <EditForm
            product={editForm}
            onSave={async (prod) => {
              console.log(prod);
              const { _id, ...data } = prod;
              await axios.post("/api/product", data);
              fetchProducts();
              setEditForm(null);
            }}
            onDelete={() => setEditForm(null)}
            onEdit={async (prod) => {
              const { _id, ...data } = prod;
              await axios.put(`/api/product/${_id}`, data);
              fetchProducts();
              setEditForm(null);
            }}
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;
