import { useEffect, useRef } from 'react';
import { CheckCircle2, Star } from 'lucide-react';

export function Section({ id, eyebrow, title, subtitle, children, className = '', centered = true }) {
  return (
    <section id={id} className={`section ${className}`}>
      {(eyebrow || title || subtitle) && (
        <div className={`section-header ${centered ? 'text-center' : ''}`}>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          {title && <h2 className="section-title">{title}</h2>}
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
}

export function BandSection({ id, eyebrow, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`section-full ${className}`}>
      <div className="section-inner">
        {(eyebrow || title || subtitle) && (
          <div className="section-header text-center">
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            {title && <h2 className="section-title">{title}</h2>}
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, title, subtitle, children, align = 'center' }) {
  return (
    <section className={`page-hero page-hero-${align}`}>
      <div className="page-hero-inner">
        <div>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
        </div>
        {children && <div className="page-hero-aside">{children}</div>}
      </div>
    </section>
  );
}

export function CTA({ title, text, primaryLabel, secondaryLabel, onPrimary, onSecondary }) {
  return (
    <section className="cta-section">
      <div className="cta-inner">
        <span className="cta-kicker">Enterprise delivery partner</span>
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="cta-actions">
          {primaryLabel && <button className="btn btn-white btn-lg" onClick={onPrimary}>{primaryLabel}</button>}
          {secondaryLabel && <button className="btn btn-white-outline btn-lg" onClick={onSecondary}>{secondaryLabel}</button>}
        </div>
      </div>
    </section>
  );
}

export function ProcessGrid({ steps }) {
  return (
    <div className="process-grid">
      {steps.map((step, index) => (
        <article className="process-card reveal" key={step.title}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <h3>{step.title}</h3>
          <p>{step.desc}</p>
        </article>
      ))}
    </div>
  );
}

export function Stars({ count = 5 }) {
  return (
    <div className="testimonial-stars">
      {Array.from({ length: count }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
    </div>
  );
}

export function CheckItem({ children }) {
  return (
    <div className="why-check">
      <CheckCircle2 size={18} />
      <span>{children}</span>
    </div>
  );
}

export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const children = el.querySelectorAll('.reveal');
    children.forEach((child, index) => {
      child.style.transitionDelay = `${index * 0.06}s`;
      observer.observe(child);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

export function Counter({ target, suffix = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();

      const start = performance.now();
      const duration = 1600;
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, { threshold: 0.5 });

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}
