import { useMemo, useState } from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { PageHero, Section } from '../components/ui/index.jsx';
import { projects } from '../data/siteData';

export default function Portfolio({ go }) {
  const [filter, setFilter] = useState('All');
  const categories = useMemo(() => ['All', ...new Set(projects.map((project) => project.category))], []);
  const visible = filter === 'All' ? projects : projects.filter((project) => project.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Selected work across software, cloud, AI, and enterprise platforms"
        subtitle="A curated view of business-critical digital systems designed for measurable impact, adoption, and scale."
      />

      <Section>
        <div className="filter-bar">
          {categories.map((category) => (
            <button key={category} className={`filter-btn ${filter === category ? 'active' : ''}`} onClick={() => setFilter(category)}>
              {category}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {visible.map((project) => (
            <article key={project.title} className="project-card reveal" style={{ '--project-color': project.color }}>
              <div className="project-card-header">
                <div className="project-card-bg" />
                <span className="project-category">{project.category}</span>
              </div>
              <div className="project-card-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-impact">
                  <TrendingUp size={14} />
                  {project.impact}
                </div>
                <div className="project-tech-list">
                  {project.tech.map((tech) => <span key={tech} className="project-tech-tag">{tech}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="inline-cta">
          <h3>Have a project idea?</h3>
          <p>Share your requirements with our team and we will propose a tailored solution architecture.</p>
          <button className="btn btn-primary" onClick={() => go('Contact')}>
            Discuss Your Project <ArrowRight size={16} />
          </button>
        </div>
      </Section>
    </>
  );
}
