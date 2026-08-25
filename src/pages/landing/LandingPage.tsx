import { Footer } from '../../components/common/Footer/Footer'
import { Hero } from '../../components/landing/Hero/Hero'
import { LandingHeader } from '../../components/landing/LandingHeader/LandingHeader'
import './LandingPage.css'

export function LandingPage() {
  return <div className="landing-page">
    <LandingHeader />
    <main><Hero /></main>
    {/* Future sections: Hero, How it works, Benefits, Demo, Pricing, FAQ, Contact */}
    <Footer />
  </div>
}
