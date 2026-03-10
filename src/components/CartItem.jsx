import { useDispatch } from "react-redux"
import { removeCart } from "../future/cart/cartSlice"

export default function CartItem({ item }) {
    const dispatch = useDispatch()
   
    return (
        <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
            <h4>{item.title}</h4>
            <p>Price:{item.price}</p>
            <button onClick={() => dispatch(removeCart(item.id))}>Remove </button>
        </div>
    )
}