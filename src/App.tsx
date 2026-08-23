import { Route, Routes } from 'react-router-dom'
import { LandingPage } from './pages/landing/LandingPage'
import { MenuPage } from './pages/menu/MenuPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/m/:restaurantSlug" element={<MenuPage />} />
    </Routes>
  )
}

export default App
