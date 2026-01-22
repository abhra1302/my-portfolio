/**
 * Portfolio Configuration
 * This is the single file to customize for creating different portfolio websites.
 * All personal information, projects, skills, and content go here.
 * The components will automatically render using this configuration.
 */

export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Abhra Roy",
    title: "Full-Stack Developer",
    description:
      "A passionate Full-Stack Developer building modern web applications with focus on clean code and performance.",
    email: "abhra@example.com",
    location: "India",
    avatar: "/avatar.jpg", // Add your avatar image
  },

  // Social Links
  social: [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: "linkedin",
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: "twitter",
    },
  ],

  // Navigation Menu Items
  navigation: [
    { label: "Home", path: "/", icon: "home" },
    { label: "About", path: "/about", icon: "person" },
    { label: "Projects", path: "/projects", icon: "work" },
    { label: "Skills", path: "/skills", icon: "code" },
    { label: "Contact", path: "/contact", icon: "email" },
  ],

  // Hero Section
  hero: {
    headline: "Hi, I'm Abhra Roy",
    subheadline: "A passionate Full-Stack Developer building modern web applications.",
    ctaText: "Learn More About Me",
    ctaAction: "/about",
    backgroundImage: undefined, // Optional: URL to background image
  },

  // About Section
  about: {
    title: "About Me",
    content: [
      "I'm a full-stack developer with experience building scalable web applications and modern websites for businesses.",
      "I focus on clean UI, performance, and maintainable code. My expertise spans both frontend and backend technologies.",
      "I'm passionate about creating beautiful, functional web experiences that solve real-world problems.",
    ],
    highlights: [
      "6+ years of web development experience",
      "Expert in Java, Spring Boot, Node.js, React and TypeScript",
      "Passionate about clean architecture",
      "Always learning and improving",
    ],
  },

  // Projects Section
  projects: [
    {
      id: 1,
      title: "Notification System",
      description: "Built using NestJS, Redis, BullMQ for scalable notifications.",
      technologies: ["NestJS", "Redis", "BullMQ", "TypeScript"],
      link: "https://github.com",
      image: undefined, // Optional: Project image URL
      featured: true,
    },
    {
      id: 2,
      title: "Auth & RBAC Service",
      description: "Spring Boot based authentication system with JWT and roles.",
      technologies: ["Spring Boot", "JWT", "PostgreSQL", "Java"],
      link: "https://github.com",
      image: undefined,
      featured: true,
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "React + TypeScript + Material UI personal portfolio.",
      technologies: ["React", "TypeScript", "Material UI", "Vite"],
      link: "https://github.com",
      image: undefined,
      featured: true,
    },
    {
      id: 4,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "https://github.com",
      image: undefined,
      featured: false,
    },
    {
      id: 5,
      title: "Real-time Chat App",
      description: "WebSocket-based real-time messaging application.",
      technologies: ["React", "Socket.io", "Node.js", "PostgreSQL"],
      link: "https://github.com",
      image: undefined,
      featured: false,
    },
    {
      id: 6,
      title: "Task Management System",
      description: "Collaborative task management with real-time updates.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      link: "https://github.com",
      image: undefined,
      featured: false,
    },
  ],

  // Skills Section
  skills: [
    {
      category: "Frontend",
      items: [
        "React",
        "TypeScript",
        "Material UI",
        "Tailwind CSS",
        "Redux",
        "Next.js",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express",
        "NestJS",
        "Spring Boot",
        "Python",
        "MongoDB",
      ],
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "Docker", "CI/CD", "AWS", "Firebase", "PostgreSQL"],
    },
    {
      category: "Soft Skills",
      items: ["Problem Solving", "Communication", "Team Work", "Leadership"],
    },
  ],

  // Contact Section
  contact: {
    title: "Get In Touch",
    description:
      "Have a project in mind or just want to chat? Feel free to reach out!",
    fields: [
      { name: "name", label: "Your Name", type: "text", required: true },
      { name: "email", label: "Your Email", type: "email", required: true },
      { name: "subject", label: "Subject", type: "text", required: false },
      {
        name: "message",
        label: "Your Message",
        type: "textarea",
        required: true,
      },
    ],
  },

  // Footer
  footer: {
    copyright: "© 2026 Abhra Roy. All rights reserved.",
    links: [
      { label: "Privacy Policy", url: "#" },
      { label: "Terms of Service", url: "#" },
    ],
  },
};
