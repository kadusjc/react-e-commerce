import { FETCH_PRODUCTS, PRODUCT_LIST } from '../actions/types';

const initialState = {
  products: PRODUCT_LIST
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
   
    default:
      return state;
  }
};

export default productReducer;
