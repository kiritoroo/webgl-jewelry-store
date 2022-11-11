import {
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_FAIL,

  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,

  NEW_PRODUCT_REQUEST,
  NEW_PRODUCT_SUCCESS,
  NEW_PRODUCT_RESET,
  NEW_PRODUCT_FAIL,

  CLEAR_ERRORS
} from './productConstants'

const initialState = {
  loading: true,
  error: null
}

export const productsReducer = (state = { products: [], ...initialState }, action) => {
  switch(action.type) {
    case ALL_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.products
      }
    case ALL_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case CLEAR_ERRORS:
      return {
          ...state,
          error: null
      }

    default:
      return {
        ...state
      }
  }
}

export const productDetailsReducer = (state = { product: {}, ...initialState }, action) => {
  switch(action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload.product
      }
    case PRODUCT_DETAILS_FAIL:
      return {
        ...state,
        error: action.payload
      }
    case CLEAR_ERRORS:
      return {
          ...state,
          error: null
      }
    
    default:
      return {
        ...state
      }
  }
}

export const newProductReducer = (state = { product: {}, ...initialState, success: false}, action) => {
  switch(action.type) {
    case NEW_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true
      }
    case NEW_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        product: action.payload.product
      }
    case NEW_PRODUCT_FAIL:
      return {
        ...state,
        error: action.payload
      }
    case NEW_PRODUCT_RESET:
      return {
        ...state,
        success: false
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      }

    default:
      return {
        ...state
      }
  }
}