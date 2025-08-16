import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { ChekcoutPage } from './pages/CheckoutPage'
import './App.css'


function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<ChekcoutPage />} />
    </Routes>
    
  )
}

export default App
