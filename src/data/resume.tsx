import { Icons } from "@/components/icons";
import { House } from "lucide-react";

import { Cplusplus } from "@/components/ui/svgs/cplusplus";
import { Csharp } from "@/components/ui/svgs/csharp";
import { Php } from "@/components/ui/svgs/php";
import { Javascript } from "@/components/ui/svgs/javascript";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Laravel } from "@/components/ui/svgs/laravel";
import { Filament } from "@/components/ui/svgs/filament";
import { Vue } from "@/components/ui/svgs/vue";
import { Tailwind } from "@/components/ui/svgs/tailwind";
import { Mysql } from "@/components/ui/svgs/mysql";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";

export const DATA = {
  name: "Mohamed Mousa",
  initials: "MM",
  url: "https://mohamedmousa.tech",
  location: "Cairo, Egypt",
  locationLink: "https://www.google.com/maps/place/Cairo",
  description:
    "Full-stack developer specializing in PHP, Laravel & Filament. I build production-ready, AI-integrated web platforms.",
  summary:
    "I'm a full-stack developer based in Cairo, working in the Laravel ecosystem. I joined [WKS LTD](https://wks.agency/) as a Laravel intern (Jul–Nov 2025), where I designed and built an [AI-powered job board platform](/#projects) on Laravel 12 — résumé screening and candidate matching with Google Gemini, role-based access control, queued jobs, and a Dockerized production deployment.\n\nSince February 2026 I've continued at [WKS LTD](https://wks.agency/), doing manual testing of the internal platform, small tasks around the database and the design, and writing documentation, along with proposing design improvements. Alongside that role I built [HanyMart](/#projects), a production e-commerce platform with a Laravel REST API and a separate TypeScript front end.\n\nI came to the web from a Civil Engineering degree at [Benha University](/#education) and a couple of years building C++ and C# desktop systems on my own. I'm [Laravel certified](/#certifications) and completed McKinsey's Forward Program.",
  avatarUrl: "/portfolio.png",
  ogImage: "/android-chrome-512x512.png",

  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: {
      order: 2,
      enabled: true,
      heading: "Work Experience",
      presentLabel: "Present",
    },
    education: { order: 3, enabled: true, heading: "Education" },
    skills: { order: 4, enabled: true, heading: "Skills" },
    certifications: {
      order: 5,
      enabled: true,
      heading: "Certifications",
    },
    projects: {
      order: 6,
      enabled: true,
      label: "Projects",
      heading: "Things I've built",
      text: "A selection of work across web and desktop — from AI-powered Laravel platforms to C# and C++ systems.",
    },
    contact: {
      order: 7,
      enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "The fastest way to reach me is on WhatsApp or by email. I'm open to full-stack and backend roles.",
    },
  },

  // Ordered low-level → high-level.
  skills: [
    { name: "C++", icon: Cplusplus },
    { name: "C#", icon: Csharp },
    { name: "PHP", icon: Php },
    { name: "JavaScript", icon: Javascript },
    { name: "TypeScript", icon: Typescript },
    { name: "Laravel", icon: Laravel },
    { name: "Filament", icon: Filament },
    { name: "Vue", icon: Vue },
    { name: "Tailwind CSS", icon: Tailwind },
    { name: "MySQL", icon: Mysql },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Docker", icon: Docker },
  ],

  navbar: [{ href: "/", icon: House, label: "Home" }],

  contact: {
    email: "mohamedhanymusa@gmail.com",
    tel: "+201125226780",
    social: {
      WhatsApp: {
        name: "WhatsApp",
        url: "https://wa.me/201125226780",
        icon: Icons.whatsapp,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Masry2001",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mohamedhanymusa/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/MohamedMos16571",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:mohamedhanymusa@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "WKS LTD",
      href: "https://wks.agency/",
      badges: [],
      location: "Cairo, Egypt",
      title: "Full Stack Engineer",
      logoUrl: "https://www.google.com/s2/favicons?domain=wks.agency&sz=128",
      start: "February 2026",
      end: undefined,
      description:
        "Manual testing of the company's internal platform and reporting issues, alongside small tasks around the database and the UI design and writing documentation. Reviewed the platform's design and proposed improvements.",
    },
    {
      company: "WKS LTD",
      href: "https://wks.agency/",
      badges: ["Internship"],
      location: "Cairo, Egypt · Hybrid",
      title: "Full-Stack Laravel Developer",
      logoUrl: "https://www.google.com/s2/favicons?domain=wks.agency&sz=128",
      start: "July 2025",
      end: "November 2025",
      description:
        "Designed and built an AI-powered job board platform with Laravel 12, MySQL, Tailwind, and Docker. Integrated Google Gemini to screen résumés and match candidates against job requirements, implemented role-based access control and ownership policies, used Supabase for cloud storage, moved long-running work into queued jobs, and owned the containerized production deployment.",
    },
  ],

  education: [
    {
      school: "Benha University",
      href: "https://www.bu.edu.eg/",
      degree: "B.Sc. in Civil Engineering",
      logoUrl: "https://www.google.com/s2/favicons?domain=bu.edu.eg&sz=128",
      start: "2019",
      end: "2025",
    },
  ],

  certifications: [
    {
      name: "Laravel",
      issuer: "Udemy",
      date: "2025",
      href: "/certificates/laravel-12-udemy.pdf",
    },
    {
      name: "Forward Program",
      issuer: "McKinsey & Company",
      date: "2023",
      href: "/certificates/mckinsey-forward-program.pdf",
    },
    {
      name: "Introduction to RESTful APIs",
      issuer: "Programming Advices",
      date: "2025",
      href: "/certificates/restful-api.pdf",
    },
    {
      name: "OOP Concepts & Applications",
      issuer: "Programming Advices",
      date: "2024",
      href: "/certificates/oop-concepts.pdf",
    },
    {
      name: "Data Structures & Algorithms",
      issuer: "Programming Advices",
      date: "2024",
      href: "/certificates/data-structures.pdf",
    },
    {
      name: "Databases — SQL & T-SQL",
      issuer: "Programming Advices",
      date: "2024",
      href: "/certificates/databases-sql.pdf",
    },
  ],

  projects: [
    {
      title: "AI Job Board Platform",
      href: "https://github.com/Masry2001/jobApp",
      dates: "2025",
      active: true,
      description:
        "A full hiring platform split into two apps — a job portal for seekers and a back office for companies and admins — built on Laravel 12 with a shared package between them. Google Gemini scores each résumé against the job description and returns structured feedback for both sides. Includes role-based access control, ownership policies, queued background jobs for the AI analysis, Supabase storage, and a Dockerized production deployment.",
      technologies: [
        "Laravel 12",
        "PHP",
        "Blade",
        "Alpine.js",
        "Tailwind CSS",
        "MySQL",
        "Docker",
        "Google Gemini API",
        "Supabase",
      ],
      links: [
        {
          type: "Job Portal",
          href: "https://github.com/Masry2001/jobApp",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Back Office",
          href: "https://github.com/Masry2001/jobBackoffice",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Design docs",
          href: "https://github.com/Masry2001/jobBoardDesign",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "HanyMart — E-Commerce Platform",
      href: "https://hanymart.com/",
      dates: "2026",
      active: true,
      description:
        "A production e-commerce platform built on Laravel with a REST API. The storefront covers the product catalog, cart, checkout, and orders, with WhatsApp (Meta) integration for order updates, OCR for document capture, and AI-assisted features. A Filament admin dashboard manages inventory, employees, customers, users, suppliers, companies, drivers, analytics, reports, and roles and permissions. Source is private; the live store is public.",
      technologies: [
        "Laravel",
        "PHP",
        "Filament",
        "REST API",
        "Livewire",
        "Alpine.js",
        "PostgreSQL",
        "Docker",
        "WhatsApp (Meta) API",
        "OCR",
        "AI integration",
      ],
      links: [
        {
          type: "Website",
          href: "https://hanymart.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Driving & Vehicle License Department (DVLD v2)",
      href: "https://github.com/Masry2001/DVLDv2Project",
      dates: "2025",
      active: false,
      description:
        "A Windows Forms desktop system that models a driving-license authority: managing drivers, issuing and renewing licenses across vehicle classes (car, motorbike, heavy vehicles), and running the theory and practical tests a driver must pass before a license is granted. Built on a 3-layer architecture — presentation, business logic, and data access — with C# and ADO.NET over SQL Server.",
      technologies: [
        "C#",
        "Windows Forms",
        ".NET Framework",
        "ADO.NET",
        "SQL Server",
        "3-Layer Architecture",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Masry2001/DVLDv2Project",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Bank Management System",
      href: "https://github.com/Masry2001/Bank_Project",
      dates: "2024",
      active: false,
      description:
        "A console banking system in modern C++, built to practice object-oriented design. Handles account creation, deposits, withdrawals, balance inquiries, and user management, with a login system that uses bitwise flags for permissions. Applies encapsulation, inheritance, and polymorphism throughout.",
      technologies: ["C++", "OOP", "File I/O"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Masry2001/Bank_Project",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
} as const;
