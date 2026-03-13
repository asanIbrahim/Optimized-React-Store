import React from "react";

const ProductCard = React.memo(({ product, onAdd }) => {
console.log("render", product.title,product.price);
  return (
    <div>
      <h3>{product.title}</h3>
      <p>₹{product.price}</p>
      <button onClick={() => onAdd(product)}> Add to Cart </button>
    </div>
  );
});
export default ProductCard;
