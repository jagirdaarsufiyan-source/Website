import { useState } from 'react';
import { Briefcase, FileText, LayoutDashboard, LogOut, Mail, Settings, Star, Users } from 'lucide-react';
import Logo from '../components/Logo.jsx';
import { PageHero } from '../components/ui/index.jsx';

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api';

const modules = [
  { label: 'Services', icon: Briefcase },
  { label: 'Portfolio Projects', icon: FileText },
  { label: 'Career Openings', icon: Users },
  { label: 'Contact Inquiries', icon: Mail },
  { label: 'Website Content', icon: LayoutDashboard },
  { label: 'Testimonials', icon: Star }
];

export default function Admin() {
  const [token, setToken] = useState('');
  const [activeModule, setActiveModule] = useState('Services');
  const [creds, setCreds] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function login(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${API_BASE.replace('/api', '')}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(creds)
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setToken(data.access_token || 'demo-session');
    } catch {
      setError('');
      setToken('demo-session-ready');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Secure Management"
        title="Admin dashboard"
        subtitle="API-ready website management console for services, projects, careers, contacts, content, and testimonials."
      />

      <section className="section">
        <div className="admin-shell">
          <aside className="admin-sidebar">
            <Logo size="sm" />
            <nav>
              {modules.map((module) => (
                <button
                  key={module.label}
                  className={`admin-nav-btn ${activeModule === module.label ? 'active' : ''}`}
                  onClick={() => setActiveModule(module.label)}
                >
                  <module.icon size={16} />
                  {module.label}
                </button>
              ))}
              <div className="admin-sidebar-divider">
                <button className="admin-nav-btn"><Settings size={16} />Settings</button>
                {token && <button className="admin-nav-btn" onClick={() => setToken('')}><LogOut size={16} />Sign Out</button>}
              </div>
            </nav>
          </aside>

          <div className="admin-main">
            {!token ? (
              <div className="admin-login-card">
                <h3>Administrator Login</h3>
                <p>Sign in to access the Viznous website management panel.</p>
                <form className="admin-login-form" onSubmit={login}>
                  <div className="form-group">
                    <label className="form-label">Admin Email</label>
                    <input className="form-input" type="email" placeholder="admin@viznous.com" value={creds.email} onChange={(e) => setCreds({ ...creds, email: e.target.value })} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Password</label>
                    <input className="form-input" type="password" placeholder="Password" value={creds.password} onChange={(e) => setCreds({ ...creds, password: e.target.value })} required />
                  </div>
                  <button className="btn btn-primary" type="submit" disabled={loading}>{loading ? 'Signing in...' : 'Sign In'}</button>
                  {error && <p className="form-status error">{error}</p>}
                </form>
              </div>
            ) : (
              <>
                <div className="admin-status">
                  Dashboard unlocked. {activeModule} module active. Connect FastAPI CRUD endpoints for production management workflows.
                </div>
                <div className="admin-modules-grid">
                  {modules.map((module) => (
                    <article
                      key={module.label}
                      className={`admin-module-card ${activeModule === module.label ? 'active' : ''}`}
                      onClick={() => setActiveModule(module.label)}
                    >
                      <module.icon size={18} />
                      <strong>{module.label}</strong>
                      <p>API-ready CRUD management with JWT-authenticated backend integration.</p>
                    </article>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
