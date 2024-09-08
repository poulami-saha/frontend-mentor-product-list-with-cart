import { CartItem, useCart } from "../context/CartContext";
import styles from "./OrderDetails.module.css";

const CartDetails = () => {
  const { state } = useCart();
  return (
    <div className={styles.cartContainer}>
      {state.items.map((cartItem: CartItem) => {
        return (
          <div className={styles.container} key={cartItem.id}>
            <div className={styles.order}>
              <img src={cartItem.imageSrc} className={styles.logo} />
              <div className={styles.details}>
                <p className={styles.name}>{cartItem.name}</p>
                <div className={styles.detailsContent}>
                  <p className={styles.count}>{cartItem.quantity}x </p>
                  <p className={styles.individualPrice}>
                    @{cartItem.individualPrice}
                  </p>
                </div>
              </div>
            </div>
            <p className={styles.price}>${cartItem.totalItemPrice}</p>
          </div>
        );
      })}
      <div className={styles.totalPrice}>
        <p>Order Total</p>
        <h3>${state.totalPrice}</h3>
      </div>
    </div>
  );
};
export default CartDetails;
