import { useState } from 'react'

import './ccustom.css'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './pages/Layout'
import ShoePage from './pages/ShoePage'
import CartPage from './pages/CartPage'
import { CheckoutPage } from './pages/CheckoutPage'

function App() {
  return(<Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="/shoe/:id" element={<ShoePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      
      

      {/* Using path="*"" means "match anything", so this route
            acts like a catch-all for URLs that we don't have explicit
            routes for. */}
      <Route path="*" element={<h1>no match</h1>} />
    </Route>
  </Routes>
)
}

export default App
