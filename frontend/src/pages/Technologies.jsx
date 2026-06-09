import { useState } from 'react';
import { PageHero, Section } from '../components/ui/index.jsx';
import { technologies } from '../data/siteData';

export default function Technologies() {
  const groups = Object.keys(technologies);
  const [active, setActive] = useState(groups[0]);
  const items = technologies[active];

  return (
    <>
      <PageHero
        eyebrow="Technology Stack"
        title="Modern platforms chosen for reliability and scale"
        subtitle="We use proven engineering tools across frontend, backend, databases, cloud platforms, AI workflows, and enterprise delivery."
      />

      <Section>
        <div className="tech-tabs" role="tablist" aria-label="Technology groups">
          {groups.map((group) => (
            <button key={group} className={`tech-tab ${active === group ? 'active' : ''}`} onClick={() => setActive(group)}>
              {group}
            </button>
          ))}
        </div>

        <div className="tech-grid">
          {items.map((tech) => (
            <article key={tech.name} className="tech-card reveal">
              <div className="tech-card-icon"><tech.icon size={24} /></div>
              <h4>{tech.name}</h4>
              <p>{tech.desc}</p>
              <div className="tech-bar-wrap">
                <div className="tech-bar" style={{ width: `${tech.level}%` }} />
              </div>
              <span className="tech-level">{tech.level}% proficiency</span>
            </article>
          ))}
        </div>

        <div className="ecosystem-panel">
          <div className="section-header text-center">
            <span className="eyebrow">Ecosystem</span>
            <h2 className="section-title">Complete delivery stack</h2>
          </div>
          <div className="ecosystem-grid">
            {groups.map((group) => (
              <div key={group} className="ecosystem-column">
                <h4>{group}</h4>
                {technologies[group].map((tech) => (
                  <span key={tech.name}>{tech.name}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
