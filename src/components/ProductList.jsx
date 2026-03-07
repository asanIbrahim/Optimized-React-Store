import { useCallback, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { products } from "../data/products";
import { addCart } from "../future/cart/cartSlice";
import ProductCard from '../components/ProductCard'

export default function ProductList() {
  const [serach, SetSearch] = useState("");
  const dispatch = useDispatch();
  const filterProduct = useMemo(() => {
    return products.filter((p) =>
      p.title.toLowerCase().includes(serach.toLowerCase())
    );
  }, [serach]);

  const onAdd = useCallback(
    (product) => {
      dispatch(addCart(product));
    },
    [dispatch]
  );
  return (
    <div>
      <input
        placeholder="Search Product"
        onChange={(e) => SetSearch(e.target.value)}
      />
      {filterProduct.map((product) => (
        <ProductCard key={product.id} product={product} onAdd={onAdd} />
      ))}
    </div>
  );
}
