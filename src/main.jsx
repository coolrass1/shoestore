import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './custom.scss'
import { BrowserRouter } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import{shoeReducer} from './reducers/shoes'
import  cartReducer from './reducers/cartslice'
import { shoeApi } from './rtk/shoes'
import {store} from './rtk/store'

/*const store = configureStore( {reducer: {
  shoes:shoeReducer,
  cart: cartReducer,
  
}},)*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
 <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>,
)
