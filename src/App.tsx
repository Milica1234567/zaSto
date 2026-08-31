import { Route, Routes } from 'react-router-dom'
import { AnalyticsPageView } from './components/common/AnalyticsPageView/AnalyticsPageView'
import { RouteMetadata } from './components/common/RouteMetadata/RouteMetadata'
import { ScrollToTop } from './components/common/ScrollToTop/ScrollToTop'
import { LandingPage } from './pages/landing/LandingPage'
import { MenuPage } from './pages/menu/MenuPage'

function App() {
  return (
    <>
      <RouteMetadata />
      <AnalyticsPageView />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/m/:restaurantSlug" element={<MenuPage />} />
      </Routes>
    </>
  )
}

export default App
