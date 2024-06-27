import React from "react";
import { useState } from "react";

function Products() {
  const [products, setProduct] = useState([]);
  const [newProduct, setNewProduct] = useState("");

  function handleInputChange(event) {
    setNewProduct(event.target.value);
  }

  function addProduct() {
    if (newProduct.trim() !== "") {
      setProduct(p => [...p, newProduct]);
      setNewProduct("");
    }else{
      console.log('Vacio')
    }
  }

  function deleteProduct(index) {
    const updatedProduct = products.filter((_, i) => i !== index);
    setProduct(updatedProduct);
  }

  function moveUpProduct(index) {
    if (index > 0) {
      const updatedProduct = [...products];
      [updatedProduct[index], updatedProduct[index - 1]] = 
      [updatedProduct[index - 1], updatedProduct[index]];
      setProduct(updatedProduct)
    }

  }

  function moveDownProduct(index) {
    if (index < products.length -1) {
      const updatedProduct = [...products];
      [updatedProduct[index], updatedProduct[index + 1]] = 
      [updatedProduct[index + 1], updatedProduct[index]];
      setProduct(updatedProduct)
    }

  }

  return (
    <div className="product-list">
      <h1>Products List</h1>

      <div>
        <input
          type="text"
          placeholder="Enter a new product"
          value={newProduct}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addProduct}>
          Add
        </button>
      </div>

      <ol>
        {products.map((product, index) => (
          <li key={index}>
            <span className="text">{product}</span>
            <button
              className="delete-button"
              onClick={() => {
                deleteProduct(index);
              }}
            >
              Delete
            </button>
            <button
              className="up-button"
              onClick={() => {
                moveUpProduct(index);
              }}
            >
              Up
            </button>
            <button
              className="down-button"
              onClick={() => {
                moveDownProduct(index);
              }}
            >
              Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Products;
