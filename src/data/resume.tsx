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
  name: "Mohamed Hany Musa",
  initials: "MM",
  url: "https://mohamedmousa.tech",
  location: "Cairo, Egypt",
  locationLink: "https://www.google.com/maps/place/Cairo",
  description:
    "Full-stack developer specializing in PHP, Laravel & Filament. I build production-ready, AI-integrated web platforms.",
  summary:
    "I'm a full-stack developer based in Cairo, focused on the Laravel ecosystem. I'm currently a Full Stack Engineer at [WKS LTD](/#work), building and maintaining the company's internal platform with Laravel and Vue.\n\nEarlier at WKS I designed and shipped an [AI-powered job board platform](/#projects) on Laravel 12 — résumé screening and candidate matching with Google Gemini, role-based access control, queued jobs, and a Dockerized production deployment. I came to the web from a Civil Engineering degree at [Benha University](/#education) and a couple of years building C++ and C# desktop systems on my own.\n\nI'm [Laravel certified](/#certifications) and completed McKinsey's Forward Program.",
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
      href: "https://www.wksagency.com/",
      badges: [],
      location: "Cairo, Egypt",
      title: "Full Stack Engineer",
      logoUrl: "https://www.google.com/s2/favicons?domain=wksagency.com&sz=128",
      start: "February 2026",
      end: undefined,
      description:
        "Building and maintaining the company's internal platform end to end — a Laravel API with a Vue front end, including the artist portal. Responsible for feature delivery, code review, and keeping the platform reliable in production.",
    },
    {
      company: "WKS LTD",
      href: "https://www.wksagency.com/",
      badges: ["Internship"],
      location: "Cairo, Egypt · Hybrid",
      title: "Full-Stack Laravel Developer",
      logoUrl: "https://www.google.com/s2/favicons?domain=wksagency.com&sz=128",
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
        "A production e-commerce platform with a Laravel REST API back end and a separate TypeScript front end. Covers the product catalog, cart and checkout, orders, and an admin dashboard for managing inventory. Source is private; the live store is public.",
      technologies: ["Laravel", "PHP", "REST API", "TypeScript", "MySQL"],
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
      title: "Inventory Management System",
      href: "https://github.com/Masry2001/InventorySystem",
      dates: "2025",
      active: false,
      description:
        "A Windows desktop application for managing products, customers, suppliers, employees, and users. Built with C# and the .NET Framework on a 3-tier architecture, with a normalized SQL Server database accessed through ADO.NET. Includes authentication, CRUD across all entities, and report generation.",
      technologies: [
        "C#",
        ".NET Framework",
        "SQL Server",
        "ADO.NET",
        "3-Tier Architecture",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Masry2001/InventorySystem",
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
