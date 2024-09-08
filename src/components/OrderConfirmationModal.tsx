import {
  Dialog,
  DialogContent,
  Typography,
  DialogActions,
  Button,
} from "@mui/material";
import { useCart } from "../context/CartContext";
import tick from "../assets/images/icon-order-confirmed.svg";
import styles from "./OrderConfirmationModal.module.css";
import OrderDetails from "./OrderDetails";

const OrderConfirmation: React.FC<{
  open: boolean;
  handleClose: () => void;
}> = ({ open, handleClose }) => {
  const { state } = useCart();
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="order-dialog-title"
      className={styles.container}
      fullWidth={true}
    >
      <DialogContent>
        {state.items.length > 0 ? (
          <div>
            <img src={tick} alt="Confirmed" className={styles.tick} />
            <h1 className={styles.header}>Order Confirmed</h1>
            <h5 className={styles.note}>We hope you enjoy your food!</h5>
            <OrderDetails />
          </div>
        ) : (
          <Typography>No order details available.</Typography>
        )}
      </DialogContent>
      <DialogActions>
        <button onClick={handleClose} className={styles.submit}>
          Start New order
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default OrderConfirmation;
