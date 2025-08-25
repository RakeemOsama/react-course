import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { ChekcoutPage } from './pages/CheckoutPage'
import { TrackingPage } from './pages/TrackingPage'
import { OrdersPage } from './pages/OrdersPage'
import { ErrorPage } from './pages/ErrorPage'
import './App.css'


function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<ChekcoutPage />} />
      <Route path="tracking" element={<TrackingPage />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    
  )
}

export default App
