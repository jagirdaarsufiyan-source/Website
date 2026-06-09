import { ArrowRight } from 'lucide-react';
import { CTA, PageHero, ProcessGrid, Section } from '../components/ui/index.jsx';
import { services } from '../data/siteData';

const process = [
  { title: 'Discover', desc: 'Stakeholder interviews, process mapping, technical feasibility, and success metrics.' },
  { title: 'Architect', desc: 'Solution design, system boundaries, cloud strategy, backlog, and delivery plan.' },
  { title: 'Engineer', desc: 'Agile delivery with sprint demos, code reviews, reusable components, and CI/CD.' },
  { title: 'Assure', desc: 'Functional, performance, accessibility, integration, and security validation.' },
  { title: 'Operate', desc: 'Production release, documentation, monitoring, support, and continuous optimization.' }
];

export default function Services({ go }) {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Technology services for product-led enterprises"
        subtitle="Nine integrated service lines covering strategy, design, engineering, AI, cloud, enterprise applications, and long-term support."
      />

      <Section>
        <div className="services-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card reveal" style={{ '--service-color': service.color }}>
              <div className="service-icon-wrap"><service.icon size={22} /></div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <div className="service-tags">
                {service.tags.map((tag) => <span key={tag} className="service-tag">{tag}</span>)}
              </div>
              <button className="service-link" onClick={() => go('Contact')}>
                Discuss requirement <ArrowRight size={13} />
              </button>
            </article>
          ))}
        </div>
      </Section>

      <section className="section-full band">
        <div className="section-inner">
          <div className="section-header text-center">
            <span className="eyebrow">Delivery System</span>
            <h2 className="section-title">How we deliver enterprise work</h2>
            <p className="section-subtitle">A transparent framework built for speed, quality, security, and executive visibility.</p>
          </div>
          <ProcessGrid steps={process} />
        </div>
      </section>

      <CTA
        title="Have a technology initiative in mind?"
        text="Tell us about your requirements and we will shape a tailored roadmap, team model, and delivery plan."
        primaryLabel="Get a Free Consultation"
        onPrimary={() => go('Contact')}
      />
    </>
  );
}
