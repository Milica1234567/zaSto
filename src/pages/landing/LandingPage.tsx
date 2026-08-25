import { Footer } from '../../components/common/Footer/Footer'
import { Benefits } from '../../components/landing/Benefits/Benefits'
import { Hero } from '../../components/landing/Hero/Hero'
import { HowItWorks } from '../../components/landing/HowItWorks/HowItWorks'
import { LandingHeader } from '../../components/landing/LandingHeader/LandingHeader'
import './LandingPage.css'

export function LandingPage() {
  return <div className="landing-page">
    <LandingHeader />
    <main>
      <Hero />
      <HowItWorks />
      <Benefits />
    </main>
    {/* Future sections: Hero, How it works, Benefits, Demo, Pricing, FAQ, Contact */}
    <Footer />
  </div>
}
