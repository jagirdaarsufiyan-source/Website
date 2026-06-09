import { PageHero, Section } from '../components/ui/index.jsx';
import ContactForm from '../components/ui/ContactForm.jsx';
import { company, contactCards } from '../data/siteData';

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a conversation with Viznous"
        subtitle="Reach out for project discussions, technology consulting, partnerships, or delivery support. We respond within 24 hours."
      />

      <Section>
        <div className="contact-grid">
          <div>
            <div className="contact-info">
              <span className="eyebrow">Headquarters</span>
              <h3>{company.name}</h3>
              <p>We are headquartered in Hyderabad, India, and work with clients worldwide across software, cloud, AI, and enterprise programs.</p>
            </div>
            <div className="contact-cards-list">
              {contactCards.map((card) => (
                <div key={card.title} className="contact-card reveal">
                  <div className="contact-card-icon"><card.icon size={18} /></div>
                  <div>
                    <strong>{card.title}</strong>
                    <span>{card.text}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="social-row">
              {company.socials.map((social) => <a key={social} href="#">{social}</a>)}
            </div>
          </div>

          <ContactForm />
        </div>
      </Section>

      <section className="section map-section">
        <h3>Find us on the map</h3>
        <div className="map-wrap">
          <iframe
            title="Viznous IT Technologies location"
            loading="lazy"
            src="https://www.google.com/maps?q=Plot+No+359+Road+No+6+RVR+Colony+Almasguda+Hyderabad+Telangana+500058&output=embed"
            allowFullScreen
          />
        </div>
      </section>
    </>
  );
}
