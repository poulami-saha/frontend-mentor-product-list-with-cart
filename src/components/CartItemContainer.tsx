import { CartItem, useCart } from "../context/CartContext";
import deleteIcon from "../assets/images/icon-remove-item.svg";
import styles from "./CartItemContainer.module.css";

const CartItemContainer: React.FC<{ cartItem: CartItem }> = ({ cartItem }) => {
  const { dispatch } = useCart();
  const removeFromCartHandler = () => {
    dispatch({
      type: "DELETE_ITEM",
      payload: {
        id: cartItem.id,
        name: cartItem.name,
        individualPrice: cartItem.individualPrice,
        totalItemPrice: cartItem.totalItemPrice,
        imageSrc: cartItem.imageSrc,
        quantity: cartItem.quantity,
      },
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <h4 className={styles.name}>{cartItem.name}</h4>
        <div className={styles.detailsContent}>
          <p className={styles.count}>{cartItem.quantity}x </p>
          <p className={styles.individualPrice}>
            @ ${cartItem.individualPrice}
          </p>
          <p className={styles.totalPrice}>${cartItem.totalItemPrice}</p>
        </div>
      </div>
      <img
        src={deleteIcon}
        alt="Remove"
        className={styles.countingIcon}
        onClick={removeFromCartHandler}
      />
    </div>
  );
};
export default CartItemContainer;
