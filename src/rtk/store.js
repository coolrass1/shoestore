import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import{shoeReducer} from '../reducers/shoes'
import  cartReducer from '../reducers/cartslice'
import { shoeApi } from './shoes'

export const store = configureStore({
  reducer: {
    shoes:shoeReducer,
    cart: cartReducer,
    // Add the generated reducer as a specific top-level slice
    [shoeApi.reducerPath]: shoeApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shoeApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)