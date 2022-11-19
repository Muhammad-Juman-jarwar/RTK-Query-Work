import { useGetAllProductsQuery } from "./slices/apiSlice";
import Products from "./products/Products";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {

  const [products, setProducts] = useState([]);

  const onChangeHandler = (e) => {
    const na = e.target.value;
    setProducts(na);
  }


  const search = (`/search?q=${products}`);


  const { data, error, isLoading } = useGetAllProductsQuery(search);

  return (
    <div className="App">
      <Navbar 
        value={products} 
        onChange={onChangeHandler}
      />
      <div className="row">
        <div className="col">
          <h1 className="heading" style={{ textAlign: 'center' }}>ALL Products</h1>
        </div>
      </div>

      {error ? (
        <div className="error">Something went wrong</div>
      ) : isLoading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : data ? (
        data.products.map((product) => (
          <Products
            key={product.id}
            thumbnail={product.thumbnail}
            title={product.title}
            price={product.price}
            description={product.description}
            images={product.images[0]}

          />
        ))
      ) : null}

    </div>
  );
}

export default App;
