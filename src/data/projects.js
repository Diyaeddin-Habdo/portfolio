const projects = [
  {
    title: 'SharpHunter',
    type: 'Full-stack platform',
    description:
      'A production-grade portfolio and publishing platform with a public experience, content management panel and self-hosted delivery pipeline.',
    highlights: [
      'Five-layer .NET 8 API with AOP, FluentValidation and centralized error handling.',
      'JWT authorization, granular roles and multiple rate-limiting policies.',
      'React public site and admin panel deployed through Docker and GitHub Actions.',
    ],
    stack: ['.NET 8', 'React', 'SQL Server', 'Docker', 'Nginx'],
    featured: true,
  },
  {
    title: 'Internship Document Tracking',
    type: 'Workflow web application',
    description:
      'A multi-step document workflow where students submit internship files, instructors review them and advisors complete final approval.',
    stack: ['Web', 'Workflow', 'Role-based access'],
    url: 'https://drive.google.com/drive/folders/1hCnOsEszLCLSkiRJ9A7q144iZHl2xyGM',
  },
  {
    title: 'E-Commerce Platform',
    type: 'Full-stack web application',
    description:
      'A layered commerce system with secure access tokens, product media storage and a role-based administration panel.',
    stack: ['ASP.NET Core', 'React', 'SQL Server', 'Cloudinary'],
    url: 'https://drive.google.com/drive/folders/1D32YjDZWCUPVjGHWOgY-NGi0tjt3xUXO?usp=sharing',
  },
  {
    title: 'Database Backup Service',
    type: 'Windows service',
    description:
      'A scheduled SQL Server backup service with error handling, operational logging and resource-conscious background processing.',
    stack: ['.NET Framework', 'Windows Service', 'SQL Server'],
    url: 'https://drive.google.com/drive/folders/1C1UkRZfa_6_K0p9zidTqlqVCNWziUman',
  },
  {
    title: 'Cafe Order Management',
    type: 'Mobile application',
    description:
      'A table-based ordering flow connecting waiters, kitchen staff and cashiers through one operational mobile experience.',
    stack: ['Flutter', 'Mobile', 'Order workflow'],
    url: 'https://drive.google.com/drive/folders/1ulk7gu5w375BbXTuRbGNo1hard8282uE',
  },
];

export default projects;
