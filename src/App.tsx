import { Route, Routes } from 'react-router-dom'
import { RouteMetadata } from './components/common/RouteMetadata/RouteMetadata'
import { LandingPage } from './pages/landing/LandingPage'
import { MenuPage } from './pages/menu/MenuPage'

function App() {
  return (
    <>
      <RouteMetadata />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/m/:restaurantSlug" element={<MenuPage />} />
      </Routes>
    </>
  )
}

export default App
