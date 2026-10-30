import { afterNextRender, Component, DestroyRef, ElementRef, HostListener, inject, signal, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

type ThemeKey =
  | 'modern-classic'
  | 'tech-elegance'
  | 'developer-pro'
  | 'corporate-blue'
  | 'night-vision'
  | 'minimal-light'
  | 'creative-purple';

type ProjectCategory = 'Healthcare' | 'Golf & Recreation';
type ProjectFilter = 'All Projects' | ProjectCategory;

interface PortfolioProject {
  title: string;
  category: ProjectCategory;
  description: string;
  company: string;
  period: string;
  role: string;
  overview: string[];
  features: { title: string; description: string }[];
  technologyGroups: { area: string; technologies: string[] }[];
  responsibilities: string[];
  image: string;
  imageAlt: string;
}

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  @ViewChild('projectDialog') private projectDialog?: ElementRef<HTMLDialogElement>;

  readonly navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  readonly themes: { id: ThemeKey; name: string; swatches: string[] }[] = [
    { id: 'modern-classic', name: 'Modern Classic', swatches: ['#2563eb', '#7c3aed'] },
    { id: 'tech-elegance', name: 'Tech Elegance', swatches: ['#4169e1', '#8b5cf6'] },
    { id: 'developer-pro', name: 'Developer Pro', swatches: ['#0f766e', '#2563eb'] },
    { id: 'corporate-blue', name: 'Corporate Blue', swatches: ['#1d4ed8', '#0284c7'] },
    { id: 'night-vision', name: 'Night Vision', swatches: ['#38bdf8', '#818cf8'] },
    { id: 'minimal-light', name: 'Minimal Light', swatches: ['#475569', '#64748b'] },
    { id: 'creative-purple', name: 'Creative Purple', swatches: ['#7c3aed', '#c026d3'] },
  ];

  readonly skillGroups = [
    {
      title: 'Backend & APIs',
      icon: '{ }',
      skills: ['C#', '.NET', '.NET Core', 'ASP.NET Core', 'ASP.NET MVC', 'ASP.NET Web API', 'Entity Framework', 'LINQ and asynchronous programming', 'ASP.NET Core Web API', 'Async/Await', 'Dependency Injection', 'Middleware', 'Routing', 'Entity Framework / EF Core'],
    },
    {
      title: 'Frontend Development',
      icon: '</>',
      skills: [
        'AngularJS',
        'Angular',
        'RxJS',
        'React.js',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Bootstrap',
        'jQuery',
        'AJAX',
      ],
    },
    {
      title: 'Data & Integration',
      icon: '▤',
      skills: ['Oracle 19c', 'SQL Server', 'MySQL', 'RESTful APIs', 'JSON', 'Swagger', 'Postman', 'SQL query optimization', 'Stored Procedures'],
    },
    {
      title: 'Tools & Ways of Working',
      icon: '⌘',
      skills: [
        'TFS',
        'Git',
        'GitHub',
        'Azure DevOps',
        'Jira',
        'Bitbucket',
        'Visual Studio 2022',
        'Visual Studio Code',
        'GitHub Copilot',
        'Agile Scrum',
        'SDLC',
        'CI/CD Pipelines',
      ],
    },
    {
      title: 'Core Concepts',
      icon: '✦',
      skills: ['Object-Oriented Programming', 'Exception Handling', 'Debugging', 'Responsive Web Development', 'Design Principles', 'Software Architecture', 'Performance Optimization','Code Review','Unit Testing','Testing', ],
    },
  ];

  readonly experienceBullets = [
    'Develop and enhance enterprise application modules using C#, .NET, ASP.NET Core, AngularJS, Angular 20, and Oracle 19c.',
    'Implement features and enhancements across Timeline, Observation Chart, Journal, Care Score, and Dashboard modules.',
    'Develop and maintain RESTful APIs and integrate backend services with Angular interfaces.',
    'Contribute to the Angular 20 migration while maintaining compatibility with existing AngularJS and .NET functionality.',
    'Investigate and resolve functional defects and production issues across frontend, backend, and database layers.',
    'Write and troubleshoot Oracle SQL queries and support database changes and data analysis.',
    'Participate in requirements analysis, effort estimation, development, unit testing, code reviews, and release activities within Agile workflows.',
    'Facilitate daily stand-up meetings, schedule team discussions, follow up on blockers, and track sprint progress to support timely delivery.',
    'Communicate blockers and delivery updates to the manager and collaborate with QA, business teams, and cross-functional stakeholders.',
    'Use TFS, Azure DevOps, and GitHub Copilot to support development, version control, and day-to-day engineering activities.',
  ];

  readonly projects: PortfolioProject[] = [
    {
      title: 'I Med One',
      category: 'Healthcare',
      description:
        'Enterprise application development, clinical workflow modules, REST APIs, Angular migration, Oracle database integration, and production troubleshooting.',
      company: 'T-Systems India ICT Pvt. Ltd. (Thy Grace Consultant)',
      period: 'January 2025 - Present',
      role: '.NET Full Stack Developer',
      overview: [
        'I Med One is a hospital information system. My work focuses on developing, enhancing, and maintaining modules that present clinical information and support day-to-day hospital workflows, including Timeline, Observation Chart, Journal, Care Score, and Dashboard.',
        'My contribution spans the Angular user interface, .NET backend services, REST API integration, and Oracle database layer. Alongside feature delivery, I investigate functional and production issues and contribute to the transition from existing AngularJS interfaces to Angular 20 while maintaining existing functionality.',
        'Alongside hands-on development, I facilitate daily stand-ups, schedule team discussions, follow up on blockers, and track sprint progress. I communicate delivery updates and blockers to my manager and collaborate with QA, business teams, and cross-functional stakeholders to support timely delivery.',
      ],
      features: [
        { title: 'Timeline and Journal', description: 'Application modules for presenting information over time and working with journal entries within hospital workflows.' },
        { title: 'Observation Chart', description: 'Clinical observation displays and chart-related features, including enhancements and resolution of functional issues.' },
        { title: 'Care Score', description: 'Features supporting care scoring within the hospital information system.' },
        { title: 'Dashboard', description: 'Dashboard features that bring application information together in the user interface.' },
        { title: 'API integration and interface migration', description: 'REST services connecting frontend modules to backend functionality, alongside contributions to Angular 20 migration.' },
      ],
      technologyGroups: [
        { area: 'Backend & APIs', technologies: ['C#', '.NET', '.NET Core', 'ASP.NET Core', 'Web API', 'REST APIs'] },
        { area: 'Frontend', technologies: ['AngularJS', 'Angular 20', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'] },
        { area: 'Database', technologies: ['Oracle 19c', 'SQL'] },
        { area: 'Development & collaboration', technologies: ['TFS', 'Azure DevOps', 'Visual Studio', 'Visual Studio Code', 'GitHub Copilot', 'Agile Scrum', 'Agile Team Coordination'] },
      ],
      responsibilities: this.experienceBullets,
      image: 'assets/projects/imed-one.png',
      imageAlt: 'Healthcare professional using a tablet with connected digital health symbols',
    },
    {
      title: 'Club Caddie',
      category: 'Golf & Recreation',
      description:
        'Cloud-based golf course operations platform. Contributed to booking, membership, event management, reporting, and availability features.',
      company: 'Define Labs Pvt. Ltd.',
      period: 'February 2024 - December 2024',
      role: '.NET Full Stack Developer',
      overview: [
        'Club Caddie is a cloud-based platform for golf course operations. Its broader product scope includes employee management, restaurant operations, tee booking, events, and range tracking. My development contributions focused on booking, membership, event management, availability, and reporting.',
        'I contributed to full-stack development across these areas, building responsive interfaces, integrating backend APIs, and working with SQL Server data. My work also included real-time booking and availability functionality and dashboards for revenue, user activity, and operational reporting.',
      ],
      features: [
        { title: 'Tee booking and availability', description: 'Reservation workflows and real-time availability functionality for golf course scheduling and bookings.' },
        { title: 'Membership management', description: 'Application modules supporting membership-related operations within the platform.' },
        { title: 'Event management', description: 'Features supporting the management of golf course events.' },
        { title: 'Reporting dashboards', description: 'Dashboard views presenting revenue, user activity, and operational data.' },
        { title: 'Responsive interfaces and APIs', description: 'User interface components connected to backend services through REST API integration.' },
      ],
      technologyGroups: [
        { area: 'Backend & APIs', technologies: ['C#', '.NET', '.NET Core', 'ASP.NET Core', 'MVC', 'Web API', 'REST APIs'] },
        { area: 'Frontend', technologies: ['Angular 14', 'React'] },
        { area: 'Database', technologies: ['SQL Server 2017'] },
        { area: 'Development & collaboration', technologies: ['Git', 'GitHub', 'Jira', 'Bitbucket', 'Visual Studio', 'Agile'] },
      ],
      responsibilities: [
        'Develop booking, membership, and event management functionality using ASP.NET Core, Web API, Angular, and SQL Server.',
        'Implement real-time booking and availability functionality for scheduling and reservation workflows.',
        'Develop reporting dashboards that present revenue, user activity, and operational information.',
        'Build responsive UI components and integrate Angular screens with REST APIs.',
        'Work across backend services and SQL Server data as part of delivering full-stack application features.',
        'Contribute to estimation and Agile delivery cycles, and investigate, debug, and resolve application issues.',
      ],
      image: 'assets/projects/club-caddie.jpg',
      imageAlt: 'Golf cart on a golf course at sunset',
    },
    {
      title: 'Healthcare Appointment Scheduling System',
      category: 'Healthcare',
      description:
        'Web-based appointment scheduling application supporting practitioner availability, booking workflows, profiles, notifications, and administration.',
      company: 'Smart Software Services Pvt. Ltd.',
      period: 'June 2022 - February 2024',
      role: '.NET Full Stack Developer',
      overview: [
        'The Healthcare Appointment Scheduling System is a web-based application for booking and managing appointments with medical practitioners. It supports patient and healthcare provider workflows through real-time practitioner availability, patient profile management, automated reminders, and administrative modules for appointments, schedules, and patient records.',
        'I worked on the application across its Angular frontend, ASP.NET MVC and .NET Core backend, and SQL data layer. My contribution included scheduling modules, real-time practitioner availability, and responsive interfaces, along with requirements analysis, testing, debugging, and issue resolution.',
      ],
      features: [
        { title: 'Appointment booking and scheduling', description: 'Application workflows for booking and managing healthcare appointments.' },
        { title: 'Practitioner availability', description: 'Real-time availability functionality to support appointment scheduling.' },
        { title: 'Patient profile management', description: 'Patient profile functionality supporting patient and healthcare provider workflows.' },
        { title: 'Notifications and reminders', description: 'Notification modules and automated appointment reminders to support the patient experience.' },
        { title: 'Administration', description: 'Administrative modules for managing appointments, schedules, and patient records.' },
      ],
      technologyGroups: [
        { area: 'Backend', technologies: ['C#', '.NET', '.NET Core', 'ASP.NET MVC'] },
        { area: 'Frontend', technologies: ['Angular 14', 'HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'AJAX', 'jQuery'] },
        { area: 'Database', technologies: ['SQL'] },
        { area: 'Development tools', technologies: ['Visual Studio', 'Visual Studio Code'] },
      ],
      responsibilities: [
        'Develop appointment booking and scheduling modules using ASP.NET MVC, .NET Core, Angular, and SQL.',
        'Implement real-time practitioner availability functionality to support appointment scheduling workflows.',
        'Develop profile management, notification, and administrative modules.',
        'Build responsive Angular interfaces with HTML, CSS, Bootstrap, and JavaScript.',
        'Use AJAX and jQuery within the application frontend as part of interface development.',
        'Participate in requirements analysis and application development, followed by testing, debugging, and issue resolution.',
      ],
      image: 'assets/projects/healthcare-appointments.png',
      imageAlt: 'Doctor using a tablet with an online appointment scheduling calendar',
    },
  ];

  readonly filters = ['All Projects', 'Healthcare', 'Golf & Recreation'] as const;
  readonly previousExperience = [
    {
      dates: 'FEBRUARY 2024 — DECEMBER 2024',
      role: '.NET Full Stack Developer',
      company: 'DEFINE LABS PVT. LTD.',
      project: 'Club Caddie',
      responsibilities: [
        'Developed booking, membership, and event management modules using ASP.NET Core, Web API, Angular, and SQL Server.',
        'Implemented real-time booking and availability functionality for scheduling and reservations.',
        'Developed reporting dashboards for revenue, user activity, and operational data.',
        'Built responsive UI components and integrated REST APIs with Angular applications.',
        'Contributed to estimation, issue analysis, debugging, and resolution in Agile delivery cycles.',
      ],
      technologies: ['C#', '.NET Core', 'ASP.NET Core', 'Angular 14', 'SQL Server 2017', 'React', 'Git', 'Jira', 'Bitbucket'],
    },
    {
      dates: 'JUNE 2022 — FEBRUARY 2024',
      role: '.NET Full Stack Developer',
      company: 'SMART SOFTWARE SERVICES PVT. LTD.',
      project: 'Healthcare Appointment Scheduling System',
      responsibilities: [
        'Developed appointment booking and scheduling modules using ASP.NET MVC, .NET Core, Angular, and SQL.',
        'Implemented real-time practitioner availability to support appointment scheduling.',
        'Developed profile management, notification, and administrative modules.',
        'Built responsive interfaces using Angular, HTML, CSS, Bootstrap, JavaScript, AJAX, and jQuery.',
        'Participated in requirements analysis, development, debugging, testing, and issue resolution.',
      ],
      technologies: ['C#', '.NET Core', 'ASP.NET MVC', 'Angular 14', 'SQL', 'HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'AJAX', 'jQuery'],
    },
  ];

  activeTheme: ThemeKey = 'modern-classic';
  activeFilter: ProjectFilter = 'All Projects';
  activeExperienceTab = 'Current Experience';
  selectedProject?: PortfolioProject;
  readonly currentYear = new Date().getFullYear();
  private readonly careerStartMonth = new Date(2022, 5, 1);
  private readonly experienceAsOf = signal(new Date());
  private experienceRefreshTimer?: number;
  menuOpen = false;
  themePanelOpen = false;
  contactName = '';
  contactEmail = '';
  contactSubject = '';
  contactMessage = '';
  contactSubmitted = false;
  formFeedback = '';
  formFeedbackIsError = false;
  openingEmail = false;

  readonly contact = {
    email: 'gavalip000@gmail.com',
    phone: '+91-9226637515',
    linkedin: 'https://www.linkedin.com/in/pravin-gavali-a29481237',
    github: '',
    resume: 'assets/pravin-gavali-resume.pdf',
  };

  get visibleProjects(): PortfolioProject[] {
    return this.activeFilter === 'All Projects'
      ? this.projects
      : this.projects.filter((project) => project.category === this.activeFilter);
  }

  get currentThemeName(): string {
    return this.themes.find((theme) => theme.id === this.activeTheme)?.name ?? 'Modern Classic';
  }

  get experienceDuration(): string {
    const now = this.experienceAsOf();
    const totalMonths = Math.max(
      0,
      (now.getFullYear() - this.careerStartMonth.getFullYear()) * 12 +
        now.getMonth() -
        this.careerStartMonth.getMonth(),
    );
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    return `${years} ${years === 1 ? 'Year' : 'Years'} ${months} ${months === 1 ? 'Month' : 'Months'}`;
  }

  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => this.scheduleExperienceRefresh());
    destroyRef.onDestroy(() => {
      if (this.experienceRefreshTimer !== undefined) {
        window.clearTimeout(this.experienceRefreshTimer);
      }
    });

    try {
      const savedTheme = window.localStorage.getItem('pravin-portfolio-theme') as ThemeKey | null;
      if (savedTheme && this.themes.some((theme) => theme.id === savedTheme)) {
        this.activeTheme = savedTheme;
      }
    } catch {
      // The default theme remains available when browser storage is disabled.
    }
  }

  private scheduleExperienceRefresh(): void {
    const now = new Date();
    const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    this.experienceRefreshTimer = window.setTimeout(() => {
      this.experienceAsOf.set(new Date());
      this.scheduleExperienceRefresh();
    }, nextMonth.getTime() - now.getTime());
  }

  @HostListener('document:keydown.escape')
  closeTransientPanels(): void {
    this.menuOpen = false;
    this.themePanelOpen = false;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    this.themePanelOpen = false;
  }

  setTheme(theme: ThemeKey): void {
    this.activeTheme = theme;
    try {
      window.localStorage.setItem('pravin-portfolio-theme', theme);
    } catch {
      // Theme changes still apply for the current visit if storage is unavailable.
    }
  }

  openProject(project: PortfolioProject): void {
    this.selectedProject = project;
    const dialog = this.projectDialog?.nativeElement;
    if (dialog) {
      dialog.showModal();
      dialog.scrollTop = 0;
    }
  }

  closeProject(): void {
    this.projectDialog?.nativeElement.close();
    this.selectedProject = undefined;
  }

  closeProjectFromBackdrop(event: MouseEvent): void {
    if (event.target === this.projectDialog?.nativeElement) {
      this.closeProject();
    }
  }

  submitContactForm(form: NgForm): void {
    this.formFeedback = '';
    this.formFeedbackIsError = false;
    this.contactSubmitted = true;

    if (form.invalid) {
      return;
    }

    if (!this.contact.email) {
      this.formFeedback = 'Email delivery is not configured yet. Add your email address in src/app/app.ts to enable the mail app fallback.';
      this.formFeedbackIsError = true;
      return;
    }

    const subject = encodeURIComponent(this.contactSubject);
    const body = encodeURIComponent(
      `From: ${this.contactName} <${this.contactEmail}>\n\n${this.contactMessage}`,
    );
    this.openingEmail = true;
    window.location.href = `mailto:${this.contact.email}?subject=${subject}&body=${body}`;
    this.formFeedback = 'Your email app should open with your message. It has not been sent by this website.';
    window.setTimeout(() => {
      this.openingEmail = false;
    }, 1200);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
