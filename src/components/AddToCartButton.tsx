import styles from "./AddToCartButton.module.css";
import icon from "../assets/images/icon-add-to-cart.svg";
import decrement from "../assets/images/icon-decrement-quantity.svg";
import increment from "../assets/images/icon-increment-quantity.svg";

interface AddToCartProps {
  isItemInCart: boolean;
  count: number;
  addToCart: () => void;
  removeFromCart: () => void;
}
const AddToCart: React.FC<AddToCartProps> = ({
  isItemInCart,
  count,
  addToCart,
  removeFromCart,
}) => {
  if (isItemInCart) {
    return (
      <button className={styles.centeredCountButton}>
        <img
          src={decrement}
          alt="Decrement Item"
          className={styles.countingIcon}
          onClick={removeFromCart}
        />
        <h5 className={styles.text}>{count}</h5>
        <img
          src={increment}
          alt="Increment Item"
          className={styles.countingIcon}
          onClick={addToCart}
        />
      </button>
    );
  }
  return (
    <button className={styles.centeredButton} onClick={addToCart}>
      <img src={icon} alt="Add To Cart" className={styles.icon} />
      <h5 className={styles.text}>Add to Cart</h5>
    </button>
  );
};
export default AddToCart;
