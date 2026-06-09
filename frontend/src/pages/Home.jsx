import {
  ArrowRight, CheckCircle2, Star, Zap, Shield, Rocket, Users, TrendingUp,
  Cloud, Cpu, Code2, Database, LockKeyhole, Network, ServerCog
} from 'lucide-react';
import { Section, Stars, Counter } from '../components/ui/index.jsx';
import { company, logo, services, stats, testimonials } from '../data/siteData';

function Hero({ go }) {
  const platforms = [
    { icon: Code2, label: 'Product Engineering', value: 'SaaS, web, mobile' },
    { icon: Cloud, label: 'Cloud Transformation', value: 'AWS, Azure, DevOps' },
    { icon: Cpu, label: 'AI Automation', value: 'LLM workflows, ML' },
    { icon: LockKeyhole, label: 'Cyber Resilience', value: 'Secure architecture' }
  ];

  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-bg-grid" />
        <div className="hero-bg-circuit" />
        <div className="hero-bg-scan" />
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Enterprise Software, Cloud and AI Partner
        </div>

        <h1 className="hero-title">
          Premium software engineering for ambitious enterprises
        </h1>

        <p className="hero-desc">
          {company.name} builds secure, scalable and intelligent digital systems across product engineering, cloud platforms, cybersecurity, AI automation and enterprise transformation.
        </p>

        <div className="hero-actions">
          <button className="btn btn-primary btn-lg" onClick={() => go('Contact')}>
            Start a Project <ArrowRight size={18} />
          </button>
          <button className="btn btn-outline btn-lg" onClick={() => go('Services')}>
            Explore Services
          </button>
        </div>

        <div className="hero-proof">
          {[
            { icon: Shield, text: 'Security-first architecture' },
            { icon: Zap, text: '120+ digital initiatives' },
            { icon: CheckCircle2, text: '98% client satisfaction' }
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="hero-proof-item">
              <Icon size={15} />
              {text}
            </div>
          ))}
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-console">
          <div className="console-topbar">
            <span />
            <span />
            <span />
            <strong>Viznous Delivery Cloud</strong>
          </div>

          <div className="console-map">
            <div className="map-lines" />
            <div className="map-node node-primary"><img src={logo} alt="" /></div>
            <div className="map-node node-cloud"><Cloud size={24} /></div>
            <div className="map-node node-ai"><Cpu size={24} /></div>
            <div className="map-node node-data"><Database size={24} /></div>
            <div className="map-node node-sec"><Shield size={24} /></div>
          </div>

          <div className="platform-grid">
            {platforms.map(({ icon: Icon, label, value }) => (
              <div className="platform-tile" key={label}>
                <Icon size={18} />
                <div>
                  <strong>{label}</strong>
                  <span>{value}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="delivery-strip">
            {['Discover', 'Architect', 'Build', 'Secure', 'Scale'].map((step) => (
              <span key={step}>{step}</span>
            ))}
          </div>
        </div>

        <div className="hero-float-badge hero-float-1">
          <Network size={14} style={{ color: 'var(--accent)' }} />
          Connected Systems
        </div>
        <div className="hero-float-badge hero-float-2">
          <ServerCog size={14} style={{ color: 'var(--success)' }} />
          Managed Cloud
        </div>
        <div className="hero-float-badge hero-float-3">
          <Star size={14} style={{ color: '#f59e0b' }} fill="#f59e0b" />
          Executive Quality
        </div>
      </div>
    </section>
  );
}

function ClientsBand() {
  const names = ['Fintech Corp', 'HealthTech Inc', 'RetailChain', 'ManuFab Ltd', 'EduSys Group', 'LogiPrime', 'DataVault', 'SmartERP'];
  return (
    <div className="clients-band">
      <div className="clients-inner">
        <p className="clients-label">Trusted by forward-thinking companies across industries</p>
        <div className="clients-row">
          {names.map((name) => (
            <span key={name} className="client-name">{name}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ServicesOverview({ go }) {
  return (
    <Section eyebrow="What We Deliver" title="End-to-End IT Services" subtitle="From strategy to deployment, we cover every dimension of modern software and technology delivery.">
      <div className="services-grid">
        {services.slice(0, 6).map((s) => (
          <article
            key={s.title}
            className="service-card reveal"
            style={{ '--service-color': s.color }}
          >
            <div className="service-icon-wrap">
              <s.icon size={22} />
            </div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <div className="service-tags">
              {s.tags.map((t) => <span key={t} className="service-tag">{t}</span>)}
            </div>
            <button className="service-link" onClick={() => go('Services')}>
              Learn more <ArrowRight size={13} />
            </button>
          </article>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
        <button className="btn btn-outline" onClick={() => go('Services')}>
          View All 9 Services <ArrowRight size={16} />
        </button>
      </div>
    </Section>
  );
}

function StatsSection() {
  return (
    <div className="stats-band">
      <div className="stats-grid">
        {stats.map((s) => (
          <div key={s.label} className="stat-item reveal">
            <div className="stat-icon">
              <s.icon size={22} />
            </div>
            <div className="stat-num">
              <Counter target={s.value} suffix={s.suffix} />
            </div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CompanyProfile({ go }) {
  const strengths = [
    { icon: Shield, title: 'Enterprise Security', desc: 'Threat-aware architecture, access control and resilient production practices.' },
    { icon: Rocket, title: 'Agile Delivery', desc: 'Discovery, design, sprint execution and transparent executive reporting.' },
    { icon: TrendingUp, title: 'Outcome Led', desc: 'Technology choices are mapped to growth, efficiency and measurable adoption.' },
    { icon: Users, title: 'Dedicated Teams', desc: 'Specialists who learn your domain and stay accountable after launch.' }
  ];

  return (
    <div className="company-profile">
      <div className="profile-grid">
        <div>
          <span className="eyebrow">Company Profile</span>
          <h2 className="section-title">
            Corporate-grade delivery for ambitious teams
          </h2>
          <p className="profile-copy">
            We combine strategy, product design, reliable engineering, cloud operations and long-term support so your technology can scale from a focused initiative to a mission-critical platform.
          </p>

          <div className="achievement-grid">
            {[
              ['120+', 'Projects delivered'],
              ['35+', 'Technology experts'],
              ['24/7', 'Support coverage'],
              ['98%', 'Client satisfaction']
            ].map(([num, label]) => (
              <div className="achievement-card reveal" key={label}>
                <strong>{num}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="profile-panel">
          <div className="profile-panel-head">
            <img src={logo} alt={company.name} />
            <div>
              <strong>Viznous IT Technologies</strong>
              <span>Modern software and IT services company</span>
            </div>
          </div>

          <div className="profile-timeline">
            {['Consult', 'Design', 'Engineer', 'Modernize', 'Operate'].map((item, index) => (
              <div key={item} className="profile-step">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>

          <button className="btn btn-primary" onClick={() => go('About')}>
            View Company Profile <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <div className="strength-grid">
        {strengths.map((f) => (
          <article key={f.title} className="strength-card reveal">
            <div className="strength-icon"><f.icon size={21} /></div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function TestimonialsSection() {
  return (
    <Section eyebrow="Client Testimonials" title="Trusted by industry leaders" subtitle="What our clients say about working with Viznous IT Technologies." className="testimonials-section section-full">
      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <article key={t.author} className="testimonial-card reveal">
            <Stars count={t.rating} />
            <blockquote>"{t.quote}"</blockquote>
            <div className="testimonial-author">
              <div className="testimonial-avatar">{t.author[0]}</div>
              <div>
                <div className="testimonial-name">{t.author}</div>
                <div className="testimonial-role">{t.company}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function CTASection({ go }) {
  return (
    <div className="cta-section">
      <div className="cta-inner">
        <h2>Ready to build something remarkable?</h2>
        <p>Plan your next web, mobile, AI, cloud, or enterprise technology initiative with Viznous IT Technologies. Let's turn your vision into reality.</p>
        <div className="cta-actions">
          <button className="btn btn-white btn-lg" onClick={() => go('Contact')}>
            Start a Conversation <ArrowRight size={18} />
          </button>
          <button className="btn btn-white-outline btn-lg" onClick={() => go('Portfolio')}>
            View Our Work
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Home({ go }) {
  return (
    <>
      <Hero go={go} />
      <ClientsBand />
      <ServicesOverview go={go} />
      <StatsSection />
      <CompanyProfile go={go} />
      <TestimonialsSection />
      <CTASection go={go} />
    </>
  );
}
