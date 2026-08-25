import './PhoneMockup.css'

const previewItems = [
  { name: 'Baštenski omlet', description: 'Mladi sir, spanać, paradajz', price: '590 RSD' },
  { name: 'Domaći uštipci', description: 'Kajmak, ajvar, sezonska salata', price: '620 RSD', featured: true },
  { name: 'Avokado tost', description: 'Poširano jaje, čili, susam', price: '690 RSD' },
]

export function PhoneMockup() {
  return <div className="phone-visual" aria-hidden="true">
    <div className="phone-visual__accent phone-visual__accent--one" />
    <div className="phone-visual__accent phone-visual__accent--two" />
    <div className="phone-mockup">
      <div className="phone-mockup__speaker" />
      <div className="phone-mockup__screen">
        <div className="phone-mockup__restaurant">
          <span>Meni</span>
          <div className="phone-mockup__mark">J</div>
          <h2>Bistro Jutro</h2>
          <p>Poznati ukusi, malo modernog šmeka.</p>
        </div>
        <div className="phone-mockup__tabs"><b>Doručak</b><span>Predjela</span><span>Glavna jela</span></div>
        <div className="phone-mockup__menu">
          <p className="phone-mockup__section-title">Doručak</p>
          {previewItems.map(item => <div className="phone-mockup__item" key={item.name}>
            <div><h3>{item.name}</h3><p>{item.description}</p>{item.featured && <small>Preporuka kuće</small>}</div>
            <strong>{item.price}</strong>
          </div>)}
        </div>
      </div>
    </div>
    <div className="phone-visual__note"><span>✓</span><div><strong>Uvek ažuran</strong><small>Izmene se vide odmah</small></div></div>
  </div>
}
