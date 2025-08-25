"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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
    <div className="min-h-screen bg-black">
      {/* Navigation Header */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/10 shadow-lg"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="text-2xl font-bold text-white"
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
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === section 
                      ? 'text-white border-b-2 border-white font-semibold' 
                      : 'text-[#a9a9a9] hover:text-white'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
              

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
                className="md:hidden absolute top-full left-0 right-0 bg-black shadow-lg border-b border-white/10"
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
                          ? 'text-white bg-[#181818]' 
                          : 'text-[#a9a9a9] hover:text-white hover:bg-[#181818]'
                      }`}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                  ))}
                  

                </div>
              </motion.div>
            )}
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              Systems Engineer
            </h1>
            <p className="text-xl md:text-2xl text-white mb-12 max-w-2xl mx-auto leading-relaxed">
              I write fast backend systems, build my own tools, and automate tasks that are tolerable for others.
            </p>
            
            {/* CTA Links */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.a
                href="#experience"
                className="text-white text-lg hover:opacity-80 transition-opacity"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work →
              </motion.a>
              <motion.a
                href="#contact"
                className="text-white text-lg hover:opacity-80 transition-opacity"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch →
              </motion.a>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black border-b border-white/10">
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
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-[#a9a9a9]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Professional Experience</h2>
            <p className="text-xl text-[#a9a9a9] max-w-2xl mx-auto">
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
                <div className="bg-[#181818] rounded-2xl p-8 shadow-lg border border-[rgba(255,255,255,0.1)] hover:shadow-xl transition-all duration-300">
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
                        <h3 className="text-3xl font-bold text-white mb-2">{job.company}</h3>
                        <p className="text-xl text-[#a9a9a9] mb-1">{job.role}</p>
                        <p className="text-lg text-[#a9a9a9]">{job.years}</p>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <motion.span 
                        className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[#181818] text-white border border-[rgba(255,255,255,0.1)]"
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
                        className="bg-[#181818] rounded-xl p-6 border border-white/10 hover:border-white transition-all duration-300"
                        whileHover={{ y: -4, boxShadow: "0 10px 25px rgba(0,0,0,0.3)" }}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <h4 className="text-xl font-semibold text-white">{project.name}</h4>
                          <ExternalLink className="w-5 h-5 text-[#a9a9a9]" />
                        </div>
                        <p className="text-[#a9a9a9] mb-4 text-lg">{project.summary}</p>
                        <p className="text-white mb-4">{project.details}</p>
                        
                        {project.impact && (
                          <div className="mb-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#181818] text-white border border-[rgba(255,255,255,0.1)]">
                              <Star className="w-4 h-4 mr-1" />
                              {project.impact}
                            </span>
                          </div>
                        )}
                        
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, tIndex) => (
                            <span
                              key={tIndex}
                              className="px-3 py-1 bg-[#181818] text-white text-sm rounded-md border border-[rgba(255,255,255,0.1)] font-medium"
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
      <section id="skills" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
            <p className="text-xl text-[#a9a9a9] max-w-2xl mx-auto">
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
                className="bg-[#181818] rounded-xl p-6 border border-white/10 hover:border-white transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, boxShadow: "0 10px 25px rgba(0,0,0,0.3)" }}
              >
                <h3 className="text-xl font-semibold text-white mb-4 capitalize">
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
                          <span className="text-sm font-medium text-white">{skill.name}</span>
                          <span className="text-xs text-[#a9a9a9]">{skill.proficiency}%</span>
                        </div>
                        <div className="w-full bg-[#181818] rounded-full h-2">
                          <motion.div
                            className="bg-white h-2 rounded-full"
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
      <section id="education" className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
            <p className="text-xl text-[#a9a9a9] max-w-2xl mx-auto">
              My academic foundation in computer science and engineering.
            </p>
          </motion.div>

          <motion.div
            className="bg-[#181818] rounded-2xl p-8 shadow-lg border border-[rgba(255,255,255,0.1)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-white mb-2">{education.college}</h3>
              <p className="text-xl text-[#a9a9a9] mb-2">{education.degree}</p>
              <p className="text-lg text-[#a9a9a9] mb-4">{education.years}</p>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#181818] text-white font-semibold border border-[rgba(255,255,255,0.1)]">
                CGPA: {education.cgpa}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">What People Say</h2>
            <p className="text-xl text-[#a9a9a9] max-w-2xl mx-auto">
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
                className="bg-[#181818] rounded-xl p-6 border border-[rgba(255,255,255,0.1)] hover:border-white transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, boxShadow: "0 10px 25px rgba(0,0,0,0.3)" }}
              >
                <div className="mb-4">
                  <div className="flex text-white mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-white italic">"{testimonial.quote}"</p>
                </div>
                <div className="border-t border-[rgba(255,255,255,0.1)] pt-4">
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-[#a9a9a9]">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
            <p className="text-xl text-[#a9a9a9] mb-12 max-w-2xl mx-auto">
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
                className="flex items-center space-x-2 px-8 py-4 bg-[#181818] text-white font-semibold rounded-full hover:bg-white hover:text-black transition-colors shadow-lg border border-[rgba(255,255,255,0.1)]"
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
                className="flex items-center space-x-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
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
                className="flex items-center space-x-2 px-8 py-4 bg-[#181818] text-white font-semibold rounded-full hover:bg-white hover:text-black transition-colors shadow-lg border border-[rgba(255,255,255,0.1)]"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </motion.a>
            </motion.div>

            <motion.div
              className="mt-12 pt-8 border-t border-[rgba(255,255,255,0.1)]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-[#a9a9a9] text-sm">
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
          href="/api/resume"
          className="flex items-center justify-center w-16 h-16 bg-white text-black rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          title="Download Resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Download className="w-6 h-6" />
        </motion.a>
      </motion.div>

      {/* Footer */}
      <footer className="py-8 bg-black text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#a9a9a9] text-sm">
            © 2024 Arjun Govindan. Built with Next.js, Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </footer>
    </div>
  );
}
