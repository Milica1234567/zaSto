import './Pricing.css'
import { trackEvent } from '../../../analytics/analytics'

interface Package {
  name: string
  setupPrice: string
  maintenancePrice: string
  features: string[]
  recommended?: boolean
}

const packages: Package[] = [
  {
    name: 'Start',
    setupPrice: '5.900 RSD',
    maintenancePrice: '990 RSD',
    features: [
      'Izrada QR digitalnog menija',
      'Mobile-first i responsive prikaz',
      'Logo lokala',
      'Osnovno prilagođavanje bojama brenda',
      'Kategorije, proizvodi i cene',
      'QR kod spreman za korišćenje',
      'Do 2 zahteva za izmene mesečno',
    ],
  },
  {
    name: 'Standard',
    setupPrice: '8.900 RSD',
    maintenancePrice: '1.490 RSD',
    recommended: true,
    features: [
      'Sve iz START paketa',
      'Fotografije proizvoda',
      'Opisi proizvoda',
      'Alergeni i druge oznake',
      'Naprednije prilagođavanje identitetu lokala',
      'Do 5 zahteva za izmene mesečno',
    ],
  },
  {
    name: 'Premium',
    setupPrice: '12.900 RSD',
    maintenancePrice: '2.490 RSD',
    features: [
      'Sve iz STANDARD paketa',
      'Do 2 jezika',
      'Do 10 zahteva za izmene mesečno',
      'Prioritetne izmene',
      'Naprednije prilagođavanje menija',
    ],
  },
]

const additionalServices = [
  ['Dodatni jezik', 'od 1.500 RSD'],
  ['Dodatni QR dizajn / kartica za sto', 'od 1.000 RSD'],
  ['Veća promena dizajna', 'od 3.000 RSD'],
  ['Dodatna lokacija', 'cena po dogovoru'],
  ['Hitna izmena istog dana', '+500 RSD'],
]

function PricingCard({ item }: { item: Package }) {
  return <article className={`pricing-card${item.recommended ? ' pricing-card--recommended' : ''}`}>
    <div className="pricing-card__header">
      <p className="pricing-card__name">{item.name}</p>
      {item.recommended && <span className="pricing-card__badge">Preporučujemo</span>}
    </div>

    <div className="pricing-card__prices">
      <div className="pricing-card__setup">
        <span>Jednokratna izrada</span>
        <strong>{item.setupPrice}</strong>
      </div>
      <div className="pricing-card__maintenance">
        <span>Održavanje</span>
        <p><strong>{item.maintenancePrice}</strong> <small>/ mesečno</small></p>
      </div>
    </div>

    <ul className="pricing-card__features">
      {item.features.map(feature => <li key={feature}><span aria-hidden="true">✓</span>{feature}</li>)}
    </ul>

    <a className="pricing-card__cta" href="#contact" aria-label={`Želim ${item.name} paket`} onClick={() => trackEvent('select_pricing', { source_section: 'pricing', cta_label: 'Želim ovaj paket', package_name: item.name.toUpperCase() })}>Želim ovaj paket <span aria-hidden="true">→</span></a>
  </article>
}

export function Pricing() {
  return <section className="pricing" id="pricing" aria-labelledby="pricing-title">
    <div className="pricing__inner">
      <header className="pricing__heading">
        <p className="pricing__eyebrow">Paketi i cene</p>
        <h2 id="pricing-title">Izaberite paket koji<br />odgovara vašem lokalu.</h2>
        <p>Svaki paket uključuje profesionalno pripremljen digitalni QR meni i mesečno održavanje koje ZaSto obavlja za vas.</p>
      </header>

      <div className="pricing__cards">
        {packages.map(item => <PricingCard item={item} key={item.name} />)}
      </div>

      <aside className="change-note" aria-labelledby="change-note-title">
        <div className="change-note__mark" aria-hidden="true">i</div>
        <div>
          <h3 id="change-note-title">Kako računamo zahteve za izmene?</h3>
          <p>Jedan zahtev može sadržati više manjih izmena koje nam pošaljete odjednom. Na primer: promena nekoliko cena, uklanjanje jednog proizvoda i dodavanje novog artikla poslati zajedno računaju se kao jedan zahtev.</p>
          <p>Izmene podrazumevaju izmene postojećih cena, naziva, opisa, dostupnosti i ponude. Veće izmene strukture ili dizajna menija dogovaraju se zasebno.</p>
        </div>
      </aside>

      <section className="additional-services" aria-labelledby="additional-services-title">
        <div className="additional-services__heading">
          <p>Dodatne mogućnosti</p>
          <h3 id="additional-services-title">Dodatne usluge</h3>
        </div>
        <dl>
          {additionalServices.map(([service, price]) => <div key={service}><dt>{service}</dt><dd>{price}</dd></div>)}
        </dl>
      </section>

      <aside className="partner-offer" aria-labelledby="partner-offer-title">
        <div className="partner-offer__copy">
          <p>Posebni početni uslovi</p>
          <h3 id="partner-offer-title">Ponuda za prve ZaSto partnere</h3>
          <span>Postanite jedan od prvih ZaSto partnera i uvedite digitalni meni u svoj lokal po posebnoj početnoj ceni.</span>
        </div>
        <div className="partner-offer__prices">
          <p><span>Izrada digitalnog menija</span><strong>4.900 RSD</strong></p>
          <p><span>Održavanje</span><strong>990 RSD <small>/ mesečno</small></strong></p>
        </div>
        <a href="#contact" onClick={() => trackEvent('select_pricing', { source_section: 'pricing', cta_label: 'Postanite ZaSto partner', package_name: 'EARLY_PARTNER' })}>Postanite ZaSto partner <span aria-hidden="true">→</span></a>
      </aside>
    </div>
  </section>
}
