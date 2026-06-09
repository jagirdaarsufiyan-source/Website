import { company, logo } from '../data/siteData';

export default function Logo({ size = 'md' }) {
  const sizes = { sm: 36, md: 44, lg: 56 };
  const px = sizes[size] || sizes.md;
  return (
    <div className="brand-lockup">
      <img src={logo} alt={`${company.name} logo`} style={{ width: px, height: px }} />
      <div>
        <strong>{company.tagline}</strong>
        <small>IT Technologies</small>
      </div>
    </div>
  );
}
