import React, { useEffect } from "react";
import { useState } from "react";

const Product = () => {
  // Note: this id should come from api
  const [products,setProducts]=useState([]);

  useEffect(()=>{ 
    const fecthProducts=async()=>{
      fetch("http://localhost:8080/products")
      .then((r)=>r.json())
      .then((d)=>{ 
        setProducts(d)
      });
    };
    fecthProducts();
  },[]);

  

  const product = { id: 1 };
  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name"></h3>
      <h6 data-cy="product-description"></h6>
      <button data-cy="product-add-item-to-cart-button"></button>
      <div>
        <button data-cy="product-increment-cart-item-count-button"></button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button"></button>
        <button data-cy="product-remove-cart-item-button"></button>
      </div>

      {products.map((e)=>(
        <div>{e.id}</div>
      ))}
    </div>
  );
};

export default Product;
