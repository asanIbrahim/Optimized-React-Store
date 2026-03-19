import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function Navbar() {
    const cartItem = useSelector((state) => state.cart.items)
    const cartLength = cartItem.length

    return (
        <nav style={{ display: "flex" }}>
            <Link to={'/'}> Home</Link>
            <Link to="/cart"> Cart ({cartLength})</Link>
            <Link to="/checkout"> Checkout page</Link>
        </nav>
    )
}