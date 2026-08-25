import './HowItWorks.css'

const steps = [
  {
    number: '01',
    title: 'Skeniraj QR',
    description: 'QR kod se nalazi na vašem stolu.',
    visual: <div className="process-visual process-visual--qr">
      {Array.from({ length: 16 }, (_, index) => <span key={index} />)}
    </div>,
  },
  {
    number: '02',
    title: 'Otvori meni',
    description: 'Meni se otvara odmah u browseru. Bez aplikacije.',
    visual: <div className="process-visual process-visual--phone"><span /><i /><i /><i /></div>,
  },
  {
    number: '03',
    title: 'Izaberi',
    description: 'Sve je jasno, brzo i pregledno.',
    visual: <div className="process-visual process-visual--menu"><span /><i /><i /><i /></div>,
  },
]

export function HowItWorks() {
  return <section className="how-it-works" id="how-it-works" aria-labelledby="how-it-works-title">
    <div className="how-it-works__inner">
      <header className="section-heading how-it-works__heading">
        <p className="section-heading__eyebrow">Kako radi</p>
        <h2 id="how-it-works-title">Od QR koda do menija<br />za nekoliko sekundi.</h2>
        <p>Bez preuzimanja. Bez čekanja.</p>
      </header>

      <ol className="process-flow">
        {steps.map((step, index) => <li className="process-step" key={step.number}>
          <span className="process-step__number">{step.number}</span>
          <div className="process-step__visual" aria-hidden="true">{step.visual}</div>
          <div className="process-step__copy">
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
          {index < steps.length - 1 && <span className="process-step__connector" aria-hidden="true"><i>→</i></span>}
        </li>)}
      </ol>
    </div>
  </section>
}
