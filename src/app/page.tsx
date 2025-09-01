"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, easeOut } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Menu,
  X,
  ChevronDown,
  Award,
  Users,
  Zap,
  FileText,
  Calendar,
  Code
} from "lucide-react";
import { useState } from "react";
import Prism from "@/components/Prism";
import { Timeline } from "@/components/Timeline";
import CountUp from "@/components/CountUp";
import SkillsChromaGrid from "@/components/SkillsChromaGrid";
import { MainMenusGradientCard } from "@/components/MainMenusGradientCard";
import LottieAnimation from "@/components/LottieAnimation";
import { LampContainer, LampDemo } from "@/components/ui/lamp";
import ProfileCard from "@/components/ProfileCard";
import { BookingSection } from "@/components/BookingSection";
import { BookingModal } from "@/components/BookingModal";
import { BookingButton } from "@/components/BookingButton";


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

// Your actual skills organized by category with Devicon classes and ChromaGrid styling
const skillsData = [
  // Languages
  { name: "Python", category: "Language", icon: "devicon-python-plain", borderColor: "#3776AB", gradient: "linear-gradient(135deg, #3776AB20, #000)", iconColor: "#3776AB" },
  { name: "C++", category: "Language", icon: "devicon-cplusplus-plain", borderColor: "#00599C", gradient: "linear-gradient(135deg, #00599C20, #000)", iconColor: "#00599C" },
  { name: "Java", category: "Language", icon: "devicon-java-plain", borderColor: "#ED8B00", gradient: "linear-gradient(135deg, #ED8B0020, #000)", iconColor: "#ED8B00" },
  { name: "Typescript", category: "Language", icon: "devicon-typescript-plain", borderColor: "#3178C6", gradient: "linear-gradient(135deg, #3178C620, #000)", iconColor: "#3178C6" },
  { name: "Bicep", category: "Language", icon: "devicon-azure-plain", borderColor: "#0089D6", gradient: "linear-gradient(135deg, #0089D620, #000)", iconColor: "#0089D6" },
  
  // Technologies
  { name: "Azure", category: "Cloud", icon: "devicon-azure-plain", borderColor: "#0089D6", gradient: "linear-gradient(135deg, #0089D620, #000)", iconColor: "#0089D6" },
  { name: "GCP", category: "Cloud", icon: "devicon-googlecloud-plain", borderColor: "#4285F4", gradient: "linear-gradient(135deg, #4285F420, #000)", iconColor: "#4285F4" },
  { name: "MongoDB", category: "Database", icon: "devicon-mongodb-plain", borderColor: "#47A248", gradient: "linear-gradient(135deg, #47A24820, #000)", iconColor: "#47A248" },
  { name: "MySQL", category: "Database", icon: "devicon-mysql-plain", borderColor: "#4479A1", gradient: "linear-gradient(135deg, #4479A120, #000)", iconColor: "#4479A1" },
  { name: "PostgreSQL", category: "Database", icon: "devicon-postgresql-plain", borderColor: "#336791", gradient: "linear-gradient(135deg, #33679120, #000)", iconColor: "#336791" },
  { name: "Docker", category: "DevOps", icon: "devicon-docker-plain", borderColor: "#2496ED", gradient: "linear-gradient(135deg, #2496ED20, #000)", iconColor: "#2496ED" },
  { name: "Kubernetes", category: "DevOps", icon: "devicon-kubernetes-plain", borderColor: "#326CE5", gradient: "linear-gradient(135deg, #326CE520, #000)", iconColor: "#326CE5" },
  { name: "Git", category: "Version Control", icon: "devicon-git-plain", borderColor: "#F05032", gradient: "linear-gradient(135deg, #F0503220, #000)", iconColor: "#F05032" },
  { name: "REST APIs", category: "API", icon: "devicon-javascript-plain", borderColor: "#F7DF1E", gradient: "linear-gradient(135deg, #F7DF1E20, #000)", iconColor: "#F7DF1E" },
  { name: "Jinja", category: "Template", icon: "devicon-python-plain", borderColor: "#B41717", gradient: "linear-gradient(135deg, #B4171720, #000)", iconColor: "#B41717" },
  { name: "Redis", category: "Cache", icon: "devicon-redis-plain", borderColor: "#DC382D", gradient: "linear-gradient(135deg, #DC382D20, #000)", iconColor: "#DC382D" },
  { name: "Auth", category: "Security", icon: "devicon-javascript-plain", borderColor: "#FFD700", gradient: "linear-gradient(135deg, #FFD70020, #000)", iconColor: "#FFD700" },
  
  // Frameworks
  { name: "FastAPI", category: "Framework", icon: "devicon-python-plain", borderColor: "#059669", gradient: "linear-gradient(135deg, #05966920, #000)", iconColor: "#059669" },
  { name: "Django", category: "Framework", icon: "devicon-django-plain", borderColor: "#FFFFFF", gradient: "linear-gradient(135deg, #FFFFFF20, #000)", iconColor: "#FFFFFF" },
  { name: "Flask", category: "Framework", icon: "devicon-flask-plain", borderColor: "#FFFFFF", gradient: "linear-gradient(135deg, #FFFFFF20, #000)", iconColor: "#FFFFFF" },
  { name: "Next.js", category: "Framework", icon: "devicon-nextjs-plain", borderColor: "#FFFFFF", gradient: "linear-gradient(135deg, #FFFFFF20, #000)", iconColor: "#FFFFFF" },
  { name: "Node.js", category: "Framework", icon: "devicon-nodejs-plain", borderColor: "#339933", gradient: "linear-gradient(135deg, #33993320, #000)", iconColor: "#339933" },
  { name: "React", category: "Framework", icon: "devicon-react-original", borderColor: "#61DAFB", gradient: "linear-gradient(135deg, #61DAFB20, #000)", iconColor: "#61DAFB" },
  { name: "Express", category: "Framework", icon: "devicon-express-original", borderColor: "#FFFFFF", gradient: "linear-gradient(135deg, #FFFFFF20, #000)", iconColor: "#FFFFFF" },
  { name: "Pytest", category: "Testing", icon: "devicon-python-plain", borderColor: "#0A9EDC", gradient: "linear-gradient(135deg, #0A9EDC20, #000)", iconColor: "#0A9EDC" }
];





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
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  
  // Scroll-based animation for download button
  const { scrollY } = useScroll();
  const buttonWidth = useTransform(scrollY, [0, 300], [160, 64], { ease: easeOut });
  const buttonHeight = useTransform(scrollY, [0, 300], [48, 64], { ease: easeOut });
  const buttonPadding = useTransform(scrollY, [0, 300], [24, 0], { ease: easeOut });
  const textOpacity = useTransform(scrollY, [0, 200], [1, 0], { ease: easeOut });
  const textMaxWidth = useTransform(scrollY, [0, 200], [100, 0], { ease: easeOut });
  const iconSize = useTransform(scrollY, [0, 300], [20, 24], { ease: easeOut });
  const iconMargin = useTransform(scrollY, [0, 300], [8, 0], { ease: easeOut });



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
        className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md"
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
              {['home', 'experience', 'projects', 'skills', 'booking', 'about'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-sm font-medium transition-colors duration-200 text-[#a9a9a9] hover:text-white"
                >
                  {section === 'home' ? 'Home' : 
                   section === 'experience' ? 'Experience' :
                   section === 'projects' ? 'Projects' :
                   section === 'skills' ? 'Skills' :
                   section === 'booking' ? 'Book Meeting' :
                   'About Me'}
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
                className="md:hidden absolute top-full left-0 right-0 bg-black shadow-lg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <div className="px-4 py-4 space-y-3">
                  {['home', 'experience', 'projects', 'skills', 'booking', 'about'].map((section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors text-[#a9a9a9] hover:text-white hover:bg-[#181818]"
                    >
                      {section === 'home' ? 'Home' : 
                       section === 'experience' ? 'Experience' :
                       section === 'projects' ? 'Projects' :
                       section === 'skills' ? 'Skills' :
                       section === 'booking' ? 'Book Meeting' :
                       'About Me'}
                    </button>
                  ))}
                  

                </div>
              </motion.div>
            )}
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Prism Background */}
        <div className="absolute inset-0 z-0">
          <Prism
            animationType="hover"
            timeScale={0.5}
            height={3.5}
            baseWidth={5.5}
            scale={3.6}
            hueShift={0}
            colorFrequency={1}
            noise={0}
            glow={1}
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Heading with staggered animation */}
          <motion.h1 
            className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Hey, I&apos;m Arjun.
          </motion.h1>
          
          {/* Subtitle with delay */}
          <motion.p 
            className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            A full-stack engineer who makes sure &ldquo;it works on my machine&rdquo; actually works on your machine.
          </motion.p>
          
          {/* CTA Links with staggered animation */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <motion.button
              onClick={() => setIsBookingModalOpen(true)}
              className="flex items-center space-x-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors shadow-lg border border-[rgba(255,255,255,0.1)]"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-5 h-5" />
              <span>Book a Meeting</span>
            </motion.button>
            <motion.a
              href="#experience"
              className="flex items-center space-x-2 px-8 py-4 bg-[#181818] text-white font-semibold rounded-full hover:bg-white hover:text-black transition-colors shadow-lg border border-[rgba(255,255,255,0.1)]"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View My Work →</span>
            </motion.a>
            <motion.a
              href="#about"
              className="flex items-center space-x-2 px-8 py-4 bg-[#181818] text-white font-semibold rounded-full hover:bg-white hover:text-black transition-colors shadow-lg border border-[rgba(255,255,255,0.1)]"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get In Touch →</span>
            </motion.a>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            animate={{ rotate: [0, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
        

      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black">
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
                <div className="text-3xl font-bold text-white mb-1">
                  <CountUp
                    from={0}
                    to={parseInt(stat.value.replace('+', ''))}
                    duration={2}
                    delay={index * 0.2}
                    className="count-up-text"
                  />
                  <span className="text-white">+</span>
                </div>
                <div className="text-sm text-[#a9a9a9]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <Timeline 
          data={[
          {
            title: "Quarks",
            content: (
              <div className="space-y-4">
                <div className="text-white">
                  <h4 className="text-xl font-semibold mb-2">Senior Software Engineer</h4>
                  <p className="text-neutral-300 mb-3">Sep 2024 – Present</p>
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    Building scalable recommendation systems and infrastructure. 
                    Delivered Shop the Look Experience with &lt;100ms latency, 
                    dynamic product bundles, and V2 Rank APIs.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {["FastAPI", "PostgreSQL", "Redis", "GCP", "Docker", "Kubernetes"].map((tech) => (
                      <span key={tech} className="text-xs text-white bg-neutral-800 px-2 py-1 rounded-full border border-neutral-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          },
          {
            title: "Kyro",
            content: (
              <div className="space-y-4">
                <div className="text-white">
                  <h4 className="text-xl font-semibold mb-2">Software Engineer</h4>
                  <p className="text-neutral-300 mb-3">May 2022 – Sep 2024</p>
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    Developed microservices for project management, forms experience, 
                    and real-time event streaming. Processed 150K+ reports with 98% test coverage.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {["FastAPI", "React.js", "MongoDB", "Azure", "Kubernetes"].map((tech) => (
                      <span key={tech} className="text-xs text-white bg-neutral-800 px-2 py-1 rounded-full border border-neutral-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          },
          {
            title: "Cognizant",
            content: (
              <div className="space-y-4">
                <div className="text-white">
                  <h4 className="text-xl font-semibold mb-2">Programmer Analyst</h4>
                  <p className="text-neutral-300 mb-3">Dec 2020 – Apr 2022</p>
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    Built ETL pipelines for data warehousing and RESTful APIs for internal metrics. 
                    Streamlined data analysis workflows across the organization.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {["Django", "Flask", "SQL", "AWS", "React"].map((tech) => (
                      <span key={tech} className="text-xs text-white bg-neutral-800 px-2 py-1 rounded-full border border-neutral-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          }
        ]}
        />
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
          <motion.div
            className="text-left mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl mb-4 text-white max-w-4xl">
              Featured Projects
            </h2>
            <p className="text-neutral-300 text-sm md:text-base max-w-sm">
              Some of my recent work that showcases my skills and passion for building great software.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <MainMenusGradientCard
                title="Power Picker"
                description="Pick your power, perfectly. The perfect tool for picking your next PSU. Compare official tier ratings, analyze price trends, and get simple recommendations to power your PC with confidence."
                withArrow={true}
                circleSize={300}
                githubLink="https://github.com/arjgov/power-picker"
                liveLink="https://power-picker.vercel.app"
              >
                <div className="flex items-center justify-center h-full w-full">
                  <LottieAnimation
                    src="https://lottie.host/3757635c-fb73-4873-9d5c-aede48c9e577/8WcbWUJ5Wu.lottie"
                    className="w-full h-full"
                    loop={true}
                    autoplay={true}
                    hoverToPlay={false}
                  />
                </div>
              </MainMenusGradientCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <MainMenusGradientCard
                title="OmniScribe AI"
                description="The content co-pilot for e-commerce. Simply upload your product photos and title, and our platform automatically generates everything you need to sell online."
                withArrow={true}
                circleSize={300}
                githubLink="https://github.com/arjgov/omniscribe-ai"
                liveLink="https://omniscribe-ai.vercel.app"
              >
                <div className="flex items-center justify-center h-full w-full">
                  <LottieAnimation
                    src="https://lottie.host/551d9f86-96ba-4335-81eb-f842b28e3705/yi57Ov8czJ.lottie"
                    className="w-full h-full"
                    loop={true}
                    autoplay={true}
                    hoverToPlay={false}
                  />
                </div>
              </MainMenusGradientCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <MainMenusGradientCard
                title="StudyBuddy"
                description="Find a study partner for anything you want to learn. Connect with like-minded learners, create study groups, track progress together, and achieve your learning goals through collaborative studying."
                withArrow={true}
                circleSize={300}
                githubLink="https://github.com/arjgov/studybuddy"
                liveLink="https://studybuddy.vercel.app"
              >
                <div className="flex items-center justify-center h-full w-full">
                  <LottieAnimation
                    src="https://lottie.host/8974bdfd-a60c-467e-805b-4ddf914262b3/8BSOjB4Qln.lottie"
                    className="w-full h-full"
                    loop={true}
                    autoplay={true}
                    hoverToPlay={false}
                  />
                </div>
              </MainMenusGradientCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
          <motion.div
            className="text-left mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl mb-4 text-white max-w-4xl">
              Skills
            </h2>
            <p className="text-neutral-300 text-sm md:text-base max-w-sm">
              A comprehensive toolkit for building modern, scalable applications.
            </p>
          </motion.div>

          <motion.div
            className="min-h-[200px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SkillsChromaGrid 
              skills={skillsData}
            />
          </motion.div>
        </div>
      </section>

      {/* Booking Section */}
      <BookingSection />

      {/* About Me Section */}
      <section id="about" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Mobile First Column - Profile Card, Desktop Second Column */}
            <motion.div
              className="order-1 lg:order-2 flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
                             <ProfileCard
                 name="Arjun"
                 title=""
                 handle=""
                 status=""
                 contactText=""
                 avatarUrl="/profile_pic.jpeg"
                 showUserInfo={false}
                 enableTilt={true}
                 enableMobileTilt={true}
                 mobileTiltSensitivity={3}
                 onContactClick={() => {
                   const element = document.getElementById('about');
                   if (element) {
                     element.scrollIntoView({ behavior: 'smooth' });
                   }
                 }}
               />
            </motion.div>

            {/* Mobile Second Column - About Me Content, Desktop First Column */}
            <motion.div
              className="order-2 lg:order-1 text-left"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-4xl mb-12 text-white max-w-4xl">About Me</h2>
              <p className="text-neutral-300 text-sm md:text-base max-w-2xl mb-12">
               Full-stack engineer. I love building two things: clean, scalable software and a Steam library I&apos;ll never have time to finish. I&apos;m also a lifelong Spurs fan, which has taught me more about resilience and debugging hopeless situations than any tech job ever could.
              </p>
              
              <motion.div
                className="flex flex-wrap gap-6 mb-16"
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
                  className="flex items-center space-x-2 px-8 py-4 bg-[#181818] text-white font-semibold rounded-full hover:bg-white hover:text-black transition-colors shadow-lg border border-[rgba(255,255,255,0.1)]"
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
                
                {/* TODO: Decide whether to add Buy Me a Coffee link later
                <motion.a
                  href="https://buymeacoffee.com/arjungovindan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-8 py-4 bg-[#181818] text-white font-semibold rounded-full hover:bg-white hover:text-black transition-colors shadow-lg border border-[rgba(255,255,255,0.1)]"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xl">☕</span>
                  <span>Buy Me a Coffee</span>
                </motion.a>
                */}
              </motion.div>

              <motion.div
                className="mt-16 pt-8 border-t border-[rgba(255,255,255,0.1)]"
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

            
          </motion.div>
        </div>
      </section>

      {/* Floating Action Button */}
      <motion.div
        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-40"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
      >
        <motion.a
          href="/api/resume"
          className="flex items-center justify-center bg-white text-black font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-500 ease-out"
          style={{
            width: buttonWidth,
            height: buttonHeight,
            paddingLeft: buttonPadding,
            paddingRight: buttonPadding,
          }}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
          title="Download Resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            style={{
              width: iconSize,
              height: iconSize,
              marginRight: iconMargin,
            }}
            className="flex items-center justify-center"
          >
            <FileText className="text-black w-full h-full" />
          </motion.div>
          <motion.span
            style={{ opacity: textOpacity, maxWidth: textMaxWidth }}
            className="whitespace-nowrap text-black font-medium overflow-hidden"
          >
            Resume
          </motion.span>
        </motion.a>
      </motion.div>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />

      {/* Footer */}
      <footer className="py-8 bg-black text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#a9a9a9] text-sm">
            © 2025 Arjun Govindan. Built with Next.js, Tailwind CSS, and Reactbits
          </p>
        </div>
      </footer>
    </div>
  );
}
