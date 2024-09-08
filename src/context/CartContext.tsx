import { Dispatch, ReactNode, useContext, useReducer } from "react";
import { createContext } from "react";

export interface CartItem {
  id: number;
  name: string;
  individualPrice: number;
  totalItemPrice: number;
  quantity: number;
  imageSrc: string;
}

type CartAction =
  | { type: "ADD_TO_CART"; payload: CartItem }
  | { type: "REMOVE_FROM_CART"; payload: CartItem }
  | { type: "DELETE_ITEM"; payload: CartItem }
  | { type: "CLEAR_CART" };

interface CartState {
  items: CartItem[];
  totalPrice: number;
  totalQuantity: number;
}

const initialCartState: CartState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        const updatedItems = state.items.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
              totalItemPrice:
                item.totalItemPrice + action.payload.totalItemPrice,
            };
          }
          return item;
        });
        return {
          items: updatedItems,
          totalPrice: state.totalPrice + action.payload.totalItemPrice,
          totalQuantity: state.totalQuantity + 1,
        };
      } else {
        return {
          items: [
            ...state.items,
            {
              ...action.payload,
              totalItemPrice: action.payload.totalItemPrice,
              individualPrice: action.payload.individualPrice,
            },
          ],
          totalPrice: state.totalPrice + action.payload.totalItemPrice,
          totalQuantity: state.totalQuantity + action.payload.quantity,
        };
      }
    }
    case "REMOVE_FROM_CART": {
      const itemToBeRemoved = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (itemToBeRemoved) {
        if (itemToBeRemoved.quantity === 1) {
          return {
            items: state.items.filter((item) => item.id === action.payload.id),
            totalPrice: state.totalPrice - itemToBeRemoved.totalItemPrice,
            totalQuantity: state.totalQuantity - 1,
          };
        } else {
          const updatedItems = state.items.map((item) => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                quantity: item.quantity - 1,
                totalItemPrice:
                  item.totalItemPrice - action.payload.totalItemPrice,
              };
            } else {
              return item;
            }
          });
          return {
            items: updatedItems,
            totalPrice: state.totalPrice - action.payload.totalItemPrice,
            totalQuantity: state.totalQuantity - 1,
          };
        }
      } else {
        return state;
      }
    }
    case "DELETE_ITEM": {
      return {
        items: state.items.filter((item) => item.id !== action.payload.id),
        totalPrice: state.totalPrice - action.payload.totalItemPrice,
        totalQuantity: state.totalQuantity - action.payload.quantity,
      };
    }
    case "CLEAR_CART": {
      return {
        items: [],
        totalPrice: 0,
        totalQuantity: 0,
      };
    }
    default:
      return state;
  }
};

interface CartContextType {
  state: CartState;
  dispatch: Dispatch<CartAction>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be within a provider");
  }
  return context;
};
