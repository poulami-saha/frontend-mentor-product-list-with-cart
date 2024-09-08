import useScreenWidth from "../hooks/useScreenWidth";
import { useEffect, useState } from "react";
import styles from "./DesertDetails.module.css";
import AddToCart from "./AddToCartButton";
import { Desert } from "../model/deserts";
import { CartItem, useCart } from "../context/CartContext";
import Grid from "@mui/material/Grid2";

const DesertDetails: React.FC<{ desert: Desert }> = ({ desert }) => {
  const screenWidth = useScreenWidth();
  const [imageSrc, setImageSrc] = useState("");
  const { state, dispatch } = useCart();

  useEffect(() => {
    setImageSrc(() => {
      if (screenWidth < 768) {
        return desert.image.mobile;
      }
      if (screenWidth < 960 && screenWidth >= 768) {
        return desert.image.tablet;
      }
      return desert.image.desktop;
    });
  }, [desert, screenWidth]);

  const addToCartHandler = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: desert.id,
        name: desert.name,
        individualPrice: desert.price,
        totalItemPrice: desert.price,
        imageSrc: desert.image.thumbnail,
        quantity: 1,
      },
    });
  };

  const removeFromCartHandler = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        id: desert.id,
        name: desert.name,
        individualPrice: desert.price,
        totalItemPrice: desert.price,
        imageSrc: desert.image.thumbnail,
        quantity: 1,
      },
    });
  };

  const currentItem = state.items.find(
    (item: CartItem) => item.id === desert.id
  );
  const isItemInCart =
    state.items.find((item) => item.id === desert.id) !== undefined;

  return (
    <Grid key={desert.id} size={{ xs: 1, sm: 4, md: 4 }}>
      <div
        className={`${styles.imageContainer} ${
          isItemInCart ? styles.highlighted : ""
        }`}
      >
        <img src={imageSrc} alt="Desert" className={styles.desertImage} />
        <AddToCart
          isItemInCart={isItemInCart}
          count={currentItem?.quantity ?? 0}
          addToCart={addToCartHandler}
          removeFromCart={removeFromCartHandler}
        />
      </div>
      <h3 className={styles.desertCategory}>{desert.category}</h3>
      <h3 className={styles.desertName}>{desert.name}</h3>
      <h3 className={styles.desertPrice}>${desert.price}</h3>
    </Grid>
  );
};
export default DesertDetails;
