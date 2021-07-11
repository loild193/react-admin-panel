import products from '../assets/JsonData/products.json'
import Product from "../components/product";
import React from "react";

const Products = (props) => {

  return (
    <div className="products">
      <h2 className="page-header">Products</h2>
      <div className="row">
        {
          products.map(product =>
            <Product
              key={product.id}
              product={product}
            />
          )
        }
      </div>
    </div>
  )
}

export default Products