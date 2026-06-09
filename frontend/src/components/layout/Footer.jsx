import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { company, logo, navItems, services } from '../../data/siteData';

export default function Footer({ go }) {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  function subscribe(e) {
    e.preventDefault();
    setMsg('Subscribed. Thank you.');
    setEmail('');
  }

  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <img src={logo} alt={company.name} />
          <strong>{company.shortName}</strong>
          <p>{company.description}</p>
          <div className="footer-socials">
            {['Li', 'X', 'Fb', 'Ig'].map((s, i) => (
              <a key={s} className="footer-social" href="#" aria-label={company.socials[i]}>{s}</a>
            ))}
          </div>
        </div>

        <div>
          <h4>Company</h4>
          <div className="footer-links">
            {navItems.filter((item) => item !== 'Admin').map((item) => (
              <button key={item} onClick={() => go(item)}>{item}</button>
            ))}
          </div>
        </div>

        <div>
          <h4>Capabilities</h4>
          <div className="footer-links">
            {services.slice(0, 7).map((s) => (
              <span key={s.title}>{s.title}</span>
            ))}
          </div>
        </div>

        <div>
          <h4>Contact</h4>
          <div className="footer-address">
            {company.addressLines.map((line) => <div key={line}>{line}</div>)}
            <div>{company.email}</div>
            <div>{company.phone}</div>
            <div>{company.hours}</div>
          </div>
          <div className="footer-newsletter">
            <p>Get enterprise technology insights</p>
            <form className="newsletter-form" onSubmit={subscribe}>
              <input
                className="newsletter-input"
                type="email"
                placeholder="Work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button className="newsletter-btn" type="submit" aria-label="Subscribe">
                <ArrowUpRight size={15} />
              </button>
            </form>
            {msg && <small className="newsletter-msg">{msg}</small>}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; 2026 {company.name}. All rights reserved.</span>
        <span>Built with precision in Hyderabad, India.</span>
      </div>
    </footer>
  );
}
