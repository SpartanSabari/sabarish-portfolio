const PORTFOLIO = {
  name: "Sabarish N",
  fullName: "Sabarish Narayanamoorthy",
  role: "Software Engineer",
  heroTitle: "Java Backend & Full-Stack Developer",
  location: "Chennai, India",
  experience: "3+ years in software development",

  heroSubtitle:
    "Software Engineer specializing in Java, Spring Boot, REST APIs, databases, Angular and business application development.",

  summary:
    "Software Engineer with 3+ years of experience building and maintaining enterprise and business applications. Experienced in Java, Spring Boot, REST APIs, JPA/Hibernate, SQL, Angular and web technologies, with hands-on work across backend services, business workflows, database operations, validation, authentication/authorization and application maintenance.",

  contact: {
    // Replace the email below with the email you want displayed publicly.
    email: "[YOUR EMAIL]",
    github: "https://github.com/SpartanSabari",
    linkedin: "https://www.linkedin.com/in/sabarish-n-843a34226/",
    location: "Chennai, India"
  },

  skills: {
    Backend: [
      "Java 21", "Spring Boot", "Spring MVC", "Spring Data JPA",
      "Hibernate", "REST APIs", "Java Collections", "OOP",
      "Exception Handling", "Validation", "Authentication",
      "Authorization", "Microservices Concepts", "PHP",
      "CodeIgniter", "Node.js"
    ],
    Frontend: ["Angular", "React", "JavaScript", "HTML", "CSS"],
    Mobile: ["Flutter", "Dart"],
    Database: ["MySQL", "MongoDB", "H2", "SQL"],
    Tools: ["Git", "GitHub", "Postman", "Swagger/OpenAPI"],
    "Other Expertise": [
      "API Integration", "CRUD", "Admin Dashboards", "CRM", "ERP",
      "Inventory", "Billing", "Payroll-related Applications",
      "Mobile Applications", "PDF/Report Generation"
    ]
  },

  experience: [
    {
      company: "Tech Mahindra",
      role: "Software Engineer",
      band: "U2",
      location: "Chennai",
      period: "Current",
      technologies: [
        "Java 21", "Spring Boot", "Spring MVC", "Spring Data JPA",
        "Hibernate", "REST APIs", "Angular", "SQL", "H2",
        "Spring Security", "Git", "Postman"
      ],
      bullets: [
        "Develop enterprise and business application functionality using Java 21 and Spring Boot.",
        "Build REST APIs using Controller-Service-Repository architecture with DTOs, entities and JPA repositories.",
        "Implement business logic, validation, exception handling and database interactions using Spring Data JPA and Hibernate.",
        "Work with authentication and authorization concepts using Spring Security.",
        "Contribute to workflow implementation and application maintenance across business-focused modules.",
        "Use Git and Postman as part of development, collaboration and API testing."
      ]
    }
  ],

  projects: [
    {
      name: "Enterprise Business Application",
      category: "Backend / Full-Stack",
      description:
        "Enterprise application development focused on business workflows, REST APIs and maintainable backend services.",
      purpose:
        "Support business workflows through structured APIs, application services and database operations.",
      contribution: [
        "REST API development",
        "Controller-Service-Repository architecture",
        "DTO and entity design",
        "Business logic and validation",
        "Exception handling",
        "JPA/Hibernate database operations",
        "Authentication and authorization concepts",
        "Workflow implementation"
      ],
      stack: ["Java 21", "Spring Boot", "REST APIs", "JPA", "Hibernate", "Angular", "SQL", "H2", "Git", "Postman"],
      architecture: "Angular → REST API → Spring Boot Controller → Service → Repository → JPA/Hibernate → Database",
      challenges: [
        "Keeping API, DTO, service and persistence layers cleanly separated.",
        "Handling validation, exceptions and business rules consistently.",
        "Working with database-backed workflows while maintaining readable backend code."
      ],
      outcome: "Hands-on enterprise application development experience across backend APIs, workflows and database interaction."
    },
    {
      name: "EV Rental / Vehicle Booking Mobile Application",
      category: "Mobile / API Integration",
      description:
        "Mobile application work for EV rental and vehicle booking workflows.",
      purpose:
        "Support vehicle availability and booking-related user workflows through a mobile application and backend APIs.",
      contribution: [
        "Flutter mobile application development",
        "REST API integration",
        "Backend integration using PHP",
        "MySQL database interaction",
        "Booking-related application flows"
      ],
      stack: ["Flutter", "Dart", "REST APIs", "PHP", "MySQL", "API Integration"],
      challenges: [
        "Connecting mobile screens with backend APIs.",
        "Handling application data and booking-related flows across mobile and backend layers."
      ],
      outcome: "Practical experience integrating a Flutter mobile application with REST APIs and backend services."
    },
    {
      name: "CRM / ERP Business Management System",
      category: "Business Application",
      description:
        "Business management application work covering CRM and ERP-oriented modules and administrative workflows.",
      purpose:
        "Support customer, operational and administrative processes through configurable business modules.",
      contribution: [
        "CRM customization",
        "Customer and lead management",
        "Inventory and billing workflows",
        "Admin panels and user management",
        "CRUD operations",
        "Database operations",
        "API integration",
        "Bug fixing and application maintenance",
        "Reports and PDF generation"
      ],
      stack: ["PHP", "CodeIgniter", "MySQL", "JavaScript", "HTML", "CSS", "REST APIs"],
      challenges: [
        "Maintaining existing business applications while implementing requested changes.",
        "Connecting UI workflows with database-backed business logic.",
        "Supporting reporting and administrative operations."
      ],
      outcome: "Experience working on real-world CRM/ERP-style business applications and ongoing application maintenance."
    },
    {
      name: "Inventory / Billing / Business Applications",
      category: "Business Applications",
      description:
        "Development and maintenance work across inventory, billing, customer and administration-focused applications.",
      purpose:
        "Support day-to-day business operations through CRUD workflows, dashboards, reporting and database-backed services.",
      contribution: [
        "Inventory management",
        "Billing workflows",
        "Customer management",
        "Admin dashboards",
        "CRUD operations",
        "Reports",
        "Database queries",
        "API integration",
        "User access",
        "Maintenance and bug fixing"
      ],
      stack: ["PHP", "CodeIgniter", "MySQL", "JavaScript", "Angular / React where applicable"],
      challenges: [
        "Supporting multiple business workflows within existing applications.",
        "Maintaining data consistency across UI, APIs and database operations."
      ],
      outcome: "Hands-on experience supporting practical business software and application maintenance."
    }
  ],

  plannedProject: {
    name: "Dynamic Role + Permission + Delegation Management SaaS",
    status: "PLANNED / UPCOMING",
    description:
      "A planned multi-tenant SaaS concept for managing primary roles, secondary roles, temporary roles, leave-based delegation, permissions, approvals and audit history.",
    concept: [
      "Primary and secondary role management",
      "Temporary role assignment",
      "Leave-based delegation",
      "Permission management",
      "Approval workflows",
      "Audit history"
    ],
    stack: [
      "Angular", "Java 21", "Spring Boot", "Spring Security",
      "JPA/Hibernate", "PostgreSQL / MySQL", "REST APIs", "JWT", "Docker (later)"
    ]
  },

  education: [
    {
      qualification: "B.E. Mechanical Engineering",
      institution: "St. Joseph’s College of Engineering and Technology, Thanjavur",
      year: "2021",
      score: "CGPA: 7.74"
    },
    {
      qualification: "Diploma in Mechanical Engineering",
      institution: "Government Polytechnic College, Trichy",
      year: "",
      score: "66%"
    },
    {
      qualification: "SSLC",
      institution: "",
      year: "",
      score: "92%"
    }
  ],

  certification: null
};
