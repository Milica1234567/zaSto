import './Benefits.css'

export function Benefits() {
  return <section className="benefits" id="benefits" aria-labelledby="benefits-title">
    <div className="benefits__inner">
      <header className="section-heading benefits__heading">
        <p className="section-heading__eyebrow">Zašto ZaSto</p>
        <h2 id="benefits-title">Manje komplikacija.<br />Bolje iskustvo za stolom.</h2>
      </header>

      <div className="benefits__layout">
        <article className="benefit benefit--instant">
          <div className="benefit__top"><span>01</span><i aria-hidden="true">↗</i></div>
          <div>
            <h3>Bez aplikacije</h3>
            <p>Gost skenira QR kod i meni se odmah otvara.</p>
          </div>
          <div className="benefit__browser" aria-hidden="true"><span /><span /><span /><i>zasto.rs/m/restoran</i></div>
        </article>

        <article className="benefit benefit--current">
          <div className="benefit__top"><span>02</span><i aria-hidden="true">24/7</i></div>
          <div>
            <h3>Uvek ažuran</h3>
            <p>Nema štampanja novog menija zbog jedne promene cene.</p>
          </div>
          <div className="benefit__price" aria-hidden="true"><span>Espresso</span><s>200 RSD</s><strong>220 RSD</strong></div>
        </article>

        <article className="benefit benefit--mobile">
          <div className="benefit__mobile-copy">
            <div className="benefit__top"><span>03</span></div>
            <h3>Pravljen za telefon</h3>
            <p>Ne otvarate PDF i ne zumirate sitna slova. Meni je napravljen za ekran koji gost već drži u ruci.</p>
          </div>
          <div className="benefit-phone" aria-hidden="true">
            <div className="benefit-phone__screen">
              <span>Meni</span><strong>Bistro Jutro</strong>
              <i /><i /><i />
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
}
