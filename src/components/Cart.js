import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <>
      <div>Total Items in Cart - {cartItems.length}</div>
      <ul>
        {cartItems.map((cartItem) => (
          <li>{cartItem.card.info.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Cart;
