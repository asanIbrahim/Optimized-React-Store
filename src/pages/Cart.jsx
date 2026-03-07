import React, { useTransition } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'

function Cart() {
  const cartItems = useSelector((state) => state.cart.items)
  return (
    <div>
      <h2>Cart Page</h2>
       {cartItems.length  === 0 && <p>Cart is Empty</p>}
       {cartItems.map(item=>(
        <CartItem key={item.id} item={item}/>
       ))}
    </div>
  )
}

export default Cart