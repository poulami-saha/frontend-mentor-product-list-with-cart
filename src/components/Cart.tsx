import empty from "../assets/images/illustration-empty-cart.svg";
import { CartItem, useCart } from "../context/CartContext";
import styles from "./Cart.module.css";
import CartItemContainer from "./CartItemContainer";
import tree from "../assets/images/icon-carbon-neutral.svg";
import OrderConfirmation from "./OrderConfirmationModal";
import { useState } from "react";

const Cart = () => {
  const [open, setOpen] = useState(false);
  const { state, dispatch } = useCart();
  const submitHandler = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    dispatch({ type: "CLEAR_CART" });
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>
        Your Cart ({state.totalQuantity > 0 ? state.totalQuantity : 0})
      </h2>
      {state.totalQuantity === 0 && (
        <div className={styles.content}>
          <img src={empty} alt="Empty Cart" />
          <h5 className={styles.text}>Your added items will appear here</h5>
        </div>
      )}
      {state.totalQuantity > 0 && (
        <>
          {state.items.map((item: CartItem) => (
            <CartItemContainer cartItem={item} key={item.id} />
          ))}
          <div className={styles.totalPrice}>
            <h4>Order Total</h4>
            <h3>${state.totalPrice}</h3>
          </div>

          <div className={styles.noteSection}>
            <img src={tree} alt="tree" />
            <p className={styles.note}>
              This is a <b>carbon-neutral</b> delivery
            </p>
          </div>

          <button className={styles.submit} onClick={submitHandler}>
            Confirm Order
          </button>
          <OrderConfirmation open={open} handleClose={handleClose} />
        </>
      )}
    </div>
  );
};
export default Cart;
