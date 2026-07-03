// ─────────────────────────────────────────────────────────────
// All portfolio content lives here. Edit this file to update
// text across the whole site — no need to touch components.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Mosle Al Dein Soad",
  role: "Technical Project Manager",
  location: "Dhaka, Bangladesh",
  phone: "+8801615316209",
  email: "soad2015prince@gmail.com",
  linkedin: "https://www.linkedin.com/in/mosle-al-dein-soad-85a713337",
  github: "https://github.com/moslealdeinsoad",
  site: "https://moslealdeinsoad.netlify.app",
  tagline: "I keep enterprise ecosystems in sync.",
  summary:
    "As a Technical Project Manager supporting BAT Bangladesh through a strategic technology partner, I oversee the successful delivery of enterprise applications across the PRISM ecosystem, including PRISM, Unnoti, HRMS, IRIS/Optimus, the Insurance Portal, and the Ticketing Portal. I lead cross-functional engineering and business teams, align stakeholders, define product roadmaps, and drive Agile delivery to build secure, scalable, and high-performing digital platforms that empower nationwide sales, distribution, HR, and support operations through real-time data and intelligent automation.",
};

// The live ecosystem — rendered as connected nodes in the hero.
export const ecosystem = [
  { id: "prism", label: "PRISM", note: "", status: "live" },
  { id: "unnoti", label: "UNNOTI", note: "", status: "live" },
  { id: "hrms", label: "HRMS", note: "", status: "live" },
  { id: "iris", label: "IRIS / OPTIMUS", note: "", status: "live" },
  { id: "insurance", label: "INSURANCE", note: "Claims & policy management", status: "live" },
  { id: "retailers", label: "RETAILERS APP", note: "IN proposal stage", status: "build" },
];

export const experience = [
  {
    role: "Technical Project Manager",
    org: "Manush Technologies Ltd — Technology Vendor for BAT Bangladesh",
    place: "Banani, Dhaka",
    start: "Mar 2025",
    end: "Present",
    log: [
      "Leading delivery across six platforms in the PRISM ecosystem — PRISM Echo (web + APK), Unnoti, HRMS, IRIS/Optimus, the Insurance Portal, and the newest build, the Retailers App.",
      "Drove the shift from manual, paper-based field operations to a digitized, mobile-first FMCG sales platform, raising efficiency for field teams nationwide.",
      "Bridged business stakeholders and engineering teams, translating complex requirements into actionable sprint work.",
      "Owned external vendor coordination and technical integrations, holding SLAs and cutting handoff delays.",
      "Structured Agile workflows in Trello, coordinated sprint delivery across design, development, and QA, and kept every stakeholder briefed.",
    ],
  },
  {
    role: "Information Technology Engineer",
    org: "Apsis Solutions Ltd.",
    place: "Banani, Dhaka",
    start: "Feb 2024",
    end: "Feb 2025",
    log: [
      "Ran Office 365 administration, Active Directory management, and day-to-day ITSM portal operations.",
      "Implemented and maintained SMS gateways and reporting systems, sharpening communication, service tracking, and operational transparency.",
    ],
  },
];

export const projects = [
  {
    tag: "PRODUCTION",
    name: "PRISM System",
    stack: "Web App + APK",
    desc: " PRISM is the core platform of the PRISM ecosystem, serving as the central sales management system for nationwide operations. It captures real-time sales transactions submitted by Sales Representatives (SRs) across the country, providing complete visibility into daily sales activities. The platform enables organizations to monitor sales performance, track field operations, manage distribution, and generate timely reports and analytics to support data-driven decision-making.",
  },
  {
    tag: "PRODUCTION",
    name: "HRMS",
    stack: "Enterprise Platform",
    desc: "HRMS (Human Resource Management System) is the centralized human resource management platform that supports nationwide operations. It serves as the people operations backbone of the ecosystem by managing employee information, recording daily attendance, calculating employee PFP (Performance-Based Payment), and assigning Sales Representative (SR) routes across the country. The system ensures efficient workforce management, attendance tracking, performance calculation, and route allocation for field employees.",
  },
  {
    tag: "PRODUCTION",
    name: "Unnoti",
    stack: "Field Enablement",
    desc: "Unnoti System is a loan management platform that enables retailers to obtain financial support through both cash loans and credit facilities, allowing them to choose the financing option that best suits their business needs.",
  },
  {
    tag: "PRODUCTION",
    name: "IRIS / Optimus",
    stack: "Data & Reporting",
    desc: "IRIS / Optimus is a field operations and retailer engagement platform used by Territory Sales Associates (TSAs) and Trade Marketing Coordinators (TMCs) to conduct daily retailer surveys, collect market intelligence, and execute trade marketing activities. The platform also manages partner retailer reward programs by enabling the distribution of gifts and incentives based on retailers' sales performance, ensuring transparent and efficient campaign execution.",
  },
  {
    tag: "PRODUCTION",
    name: "Insurance Portal",
    stack: "Web Platform",
    desc: "Insurance Portal is a centralized employee self-service platform that enables employees to manage their insurance benefits. Through the portal, employees can submit insurance claims, track claim status, upload required documents, and access their insurance policy details. The system streamlines the insurance claim process, ensuring faster processing, transparency, and easy access to employee insurance services.",
  },
  {
    tag: "IN Progress",
    name: "Retailers App",
    stack: "Currently in proposal stage",
    desc: "Retailer Ordering App is the newest module in the ecosystem and is currently in the proposal stage. It is designed to enable retailers to place orders directly through a mobile application, streamlining the ordering process, improving order accuracy, and reducing dependency on manual order collection. The platform aims to provide a faster, more convenient, and efficient ordering experience for retailers while enhancing overall sales operations.",
  },
  {
    tag: "PERSONAL",
    name: "Waste Food Management",
    stack: "PHP · MySQL",
    desc: "A food-donation platform built from full requirement analysis through to detailed technical documentation — use case, activity, sequence, and data-flow diagrams — to streamline development.",
  },
  {
    tag: "PERSONAL",
    name: "Custom DxBall Game",
    stack: "Python · OpenGL",
    desc: "A 2D interactive arcade game built with PyOpenGL, with custom collision detection and object-interaction logic.",
  },
];

export const research = {
  title: "Enhanced Maize Leaf Disease Detection Using CNN Features and Machine Learning Classifiers",
  org: "BRAC University",
  points: [
    "Proposed a scalable approach for applying AI to real agricultural challenges.",
    "Built a CNN-based system that identifies maize leaf diseases with high accuracy.",
  ],
};

export const education = {
  school: "BRAC University",
  degree: "B.Sc. in Computer Science and Engineering",
  start: "Jan 2020",
  end: "Dec 2023",
};

export const skillGroups = [
  {
    label: "Project & Product",
    items: ["Project Management",
"Project Management","Agile / Scrum","Sprint Planning","Roadmap Planning","Requirements Gathering","Business Analysis","Stakeholder Management","Cross-Functional Collaboration","Risk Management","Resource Planning",
"Change Management","Process Improvement","SDLC","UAT Coordination","Backlog Management","Project Planning","Delivery Management","Team Leadership","USER Story Mapping","Wireframing","Technical Documentation","Workflow Automation"],
  },
  {
    label: "Tools & Platforms",
    items: ["Jira", "Trello", "Notion", "Excel", "PowerPoint"],
  },
  {
    label: "Systems Expertise",
    items: ["SaaS", "ERP", "CRM","FinTech", "FMCG", "Retail", "Insurance"],
  },
  {
    label: "Languages",
    items: ["Python", "JavaScript", "HTML / CSS"],
  },
  {
    label: "Developer Tools",
    items: ["Git / GitHub", "Postman", "JMeter", "Cisco Packet Tracer", "VS Code", "PyCharm"],
  },
  {
    label: "Modeling & Diagramming",
    items: ["Lucidchart", "Visio", "UML Diagrams"],
  },
  {
    label: "Systems",
    items: ["Ubuntu", "Windows"],
  },
];

export const certifications = [
  "Project Management: Beginner to Project Manager 2",
  "Rank 1 — SQA (Manual & Automated Testing), Ostad",
  "ICPC Preliminary Contest 2023 — Participant",
  "Problem Solving Session, ARCED Foundation — Certificate of Participation",
  "30-Day AI Master Class — Pantech Solutions",
  "Machine Learning Master Class — Pantech Pro-Labs India Pvt.",
];
