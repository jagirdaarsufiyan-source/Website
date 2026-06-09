import { useState } from 'react';
import { Send } from 'lucide-react';

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api';

export default function ContactForm({ compact = false }) {
  const [status, setStatus] = useState('');
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const set = (field) => (e) => setForm((current) => ({ ...current, [field]: e.target.value }));

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    try {
      const res = await fetch(`${API_BASE}/contacts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error();
      setStatus('Thank you! Our team will contact you shortly.');
      setIsError(false);
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch {
      setStatus('Message saved. Please try again when the API is online.');
      setIsError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="form" onSubmit={submit}>
      {!compact && <h3>Send Us a Message</h3>}
      {!compact && <p className="form-intro">Fill in the form below and we'll get back to you within 24 hours.</p>}

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Full Name *</label>
          <input className="form-input" required value={form.name} onChange={set('name')} placeholder="John Doe" />
        </div>
        <div className="form-group">
          <label className="form-label">Email Address *</label>
          <input className="form-input" required type="email" value={form.email} onChange={set('email')} placeholder="john@company.com" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Phone Number</label>
          <input className="form-input" value={form.phone} onChange={set('phone')} placeholder="+91 98765 43210" />
        </div>
        <div className="form-group">
          <label className="form-label">Subject *</label>
          <input className="form-input" required value={form.subject} onChange={set('subject')} placeholder="Project requirement" />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Message *</label>
        <textarea className="form-input" required value={form.message} onChange={set('message')} placeholder="Tell us about your project, timeline, and goals..." rows={compact ? 4 : 5} />
      </div>

      <button className="btn btn-primary btn-lg form-submit" type="submit" disabled={loading}>
        <Send size={17} />
        {loading ? 'Sending...' : 'Send Message'}
      </button>

      {status && <p className={`form-status ${isError ? 'error' : ''}`} role="status">{status}</p>}
    </form>
  );
}
