import { Product } from "../../components/dashboard";
import * as ActionTypes from "../actions/actions";

const initialState: { cart: Product[] } = {
  cart: [],
};

const cartReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  let cartItems = [...state.cart];
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      /**
       *  action.payload gets the index of the item
       */
      cartItems[action.payload].isAdded = true;
      return {
        ...state,
        cart: cartItems,
      };
    case ActionTypes.REMOVE_FROM_CART:
      /** already have the index and just change the boolean to false to remove from cart
       * action.payload gets the index of the item
       */
      cartItems[action.payload].isAdded = false;
      if (cartItems[action.payload]?.quantity)
        cartItems[action.payload].quantity = 0;
      return {
        ...state,
        cart: cartItems,
      };
    case ActionTypes.INCREASE_QUANTITY:
      /** change the quantity to increase the cart value */
      const incIndexItem = cartItems[action.payload]?.quantity;
      /** if quantity key property doesnt exist or less than equal to 1 then,
       * make it 2(as adding to cart means 1 quantity added)
       * else just add +1 to cart
       * */
      cartItems[action.payload].quantity =
        !!!incIndexItem || incIndexItem <= 1 ? 2 : incIndexItem + 1;
      return {
        ...state,
        cart: cartItems,
      };
    case ActionTypes.DECREASE_QUANTITY:
      /** change the quantity to decrease the cart value */

      const decIndexItem = cartItems[action.payload]?.quantity;

      /** if quantity key property doesnt exist or less than equal to 1 then,
       * make it 1, as item cannot have less than 1, (0 means removed from cart)
       * */
      cartItems[action.payload].quantity =
        !!!decIndexItem || decIndexItem <= 1 ? 1 : decIndexItem - 1;
      return {
        ...state,
        cart: cartItems,
      };
    case ActionTypes.FETCH_PRODUCTS:
      /** fetch all the products  */
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};

export default cartReducer;
