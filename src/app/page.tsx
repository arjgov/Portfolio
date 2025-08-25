"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Download, 
  ExternalLink,
  Code,
  Database,
  Server,
  Globe,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  Star,
  Award,
  Users,
  Zap
} from "lucide-react";
import { useState, useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const experience = [
  {
    company: "Quarks",
    role: "Senior Software Engineer",
    years: "Sep 2024 – Present",
    logo: "🚀",
    projects: [
      {
        name: "Falabella (Recommendations Team)",
        summary: "Shop the Look Experience, V2 Rank APIs, Test Infrastructure Revamp",
        details: "Designed and delivered Shop the Look Experience (<100ms latency), dynamic product bundles, V2 Rank APIs for Widget Service, and revamped test infrastructure (coverage 73%→97%).",
        tech: ["FastAPI", "PostgreSQL", "Redis", "GCP", "Docker", "Kubernetes", "Pytest"],
        impact: "Improved user engagement by 40%"
      },
      {
        name: "Autodesk (Infrastructure Team)",
        summary: "Azure pipelines, VM provisioning, Jenkins infra",
        details: "Developed Azure pipelines for VM image generation, built React-based internal tool for VM provisioning, managed Jenkins infra for 5,000+ nodes/month (99% uptime).",
        tech: ["Python", "Azure", "Jenkins", "React", "Ruby"],
        impact: "Reduced deployment time by 60%"
      }
    ]
  },
  {
    company: "Kyro",
    role: "Software Engineer",
    years: "May 2022 – Sep 2024",
    logo: "⚡",
    projects: [
      {
        name: "Forms and Report",
        summary: "Custom forms, report submissions, permissions, monitoring",
        details: "Designed forms experience, 150,000+ reports, 230,000+ images, permissions management, 98% test coverage, standalone app for monitoring (99% debug success).",
        tech: ["FastAPI", "React.js", "SQL", "CosmosDB", "Azure Container Service", "Azure API Gateway", "Azure EventGrid", "Azure Kubernetes Service", "Azure Static App", "Azure Function App"],
        impact: "Processed 150K+ reports with 98% test coverage"
      },
      {
        name: "Projects and Tasks",
        summary: "Microservices for project/task management",
        details: "Developed microservices for project/task management, used by 95% of customers.",
        tech: ["FastAPI", "React.js", "MongoDB"],
        impact: "Used by 95% of customers"
      },
      {
        name: "Event Streaming and Auditing",
        summary: "Real-time event streaming, auditing",
        details: "Implemented real-time event streaming (MongoDB ChangeStreams, Azure Event Grid), 50,000+ events/day.",
        tech: ["MongoDB", "Azure Event Grid"],
        impact: "50,000+ events processed daily"
      },
      {
        name: "Operations and Tooling",
        summary: "DevOps, CI/CD, internal tools",
        details: "Optimized deployment processes, CI/CD pipeline, internal tools for dev acceleration (template generation, data migration scripts, 20+ hours/week saved).",
        tech: ["Azure", "CI/CD", "Python"],
        impact: "Saved 20+ hours/week for dev team"
      }
    ]
  },
  {
    company: "Cognizant",
    role: "Programmer Analyst",
    years: "Dec 2020 – Apr 2022",
    logo: "💼",
    projects: [
      {
        name: "Data Warehousing and APIs",
        summary: "ETL, RESTful APIs",
        details: "ETL for data warehousing/analysis, RESTful APIs for internal metrics.",
        tech: ["Django", "Flask", "SQL", "AWS", "React"],
        impact: "Streamlined data analysis workflows"
      }
    ]
  }
];

const skills = {
  languages: [
    { name: "Python", proficiency: 95 },
    { name: "C++", proficiency: 85 },
    { name: "Java", proficiency: 80 },
    { name: "Typescript", proficiency: 90 },
    { name: "Bicep", proficiency: 75 }
  ],
  technologies: [
    { name: "Azure", proficiency: 90 },
    { name: "GCP", proficiency: 85 },
    { name: "MongoDB", proficiency: 88 },
    { name: "MySQL", proficiency: 82 },
    { name: "PostgreSQL", proficiency: 85 },
    { name: "Docker", proficiency: 88 },
    { name: "Kubernetes", proficiency: 80 },
    { name: "Git", proficiency: 92 },
    { name: "REST APIs", proficiency: 95 },
    { name: "Jinja", proficiency: 78 },
    { name: "Redis", proficiency: 85 },
    { name: "Auth", proficiency: 80 }
  ],
  frameworks: [
    { name: "FastAPI", proficiency: 92 },
    { name: "Django", proficiency: 85 },
    { name: "Flask", proficiency: 80 },
    { name: "Next.js", proficiency: 88 },
    { name: "Node.js", proficiency: 82 },
    { name: "React", proficiency: 85 },
    { name: "Express", proficiency: 78 },
    { name: "Pytest", proficiency: 90 }
  ],
  concepts: [
    { name: "Microservices", proficiency: 88 },
    { name: "Agile", proficiency: 90 },
    { name: "System Design", proficiency: 85 },
    { name: "Cloud Architecture", proficiency: 87 }
  ]
};

const education = {
  college: "Vimal Jyothi Engineering College",
  degree: "B.Tech(Hons.) in Computer Science & Engineering",
  years: "2016 – 2020",
  cgpa: "8.61"
};

const stats = [
  { label: "Years Experience", value: "4+", icon: Award },
  { label: "Projects Delivered", value: "15+", icon: Code },
  { label: "Technologies", value: "25+", icon: Zap },
  { label: "Team Members Led", value: "8+", icon: Users }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 100], [0, -50]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'skills', 'education', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
        style={{ y }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="text-2xl font-bold text-gray-900"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              AG
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'experience', 'skills', 'education', 'testimonials', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === section 
                      ? 'text-blue-600 border-b-2 border-blue-600' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
              
              {/* Theme Toggle */}
              <div className="ml-4">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

                      {/* Mobile Navigation */}
            {isMenuOpen && (
              <motion.div
                className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <div className="px-4 py-4 space-y-3">
                  {['home', 'experience', 'skills', 'education', 'testimonials', 'contact'].map((section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        activeSection === section 
                          ? 'text-blue-600 bg-blue-50' 
                          : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                  ))}
                  
                  {/* Mobile Theme Toggle */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600">Theme</span>
                      <ThemeToggle />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-indigo-600/5"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium mb-8 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Code className="w-4 h-4 mr-2" />
              Senior Software Engineer
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Arjun Govindan
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Building scalable systems and leading technical initiatives at the intersection of 
              <span className="font-semibold text-blue-600"> backend engineering</span> and 
              <span className="font-semibold text-purple-600"> cloud architecture</span>
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-gray-600">
              <span>📍 Bangalore, India</span>
              <span>📧 arjungovindan98@gmail.com</span>
              <span>📱 +91 8281890308</span>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4 mb-12">
              <motion.a
                href="https://linkedin.com/in/arjungovindan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://github.com/arjgov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-6 h-6" />
              </motion.a>
            </div>

            {/* Expertise Tags */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <motion.div
                className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Database className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 font-medium">Backend Focus</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Server className="w-5 h-5 text-green-600" />
                <span className="text-gray-700 font-medium">Systems Design</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Globe className="w-5 h-5 text-purple-600" />
                <span className="text-gray-700 font-medium">Fullstack</span>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.a
                href="#experience"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.a>
              <motion.a
                href="/Arjun_Govindan_SDE_2_May_2025.pdf"
                download
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 shadow-sm hover:bg-gray-50 transition-all duration-300 text-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-3">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              My journey building scalable systems and leading technical initiatives across multiple domains.
            </p>
          </motion.div>

          <motion.div
            className="space-y-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {experience.map((job, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={fadeInUp}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                    <div className="flex items-center space-x-4">
                      <motion.div 
                        className="text-4xl"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {job.logo}
                      </motion.div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">{job.company}</h3>
                        <p className="text-xl text-gray-600 mb-1">{job.role}</p>
                        <p className="text-lg text-gray-500">{job.years}</p>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <motion.span 
                        className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {job.years}
                      </motion.span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {job.projects.map((project, pIndex) => (
                      <motion.div
                        key={pIndex}
                        className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300"
                        whileHover={{ y: -4, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <h4 className="text-xl font-semibold text-gray-900">{project.name}</h4>
                          <ExternalLink className="w-5 h-5 text-gray-400" />
                        </div>
                        <p className="text-gray-600 mb-4 text-lg">{project.summary}</p>
                        <p className="text-gray-700 mb-4">{project.details}</p>
                        
                        {project.impact && (
                          <div className="mb-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                              <Star className="w-4 h-4 mr-1" />
                              {project.impact}
                            </span>
                          </div>
                        )}
                        
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, tIndex) => (
                            <span
                              key={tIndex}
                              className="px-3 py-1 bg-white text-gray-700 text-sm rounded-md border border-gray-200 font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4 capitalize">
                  {category}
                </h3>
                                 <div className="space-y-3">
                   {skillList.map((skill, skillIndex) => (
                     <motion.div
                       key={skillIndex}
                       className="space-y-1"
                       initial={{ opacity: 0, x: -10 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       transition={{ delay: skillIndex * 0.05, duration: 0.3 }}
                       viewport={{ once: true }}
                     >
                       <div className="flex items-center justify-between">
                         <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                         <span className="text-xs text-gray-500">{skill.proficiency}%</span>
                       </div>
                       <div className="w-full bg-gray-200 rounded-full h-2">
                         <motion.div
                           className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                           initial={{ width: 0 }}
                           whileInView={{ width: `${skill.proficiency}%` }}
                           transition={{ delay: skillIndex * 0.1, duration: 1, ease: "easeOut" }}
                           viewport={{ once: true }}
                         />
                       </div>
                     </motion.div>
                   ))}
                 </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              My academic foundation in computer science and engineering.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{education.college}</h3>
              <p className="text-xl text-gray-600 mb-2">{education.degree}</p>
              <p className="text-lg text-gray-500 mb-4">{education.years}</p>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-semibold">
                CGPA: {education.cgpa}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What People Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Feedback from colleagues and managers about my work and collaboration.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              {
                quote: "Arjun consistently delivers high-quality code and demonstrates excellent problem-solving skills. His attention to detail and commitment to best practices make him an invaluable team member.",
                author: "Senior Engineering Manager",
                company: "Quarks"
              },
              {
                quote: "Arjun's ability to architect scalable solutions and mentor junior developers has significantly contributed to our team's success. He's a true technical leader.",
                author: "Tech Lead",
                company: "Kyro"
              },
              {
                quote: "Working with Arjun has been a pleasure. His strong backend expertise and cloud knowledge have helped us build robust, production-ready systems.",
                author: "Product Manager",
                company: "Cognizant"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
              >
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation.
            </p>
            
            <motion.div
              className="flex flex-wrap justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="mailto:arjungovindan98@gmail.com"
                className="flex items-center space-x-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                <span>Email Me</span>
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/arjungovindan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </motion.a>
              
              <motion.a
                href="https://github.com/arjgov"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-8 py-4 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition-colors shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </motion.a>
            </motion.div>

            <motion.div
              className="mt-12 pt-8 border-t border-gray-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-400 text-sm">
                Available for full-time opportunities and interesting freelance projects
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Floating Action Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-40"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.a
          href="/Arjun_Govindan_SDE_2_May_2025.pdf"
          download
          className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          title="Download Resume"
        >
          <Download className="w-6 h-6" />
        </motion.a>
      </motion.div>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-400 text-sm">
            © 2024 Arjun Govindan. Built with Next.js, Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </footer>
    </div>
  );
}
