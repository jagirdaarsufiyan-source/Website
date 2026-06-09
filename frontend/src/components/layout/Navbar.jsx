import { useState, useEffect } from 'react';
import { ArrowRight, Menu, Moon, Sun, X } from 'lucide-react';
import { company, logo, navItems } from '../../data/siteData';

export default function Navbar({ page, go, dark, setDark }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const navigate = (item) => { go(item); setMenuOpen(false); };

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <button className="nav-brand" onClick={() => navigate('Home')} aria-label="Go to homepage">
          <img src={logo} alt={company.name} />
          <div className="nav-brand-text">
            <strong>Viznous</strong>
            <small>Engineering Co.</small>
          </div>
        </button>

        <nav className="nav-links">
          {navItems.filter(i => i !== 'Admin').map((item) => (
            <button
              key={item}
              className={page === item ? 'active' : ''}
              onClick={() => navigate(item)}
            >
              {item}
            </button>
          ))}
          <button className="nav-cta" onClick={() => navigate('Contact')}>
            Get a Quote <ArrowRight size={15} />
          </button>
        </nav>

        <div className="nav-actions">
          <button className="icon-btn" onClick={() => setDark(!dark)} aria-label="Toggle dark mode">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="icon-btn hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu">
          {navItems.filter(i => i !== 'Admin').map((item) => (
            <button
              key={item}
              className={page === item ? 'active' : ''}
              onClick={() => navigate(item)}
            >
              {item}
            </button>
          ))}
          <button className="mobile-cta" onClick={() => navigate('Contact')}>Start a Project</button>
        </div>
      )}
    </>
  );
}
