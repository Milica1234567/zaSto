import { Button } from '../../components/common/Button/Button'
import { Footer } from '../../components/common/Footer/Footer'
import { Header } from '../../components/common/Header/Header'
import './LandingPage.css'

export function LandingPage() {
  return <div className="landing-page">
    <Header />
    <main className="landing-placeholder">
      <p className="landing-placeholder__brand">ZaSto</p>
      <h1>Digitalni meni za vaš restoran</h1>
      <p>Jednostavan, brz i uvek ažuran meni koji vaši gosti otvaraju jednim skeniranjem.</p>
      <Button to="/m/demo">Pogledaj demo meni</Button>
    </main>
    {/* Future sections: Hero, How it works, Benefits, Demo, Pricing, FAQ, Contact */}
    <Footer />
  </div>
}
