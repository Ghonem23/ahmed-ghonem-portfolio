export const personalInfo = {
  name: "Ahmed Ghonem",
  title: "Quality Assurance Engineer",
  subtitle: "Software Engineering & Backend Foundation",
  location: "Cairo, Egypt",
  email: "ahmghonem23@gmail.com",
  phone: "+20 1X XXXX XXXX", // Replace with your actual phone/WhatsApp number
  github: "https://github.com/Ghonem23",
  linkedin: "https://www.linkedin.com/in/ahmed-ghonem-277468361",
  image: "/profile.jpg",
  summary:
    "Software Engineering graduate (2024) and Junior QA Engineer at Sarmady. I combine functional testing rigor with a solid software engineering background in Java, Spring Boot, and Python to perform deep-level API verification, database validation, and root-cause defect analysis.",
};

export const services = [
  {
    title: "Functional & Regression Web QA",
    description:
      "Comprehensive end-to-end testing across web platforms, validating workflows, boundary values, and user journeys.",
    deliverables: [
      "Structured test execution reports",
      "Detailed bug reports with reproduction steps & console/network logs",
      "Regression checklists for staging and production releases",
    ],
    tools: ["Chrome DevTools", "Jira", "ClickUp", "TestRail"],
  },
  {
    title: "REST API Validation & Test Suites",
    description:
      "Deep technical verification of backend APIs, authentication mechanisms, status codes, payload structures, and response schemas.",
    deliverables: [
      "Modular Postman collections with automated test scripts",
      "Environment and variable configurations",
      "JSON schema and boundary response validation",
    ],
    tools: ["Postman", "Newman", "cURL", "JSON Schema"],
  },
  {
    title: "Database State & Data Integrity Testing",
    description:
      "Direct database verification ensuring application operations correctly persist, mutate, and isolate transactional data without corruption.",
    deliverables: [
      "SQL data verification queries",
      "State validation reports across CRUD workflows",
      "Data consistency edge-case analysis",
    ],
    tools: ["MySQL", "PostgreSQL", "DBeaver", "SQL"],
  },
];

export const qaCaseStudies = [
  {
    title: "E-Commerce MVP Comprehensive QA Test Plan & Defect Suite",
    category: "Functional & Exploratory QA",
    overview:
      "Designed and executed end-to-end test cases covering checkout flows, multi-item carts, coupon logic, and error boundaries for a web application.",
    highlights: [
      "Identified critical state defects during race-condition stock deductions",
      "Created structured bug logs with full reproduction steps and network payloads",
      "Documented regression test suites for rapid release verification",
    ],
    artifacts: ["Test Case Matrix (Sheets)", "Defect Reports (Markdown)", "Traceability Matrix"],
  },
  {
    title: "RESTful API Integration & Contract Test Suite",
    category: "API Testing & Automation",
    overview:
      "Built a complete Postman collection testing authentication tokens, authorization roles, pagination, and invalid input rejection against REST endpoints.",
    highlights: [
      "100% assertion coverage on critical auth and data mutation endpoints",
      "Automated status code, schema, and latency assertions inside Postman",
      "Runner-ready integration scripts via Newman CLI",
    ],
    artifacts: ["Exported Postman Collection (v2.1)", "Environment Files", "Test Run HTML Reports"],
  },
];

export const devFoundations = [
  {
    title: "Scalable REST Service Architecture",
    stack: "Java, Spring Boot, MySQL",
    description:
      "Engineered layered backend systems adhering to clean architecture, modular services, and OOP principles. Gives me the ability to read code, inspect controllers, and isolate backend root causes during QA.",
  },
  {
    title: "Python Data & Automation Scripts",
    stack: "Python, Flask, PostgreSQL",
    description:
      "Developed backend utilities and database services, leveraging Python for test-data generation, data seeding, and API interaction scripts.",
  },
];