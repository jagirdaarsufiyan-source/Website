import { ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import { PageHero, Section } from '../components/ui/index.jsx';
import ContactForm from '../components/ui/ContactForm.jsx';
import { jobs } from '../data/siteData';

const perks = [
  'Hybrid and remote-friendly culture',
  'Continuous learning and certifications',
  'Modern tooling across design, code, cloud, and AI',
  'Mentorship from senior engineers',
  'Direct client exposure and ownership',
  'Competitive compensation and growth path'
];

const life = [
  ['Hyderabad HQ', 'Collaborative workspace'],
  ['Hybrid Work', 'Flexible operating model'],
  ['Learning', 'Certifications supported'],
  ['Fast Growth', 'Promoted from within']
];

export default function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build enterprise technology with a team that values craft"
        subtitle="Join a focused engineering company creating premium interfaces, cloud platforms, AI workflows, and business-critical systems."
      />

      <Section>
        <div className="career-intro-grid">
          <div>
            <span className="eyebrow">Life at Viznous</span>
            <h2 className="section-title">Work with ownership, clarity, and momentum</h2>
            <p className="section-subtitle left">We are building a team where clean code, thoughtful design, and reliable delivery matter more than noise.</p>
            <div className="check-list">
              {perks.map((perk) => (
                <span key={perk}><CheckCircle2 size={16} />{perk}</span>
              ))}
            </div>
          </div>
          <div className="life-grid">
            {life.map(([title, sub]) => (
              <article key={title} className="life-card reveal">
                <strong>{title}</strong>
                <span>{sub}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="section-header text-center compact">
          <span className="eyebrow">Open Positions</span>
          <h2 className="section-title">Current opportunities</h2>
        </div>
        <div className="jobs-grid">
          {jobs.map((job) => (
            <article key={job.role} className="job-card reveal">
              <span className="job-type">{job.type}</span>
              <h3>{job.role}</h3>
              <div className="job-location"><MapPin size={13} />{job.location}</div>
              <p>{job.desc}</p>
              <div className="job-skills">{job.skills}</div>
              <button className="btn btn-primary btn-sm">
                Apply Now <ArrowRight size={14} />
              </button>
            </article>
          ))}
        </div>
      </Section>

      <section className="section-full band">
        <div className="section-inner narrow">
          <div className="section-header text-center">
            <span className="eyebrow">Introduce Yourself</span>
            <h2 className="section-title">Apply now</h2>
            <p className="section-subtitle">Do not see your role? Send your profile. We are always looking for exceptional talent.</p>
          </div>
          <ContactForm compact />
        </div>
      </section>
    </>
  );
}
