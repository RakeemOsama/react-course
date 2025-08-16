import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { ChekcoutPage } from './pages/CheckoutPage'
import './App.css'
import { TrackingPage } from './pages/TrackingPage'


function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<ChekcoutPage />} />
      <Route path="tracking" element={<TrackingPage />} />
    </Routes>
    
  )
}

export default App
