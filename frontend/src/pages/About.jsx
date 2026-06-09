import { Building2, CheckCircle2, Globe2, Rocket } from 'lucide-react';
import { PageHero, ProcessGrid, Section } from '../components/ui/index.jsx';
import { company, logo, values } from '../data/siteData';

const timeline = [
  { title: 'Foundation', desc: 'Established in Hyderabad with a focus on dependable software and IT services.' },
  { title: 'Delivery Practices', desc: 'Built dedicated practices for product engineering, web, mobile, and enterprise apps.' },
  { title: 'AI and Cloud Expansion', desc: 'Expanded into AI automation, cloud migration, DevOps, and cybersecurity-ready delivery.' },
  { title: 'Managed Growth', desc: 'Scaling toward platform accelerators, managed services, and global client programs.' }
];

const goals = [
  { icon: Globe2, title: 'Global Reach', desc: 'Serve enterprise clients across India, the US, Europe, and Southeast Asia.' },
  { icon: Rocket, title: 'Product Innovation', desc: 'Launch SaaS accelerators in analytics, automation, ERP, and workflow management.' },
  { icon: Building2, title: 'Delivery Excellence', desc: 'Grow specialist teams with strong ownership, documentation, and support discipline.' }
];

const team = [
  { initials: 'MD', title: 'Founding Leader', role: 'Managing Director', desc: 'Technology executive focused on business outcomes, operational clarity, and long-term client value.' },
  { initials: 'TL', title: 'Head of Engineering', role: 'Technology Lead', desc: 'Full-stack architect specializing in cloud-native systems, APIs, data platforms, and secure delivery.' },
  { initials: 'DD', title: 'Head of Product and UX', role: 'Design and Delivery Lead', desc: 'Product strategist focused on usability, design systems, agile execution, and adoption.' }
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="A product engineering company built for modern enterprises"
        subtitle={`${company.name} designs and delivers dependable digital systems across software, cloud, AI, data, cybersecurity, and enterprise workflows.`}
        align="left"
      >
        <div className="identity-card">
          <img src={logo} alt={company.name} />
          <strong>{company.shortName}</strong>
          <span>Hyderabad, Telangana, India</span>
          <div>
            {company.addressLines.map((line) => <p key={line}>{line}</p>)}
          </div>
        </div>
      </PageHero>

      <Section eyebrow="What Guides Us" title="Mission, vision, and operating values" subtitle="We combine engineering quality with product thinking so every engagement can move from concept to measurable business value.">
        <div className="mvv-grid">
          <article className="mvv-card reveal">
            <span>Mission</span>
            <h3>Build elegant, secure, and measurable technology solutions.</h3>
            <p>We help organizations modernize operations, improve customer experience, and launch scalable digital products with confidence.</p>
          </article>
          <article className="mvv-card reveal">
            <span>Vision</span>
            <h3>Become a trusted global technology partner.</h3>
            <p>Our ambition is to be recognized for dependable engineering, executive clarity, refined interfaces, and long-term client success.</p>
          </article>
        </div>

        <div className="values-grid">
          {values.map((value) => (
            <article key={value.title} className="value-card reveal">
              <div className="value-icon"><value.icon size={22} /></div>
              <h3>{value.title}</h3>
              <p>{value.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="section-full band">
        <div className="section-inner">
          <div className="section-header text-center">
            <span className="eyebrow">Business Goals</span>
            <h2 className="section-title">Where we are heading</h2>
          </div>
          <div className="feature-grid three">
            {goals.map((goal) => (
              <article className="feature-card reveal" key={goal.title}>
                <goal.icon size={24} />
                <h3>{goal.title}</h3>
                <p>{goal.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Section eyebrow="Company Journey" title="Milestones with momentum" subtitle="A focused journey from foundation to enterprise-ready technology partner.">
        <ProcessGrid steps={timeline} />
      </Section>

      <Section eyebrow="People Behind Delivery" title="Leadership team" subtitle="Experienced professionals focused on reliable execution, clear communication, and client outcomes." className="band">
        <div className="team-grid">
          {team.map((member) => (
            <article key={member.role} className="team-card reveal">
              <div className="team-avatar">{member.initials}</div>
              <h3>{member.title}</h3>
              <span>{member.role}</span>
              <p>{member.desc}</p>
            </article>
          ))}
        </div>
        <div className="assurance-strip">
          {['Architecture reviews', 'Code quality gates', 'Security-first delivery', 'Post-launch support'].map((item) => (
            <span key={item}><CheckCircle2 size={16} />{item}</span>
          ))}
        </div>
      </Section>
    </>
  );
}
