INSERT INTO services (title, slug, description, icon) VALUES
('Custom Software Development', 'custom-software-development', 'Tailored business platforms, SaaS products, workflow systems, and secure enterprise-grade applications.', 'code'),
('Web Development', 'web-development', 'Responsive, SEO-ready websites and web applications built with modern frontend engineering.', 'globe'),
('Mobile App Development', 'mobile-app-development', 'Android and iOS mobile experiences with robust backend integrations.', 'smartphone'),
('AI & Machine Learning Solutions', 'ai-machine-learning-solutions', 'Predictive analytics, automation, recommendation systems, and intelligent assistants.', 'brain'),
('Cloud Solutions', 'cloud-solutions', 'Cloud migration, deployment automation, monitoring, and scalable infrastructure.', 'cloud'),
('IT Consulting', 'it-consulting', 'Technology strategy, architecture reviews, and digital transformation advisory.', 'briefcase'),
('UI/UX Design', 'ui-ux-design', 'Research-led product design, prototypes, design systems, and polished user journeys.', 'figma'),
('Enterprise Solutions', 'enterprise-solutions', 'Integrated ERP, CRM, analytics, and internal business systems.', 'layers'),
('Maintenance & Support', 'maintenance-support', 'SLA-based support, upgrades, security hardening, and production monitoring.', 'headphones');

INSERT INTO projects (title, category, summary, case_study, is_featured) VALUES
('Enterprise Resource Portal', 'Enterprise', 'Role-based operations platform with dashboards, approvals, reporting, and secure user management.', 'Reduced approval cycle time by 42%.', TRUE),
('AI Customer Insights Engine', 'AI', 'Machine learning pipeline for customer segmentation, scoring, and campaign intelligence.', 'Improved lead prioritization accuracy by 31%.', TRUE),
('Healthcare Appointment App', 'Mobile', 'Mobile-first appointment booking, reminders, provider calendars, and admin scheduling workflows.', 'Processed 80k+ bookings during pilot rollout.', TRUE);

INSERT INTO careers (title, location, skills, description) VALUES
('Full Stack Developer', 'Hyderabad / Hybrid', 'React, Python, FastAPI, SQL', 'Build robust web applications and API integrations for enterprise clients.'),
('UI/UX Designer', 'Hyderabad', 'Figma, Design Systems, Research', 'Design premium product interfaces, prototypes, and user-centered workflows.'),
('Cloud Engineer', 'Remote / Hybrid', 'AWS, Azure, DevOps', 'Create secure cloud deployments, CI/CD pipelines, and monitoring systems.');

INSERT INTO testimonials (client_name, client_role, quote, rating) VALUES
('Fintech Client', 'Operations Director', 'The Viznous team translated our operational complexity into a clean, scalable platform.', 5),
('SaaS Startup', 'Founder', 'Their delivery discipline and UI polish made our internal product adoption effortless.', 5),
('Enterprise Client', 'IT Head', 'We rely on Viznous for practical cloud guidance and dependable post-launch support.', 5);
