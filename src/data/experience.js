const experience = [
  {
    company: 'İLSAN Tekstil',
    role: 'Software Engineer',
    location: 'Malatya, Türkiye',
    period: 'May 2026 — Present',
    current: true,
    highlights: [
      'Core engineer and top contributor (900+ commits) in a 4-person team building a modular, multi-tenant ERP framework running in production.',
      'Delivered the Open-End business unit, the first of the factory’s 5 units to go live, end-to-end: from business rules and REST APIs to React/TypeScript UIs.',
      'Built finance and costing features: customer accounts, payment terms, balance calculations and cost summaries.',
      'Designed PostgreSQL schemas and improved slow queries and reports through indexing, views, functions and stored procedures.',
      'Implemented RBAC with JWT access/refresh tokens, session management and login throttling, covered by xUnit tests.',
      'Built PDF document generation and barcode/label printing integrated into production and shipment workflows.',
      'Manage the company server and Git infrastructure with Docker, Nginx and Cloudflare Tunnel: deployments, backups and hardening.',
      'Set up AI-assisted development workflows with Claude Code and Codex: project guidelines, custom skills and agents.',
    ],
    stack: ['.NET 9', 'ASP.NET Core', 'EF Core', 'PostgreSQL', 'Redis', 'React', 'TypeScript'],
  },
  {
    company: 'Bera Ar-Ge Yazılım',
    role: 'Software Development Intern',
    location: 'Malatya, Türkiye',
    period: 'Jun 2024 — Aug 2024',
    highlights: [
      'Developed an e-commerce web application with a role-based admin panel for product and user management.',
      'Implemented token-based API authentication and role-based authorization.',
    ],
    stack: ['ASP.NET Core', 'SQL Server', 'ADO.NET', 'React'],
  },
];

export default experience;
