import { Link } from 'react-router-dom'
import './Demo.css'

const previewItems = [
  { name: 'Baštenski omlet', description: 'Mladi sir, spanać, paradajz', price: '590 RSD', tag: 'Vegetarijansko' },
  { name: 'Domaći uštipci', description: 'Kajmak, ajvar, sezonska salata', price: '620 RSD' },
  { name: 'Avokado tost', description: 'Poširano jaje, čili, susam', price: '690 RSD', tag: 'Popularno' },
]

function DemoMenuPreview() {
  return <div className="demo-preview" aria-hidden="true">
    <div className="demo-preview__bar"><i /><span>zasto.rs/m/demo</span><b>•••</b></div>
    <div className="demo-preview__restaurant">
      <span>Meni</span>
      <div>BJ</div>
      <h3>Bistro Jutro</h3>
      <p>Poznati ukusi i malo modernog šmeka.</p>
    </div>
    <div className="demo-preview__categories"><strong>Doručak</strong><span>Predjela</span><span>Glavna jela</span><span>Pasta</span></div>
    <div className="demo-preview__menu">
      <p className="demo-preview__section">Doručak</p>
      {previewItems.map(item => <div className="demo-preview__item" key={item.name}>
        <div><h4>{item.name}</h4><p>{item.description}</p>{item.tag && <small>{item.tag}</small>}</div>
        <strong>{item.price}</strong>
      </div>)}
      <p className="demo-preview__allergens">Alergeni su jasno označeni uz svako jelo.</p>
    </div>
  </div>
}

export function Demo() {
  return <section className="landing-demo" id="demo" aria-labelledby="demo-title">
    <div className="landing-demo__inner">
      <header className="landing-demo__heading">
        <p className="landing-demo__eyebrow">Demo</p>
        <h2 id="demo-title">Pogledajte kako izgleda<br />jedan ZaSto meni.</h2>
        <p>Pravi primer digitalnog menija — sa kategorijama, cenama, alergenima i informacijama o dostupnosti.</p>
      </header>

      <Link className="landing-demo__showcase" to="/m/demo" aria-label="Otvori demo meni Bistro Jutro">
        <span className="landing-demo__orbit landing-demo__orbit--one" aria-hidden="true" />
        <span className="landing-demo__orbit landing-demo__orbit--two" aria-hidden="true" />
        <DemoMenuPreview />
        <span className="landing-demo__hint" aria-hidden="true">Pogledaj uživo <i>↗</i></span>
      </Link>

      <Link className="landing-demo__cta" to="/m/demo">Otvori demo meni <span aria-hidden="true">→</span></Link>
    </div>
  </section>
}
