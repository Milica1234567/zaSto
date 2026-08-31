import './Contact.css'
import { trackEvent } from '../../../analytics/analytics'

const email = 'zastomenu@gmail.com'
const instagramUrl = 'https://www.instagram.com/zasto.menu/'

export function Contact() {
  return <section className="contact" id="contact" aria-labelledby="contact-title">
    <div className="contact__inner">
      <div className="contact__layout">
        <header className="contact__heading">
          <p className="contact__eyebrow">Kontakt</p>
          <h2 id="contact-title">Spremni za meni<br />na jedan sken?</h2>
          <p>Pišite nam i zajedno ćemo kreirati digitalni meni prilagođen vašem lokalu.</p>
        </header>

        <address className="contact-card">
          <div className="contact-card__intro">
            <p>Hajde da upoznamo vaš lokal.</p>
            <span>Javićemo vam se sa predlogom koji odgovara vašoj ponudi i vizuelnom identitetu.</span>
          </div>

          <dl className="contact-card__details">
            <div>
              <dt>Email</dt>
              <dd><a href={`mailto:${email}`} onClick={() => trackEvent('contact_email', { source_section: 'contact', cta_label: 'Email address' })}>{email}</a></dd>
            </div>
            <div>
              <dt>Instagram</dt>
              <dd><a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="ZaSto na Instagramu, otvara se u novom prozoru" onClick={() => trackEvent('contact_instagram', { source_section: 'contact', cta_label: '@zasto.menu', destination: 'instagram' })}>@zasto.menu</a></dd>
            </div>
          </dl>

          <div className="contact-card__actions">
            <a className="contact-card__primary" href={`mailto:${email}`} onClick={() => trackEvent('contact_email', { source_section: 'contact', cta_label: 'Pošaljite nam upit' })}>Pošaljite nam upit <span aria-hidden="true">→</span></a>
            <a className="contact-card__secondary" href={instagramUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('contact_instagram', { source_section: 'contact', cta_label: 'Pišite nam na Instagramu', destination: 'instagram' })}>Pišite nam na Instagramu <span aria-hidden="true">↗</span></a>
          </div>
        </address>
      </div>

      <div className="contact__closing" aria-label="Za vas. Za vaše goste. ZaSto.">
        <span>Za vas.</span>
        <span>Za vaše goste.</span>
        <strong>ZaSto.</strong>
      </div>
    </div>
  </section>
}
