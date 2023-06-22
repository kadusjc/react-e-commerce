import _ from 'lodash'
import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/types';

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return addToCart(state, action)
    }
    case REMOVE_FROM_CART:
      return removeFromCart(state, action)
      
    default:
      return state;
  }
};

function addToCart(state, action) {
  let stateCartItems = [ ...state.cartItems ]
  let payload = { ...action.payload }
  let isProductAlreadyInCart = _.filter(state.cartItems, { id: action.payload.id })
  let filterSize = isProductAlreadyInCart.length

  let productAlreadyInCart = isProductAlreadyInCart[filterSize-1]
  if (productAlreadyInCart) { 
    payload = { ...action.payload, qty: productAlreadyInCart.qty + 1 } 
    _.remove(stateCartItems, (item) => item.id === action.payload.id && item.qty !== productAlreadyInCart.qty + 1)
  }
  return { cartItems: [ ...stateCartItems, payload ] }
}

function removeFromCart(state, action) {
  let stateCartItems = [ ...state.cartItems ]
  _.remove(stateCartItems, (item) => item.id === action.payload)
  return { ...state, cartItems: stateCartItems }
}

export default cartReducer;
