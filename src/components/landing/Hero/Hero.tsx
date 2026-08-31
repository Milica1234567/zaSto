import { Link } from "react-router-dom";
import { trackEvent } from "../../../analytics/analytics";
import { PhoneMockup } from "../PhoneMockup/PhoneMockup";
import "./Hero.css";

const values = ["Bez aplikacije", "Radi odmah", "Prilagođeno telefonu"];

export function Hero() {
  return (
    <section className="landing-hero" aria-labelledby="hero-title">
      <div className="landing-hero__inner">
        <div className="landing-hero__copy">
          <p className="landing-hero__eyebrow">
            <span /> Digitalni meni, bez komplikacija
          </p>
          <h1 id="hero-title">
            <span>Vaš meni.</span>
            <em>Jedan sken daleko.</em>
          </h1>
          <p className="landing-hero__intro">
            Digitalni meni za restorane i kafiće koji gosti otvaraju odmah
            <br />
            bez aplikacije, bez PDF-a i bez komplikacija.
          </p>
          <div className="landing-hero__actions">
            <a className="landing-hero__primary" href="#contact">
              Zatraži svoj meni <span aria-hidden="true">→</span>
            </a>
            <Link className="landing-hero__secondary" to="/m/demo" onClick={() => trackEvent('view_demo', { source_section: 'hero', cta_label: 'Pogledaj demo', destination: '/m/demo' })}>
              Pogledaj demo
            </Link>
          </div>
          <ul className="landing-hero__values" aria-label="Prednosti">
            {values.map((value) => (
              <li key={value}>
                <span aria-hidden="true">✓</span>
                {value}
              </li>
            ))}
          </ul>
        </div>
        <div className="landing-hero__visual">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
