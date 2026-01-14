"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Download, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Database, Globe, Zap, Award, Star, Sun, Moon, Laptop, Cloud, Shield, Monitor } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { useTheme } from "next-themes"
import DeveloperLogo from "@/components/developer-logo" 

export default function Portfolio() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const [currentTime, setCurrentTime] = useState<string | null>(null)
  const [greeting, setGreeting] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const updateTime = () => {
      const now = new Date()
      const hour = now.getHours()

      if (hour < 12) setGreeting("Good Morning")
      else if (hour < 17) setGreeting("Good Afternoon")
      else setGreeting("Good Evening")

      setCurrentTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }))
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [mounted])

  useEffect(() => {
    if (!mounted) return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mounted])

  const skills = [
    { name: "C/C++", icon: Code, category: "Programming" },
    { name: "Python",  icon: Code, category: "Programming" },
    { name: "JavaScript",  icon: Code, category: "Programming" },
    { name: "PHP",  icon: Code, category: "Programming" },
    { name: "React.js",  icon: Globe, category: "Web" },
    { name: "Express.js",  icon: Globe, category: "Web" },
    { name: "HTML/CSS",  icon: Globe, category: "Web" },
    { name: "MongoDB",  icon: Database, category: "Database" },
    { name: "SQL/MySQL",  icon: Database, category: "Database" },
    { name: "Git/GitHub",  icon: Code, category: "Tools" },
    { name: "Jenkins (CI/CD)",  icon: Zap, category: "Tools" },
    { name: "MATLAB",  icon: Code, category: "Tools" },
    { name: "Excel",  icon: Database, category: "Tools" },
    { name: "Data Structures & Algorithms",  icon: Database, category: "Core" },
    { name: "Machine Learning", icon: Zap, category: "AI/ML" },
  ]

  const isDayMode = theme === "light"

  const skillCategories = {
    Programming: {
      color: isDayMode ? "from-blue-600 to-cyan-600" : "from-blue-500 to-cyan-500",
      icon: Code,
    },
    Web: {
      color: isDayMode ? "from-green-600 to-emerald-600" : "from-green-500 to-emerald-500",
      icon: Globe,
    },
    Database: {
      color: isDayMode ? "from-purple-600 to-violet-600" : "from-purple-500 to-violet-500",
      icon: Database,
    },
    Tools: {
      color: isDayMode ? "from-orange-600 to-red-600" : "from-orange-500 to-red-500",
      icon: Zap,
    },
    Core: {
      color: isDayMode ? "from-pink-600 to-rose-600" : "from-pink-500 to-rose-500",
      icon: Award,
    },
    "AI/ML": {
      color: isDayMode ? "from-indigo-600 to-purple-600" : "from-indigo-500 to-purple-500",
      icon: Star,
    },
  }

  const projects = [
    { 
      title: "AI-Powered Information Retrieval Agent",
      description: "Automated web data extraction tool using AI for entity-based queries and real-time data processing",
      tech: ["Python", "OpenAI GPT", "Streamlit", "Google Sheets API", "ScraperAPI"],
      status: "Completed",
      impact: "Automated data extraction workflows",
      date: "Aug 2022 - Sep 2022",
      githubUrl: "https://github.com/pmi0603/ai_agent_project",
      highlights: [
        "CSV/Google Sheets integration for structured data input",
        "OpenAI GPT for intelligent entity-based queries",
        "Interactive Streamlit dashboard with error handling",
      ],
    },
    {
      title: "Multilingual Audio-to-Text & Translation Tool",
      description: "Advanced NLP tool for audio transcription and translation using state-of-the-art AI models",
      tech: ["Python", "PyTorch", "Whisper AI", "Google Translate API", "FFmpeg"],
      status: "Completed",
      impact: "Enhanced multilingual communication",
      date: "Oct 2024",
      githubUrl: "https://github.com/pmi0603/Audio-Translator",
      highlights: [
        "Speech-to-Text with Whisper model for multilingual transcription",
        "Automatic language detection and neural machine translation",
        "Handles semantic nuances across various languages",
      ],
    },
    {
      title: "Task Manager",
      description: "Web based application to add/update/delete(CRUD operations), storing task in database ",
      tech: ["Reactjs", "Nodejs", "MongoDB", "JavaScript"],
      status: "Completed",
      impact: "Strengthen the backend and gain hand on database working",
      date: "Feb 2023 - Apr 2023",
      githubUrl: "https://github.com/pmi0603/Task_Manager",
      highlights: [
        "Full-stack task management system with React frontend and Express–MongoDB backend supporting real-time CRUD operations",
        "Responsive card-based UI with clean layout, edit/delete actions, and overflow-safe task descriptions",
        "RESTful API integration using Axios with proper CORS handling and environment-based configuration",
      ],
    },
    {
      title: "AI Chess Bot",
      description: "Interactive chess application with AI opponent built using React.js and chess algorithms",
      tech: ["React.js", "JavaScript", "Chess.js", "HTML5", "CSS3"],
      status: "Completed",
      impact: "Enhanced frontend & AI integration skills",
      date: "Aug 2023 - Sep 2023",
      githubUrl: "https://github.com/pmi0603/chess",
      highlights: [
        "Human vs Computer gameplay with intelligent AI moves",
        "State management for game flow and board positions",
        "Error boundary implementation for seamless UX",
      ],
    },
    {
      title: "Image Feature Extraction & OCR",
      description: "ML-powered tool for extracting text from images and predicting entity values using OCR",
      tech: ["Python", "Scikit-learn", "Tesseract OCR", "Pandas", "NumPy"],
      status: "In Development",
      impact: "Automated document processing",
      date: "Present",
      highlights: [
        "OCR text extraction from image URLs",
        "RandomForest ML model for entity prediction",
        "Automated CSV export for business analysis",
      ],
    },
  ]

  const certificationsAndAchievements = [
    {
      icon: Cloud,
      title: "AZ900 Fundamental",
      description: "Professional certification in cloud computing fundamentals",
      type: "certification",
      link: " https://learn.microsoft.com/en-us/users/prashantmishra-7736/credentials/d0a71d00ebbce9cf",
      issuer: "Microsoft",
    },    {
      icon: Cloud,
      title: "Google Cloud Computing Foundation",
      description: "Professional certification in cloud computing fundamentals",
      type: "certification",
      link: "https://www.cloudskillsboost.google/public_profiles/cf69f228-cf18-46c6-a7ca-dae0338002e2",
      issuer: "Google Cloud",
    },
    {
      icon: Shield,
      title: "Google Cybersecurity Professional",
      description: "Comprehensive cybersecurity certification program",
      type: "certification",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/064D9ADMTVZG",
      issuer: "Google via Coursera",
    },

  ]

  const titles = ["Prashant", "Developer", "Problem Solver", "Tech Enthusiast"]
  const [displayedText, setDisplayedText] = useState("")
  const [titleIndex, setTitleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const currentTitle = titles[titleIndex]

    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, 2000)
      return () => clearTimeout(pauseTimeout)
    }

    if (!isDeleting && charIndex < currentTitle.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentTitle.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, 150)
      return () => clearTimeout(timeout)
    } else if (!isDeleting && charIndex === currentTitle.length) {
      setIsPaused(true)
    } else if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentTitle.slice(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      }, 100)
      return () => clearTimeout(timeout)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setTitleIndex((titleIndex + 1) % titles.length)
    }
  }, [charIndex, isDeleting, titleIndex, isPaused, titles])

  const themeStyles = {
    background: isDayMode
      ? "bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100"
      : "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900",
    text: isDayMode ? "text-gray-900" : "text-white",
    cardBg: isDayMode ? "bg-white/80" : "bg-white/5",
    cardBorder: isDayMode ? "border-gray-200/50" : "border-white/10",
    cardHover: isDayMode ? "hover:bg-white/90" : "hover:bg-white/10",
    navBg: isDayMode ? "bg-white/80" : "bg-black/20",
    navBorder: isDayMode ? "border-gray-200/50" : "border-white/10",
  }

  return (
    <div
      className={`min-h-screen ${themeStyles.background} ${themeStyles.text} overflow-hidden relative transition-all duration-1000`}
    >
      {/* Theme Toggle Button */}
      <motion.div
        className="fixed top-20 right-4 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Button
          onClick={() => setTheme(isDayMode ? "dark" : "light")}
          className={`w-14 h-14 rounded-full ${isDayMode
              ? "bg-gradient-to-r from-orange-400 to-yellow-500 hover:from-orange-500 hover:to-yellow-600"
              : "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
            } shadow-lg transition-all duration-500 group`}
          size="icon"
        >
          <motion.div animate={{ rotate: isDayMode ? 0 : 180 }} transition={{ duration: 0.5 }}>
            {isDayMode ? <Sun className="w-6 h-6 text-white" /> : <Moon className="w-6 h-6 text-white" />}
          </motion.div>
        </Button>
      </motion.div>

      {/* Mouse Trail Effect - only render if mounted */}
      {mounted && (
        <>
          <div
            className={`fixed w-6 h-6 ${isDayMode ? "bg-orange-400/40" : "bg-pink-500/30"
              } rounded-full pointer-events-none z-50 transition-all duration-300 ease-out`}
            style={{
              left: mousePosition.x - 12,
              top: mousePosition.y - 12,
              transform: "scale(1)",
            }}
          />
          <div
            className={`fixed w-3 h-3 ${isDayMode ? "bg-yellow-400/60" : "bg-purple-400/50"
              } rounded-full pointer-events-none z-50 transition-all duration-500 ease-out`}
            style={{
              left: mousePosition.x - 6,
              top: mousePosition.y - 6,
              transform: "scale(1)",
            }}
          />
        </>
      )}

    
      {mounted && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {isDayMode ? (
           
            <>
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>

             
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-20 bg-gradient-to-t from-transparent to-yellow-300/30"
                  style={{
                    left: "50%",
                    top: "20%",
                    transformOrigin: "bottom center",
                  }}
                  animate={{
                    rotate: [i * 45, i * 45 + 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />
              ))}
            </>
          ) : (
           
            <>
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>

              
              {[...Array(50)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </>
          )}

        
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 ${isDayMode ? "bg-orange-300/40" : "bg-white/20"} rounded-full`}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      )}

      
      <nav
        className={`fixed top-0 left-0 right-0 z-50 ${themeStyles.navBg} backdrop-blur-md border-b ${themeStyles.navBorder} transition-all duration-500`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`text-lg sm:text-xl font-bold bg-gradient-to-r ${isDayMode ? "from-orange-600 to-red-600" : "from-pink-500 to-orange-500"
                } bg-clip-text text-transparent transition-all duration-500`}
            >
              Prashant Mishra
            </motion.div>
            <div className="hidden md:flex space-x-4 lg:space-x-6">
              {[
                { name: "About", href: "#about" },
                { name: "Experience", href: "#experience" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" },
              ].map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`${isDayMode ? "hover:text-orange-600" : "hover:text-pink-400"
                    } transition-colors cursor-pointer text-sm lg:text-base relative group`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 ${isDayMode ? "bg-orange-600" : "bg-pink-400"
                      } transition-all duration-300 group-hover:w-full`}
                  ></span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20 px-4 sm:px-6">
        <div className="container mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8 text-center lg:text-left"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className={`flex items-center justify-center lg:justify-start space-x-2 text-sm ${isDayMode ? "text-gray-600" : "text-gray-300"
                  }`}
              >
                <motion.div
                  className={`w-2 h-2 ${isDayMode ? "bg-green-600" : "bg-green-500"} rounded-full`}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                <span>Available for opportunities</span>
                <span className={`${isDayMode ? "text-orange-600" : "text-pink-400"}`}>
                  • {mounted ? currentTime : "Loading..."}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              >
                <span className={isDayMode ? "text-gray-700" : "text-gray-300"}>
                  Hi, {mounted ? greeting : "there"}
                </span>
                <br />
                <span
                  className={`bg-gradient-to-r ${isDayMode ? "from-orange-600 via-red-600 to-pink-600" : "from-pink-500 via-purple-500 to-orange-500"
                    } bg-clip-text text-transparent`}
                >
                  I'm {displayedText}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                    className={isDayMode ? "text-orange-600" : "text-pink-400"}
                  >
                    |
                  </motion.span>
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-2"
              >
                <h2
                  className={`text-xl sm:text-2xl lg:text-3xl font-semibold ${isDayMode ? "text-gray-800" : "text-gray-200"
                    }`}
                >
                  Full-Stack Developer & DevOps Enthusiast
                </h2>
                <p
                  className={`text-base lg:text-lg ${isDayMode ? "text-gray-600" : "text-gray-400"
                    } max-w-2xl mx-auto lg:mx-0`}
                >
                  Computer Science Graduate from Graphic Era Hill University, passionate about creating scalable web
                  applications and optimizing development workflows.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >

              <Button
                size="lg"
                variant="outline"
                className={`${isDayMode
                    ? "border-orange-400/50 bg-white/50 text-orange-700 hover:bg-white/70 hover:border-orange-500/70"
                    : "border-purple-500/30 bg-slate-800/50 text-purple-200 hover:bg-slate-700/70 hover:border-purple-400/50"
                  } backdrop-blur-sm w-full sm:w-auto relative overflow-hidden group transition-all duration-500`}
                onClick={() => {
                  const link = document.createElement("a")
                  link.href = "/resume/PrashantMishra.pdf"
                  link.download = "PrashantMishra.pdf"
                  link.click()
                }}
              >
                <span
                  className={`absolute inset-0 ${isDayMode ? "bg-orange-500/20" : "bg-purple-600/20"
                    } transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300`}
                ></span>
                <Download className="w-4 h-4 mr-2 relative z-10" />
                <span className="relative z-10">Download Resume</span>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 ${isDayMode ? "text-gray-600" : "text-gray-300"
                }`}
            >
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a
                  href="tel:+917973745181"
                  className={`text-sm lg:text-base ${isDayMode ? "hover:text-orange-600" : "hover:text-pink-400"
                    } transition-colors cursor-pointer`}
                >
                  7973745181
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm lg:text-base">Dehradun, India</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <DeveloperLogo size={300} /> 
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
            <ChevronDown className={`w-6 h-6 ${isDayMode ? "text-gray-600" : "text-gray-400"}`} />
          </motion.div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 lg:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Professional Experience</h2>
            <p className={`${isDayMode ? "text-gray-600" : "text-gray-400"} max-w-2xl mx-auto text-sm lg:text-base`}>

            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Animated Timeline Line */}
              <motion.div
                className={`absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b ${isDayMode ? "from-orange-500 to-red-600" : "from-pink-500 to-purple-600"
                  } transition-all duration-500`}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                style={{ transformOrigin: "top" }}
              />

              {/* Experience Items */}
              <div className="space-y-8 lg:space-y-12">

                {/* HCLTech */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative flex items-start space-x-4 sm:space-x-8"
                >
                  <motion.div
                    className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${isDayMode ? "from-orange-500 to-red-600" : "from-pink-500 to-purple-600"
                      } rounded-full flex items-center justify-center relative z-10 transition-all duration-500`}
                    whileHover={{ scale: 1.1 }}
                    animate={{
                      boxShadow: isDayMode
                        ? ["0 0 0 0 rgba(249, 115, 22, 0.4)", "0 0 0 10px rgba(249, 115, 22, 0)"]
                        : ["0 0 0 0 rgba(236, 72, 153, 0.4)", "0 0 0 10px rgba(236, 72, 153, 0)"],
                    }}
                    transition={{
                      boxShadow: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                    }}
                  >
                    <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </motion.div>
                  <Card
                    className={`flex-1 ${themeStyles.cardBg} ${themeStyles.cardBorder} ${themeStyles.cardHover} transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${isDayMode ? "hover:shadow-orange-500/10" : "hover:shadow-purple-500/10"
                      }`}
                  >
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h3 className={`text-lg sm:text-xl font-bold ${themeStyles.text} mb-1`}>
                            Graduate Engineer Trainee 
                          </h3>
                          <p
                            className={`${isDayMode ? "text-orange-600" : "text-pink-400"
                              } font-semibold text-sm sm:text-base`}
                          >
                            HCLTech
                          </p>
                        </div>
                        <Badge
                          variant="outline"
                          className={`${isDayMode ? "text-orange-700 border-orange-400/50" : "text-purple-300 border-purple-400/50"
                            } w-fit mt-2 lg:mt-0 text-xs sm:text-sm`}
                        >
                          Sep 2025 – Present
                        </Badge>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4
                            className={`font-semibold ${isDayMode ? "text-gray-800" : "text-gray-200"
                              } mb-2 text-sm sm:text-base`}
                          >
                            Operational Responsibilities:
                          </h4>
                          <ul
                            className={`${isDayMode ? "text-gray-700" : "text-gray-300"} space-y-1 text-xs sm:text-sm`}
                          >
                            <li>• Implementing and modifying security policies, NAT, and access rules</li>
                            <li>• Managing and monitoring enterprise firewall infrastructure, performing traffic analysis and log monitoring for threat detection</li>
                            <li>• Handling firewall change requests and incident response, ensuring compliance with security standards and best practices</li>
                          </ul>
                        </div>

                        <div>
                          <h4
                            className={`font-semibold ${isDayMode ? "text-gray-800" : "text-gray-200"
                              } mb-2 text-sm sm:text-base`}
                          >
                            Technologies Used:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {["Palo Alto (PAN-OS)", "Check Point", "Firewall Policy Management, NAT, VPN (IPSec/SSL)", 
                                       "Traffic & Threat Analysis", "Wireshark", "Linux", "ServiceNow"].map((tech) => (

                              <Badge
                                key={tech}
                                variant="secondary"
                                className={`text-xs ${isDayMode ? "bg-gray-200 text-gray-800" : "bg-slate-700 text-gray-300"
                                  }`}
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>


                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                {/* Integrated Maritime Exchange */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative flex items-start space-x-4 sm:space-x-8"
                >
                  <motion.div
                    className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${isDayMode ? "from-orange-500 to-red-600" : "from-pink-500 to-purple-600"
                      } rounded-full flex items-center justify-center relative z-10 transition-all duration-500`}
                    whileHover={{ scale: 1.1 }}
                    animate={{
                      boxShadow: isDayMode
                        ? ["0 0 0 0 rgba(249, 115, 22, 0.4)", "0 0 0 10px rgba(249, 115, 22, 0)"]
                        : ["0 0 0 0 rgba(236, 72, 153, 0.4)", "0 0 0 10px rgba(236, 72, 153, 0)"],
                    }}
                    transition={{
                      boxShadow: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                    }}
                  >
                    <Code className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </motion.div>
                  <Card
                    className={`flex-1 ${themeStyles.cardBg} ${themeStyles.cardBorder} ${themeStyles.cardHover} transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${isDayMode ? "hover:shadow-orange-500/10" : "hover:shadow-purple-500/10"
                      }`}
                  >
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h3 className={`text-lg sm:text-xl font-bold ${themeStyles.text} mb-1`}>
                            Full Stack Developer Intern
                          </h3>
                          <p
                            className={`${isDayMode ? "text-orange-600" : "text-pink-400"
                              } font-semibold text-sm sm:text-base`}
                          >
                            Integrated Maritime Exchange
                          </p>
                        </div>
                        <Badge
                          variant="outline"
                          className={`${isDayMode ? "text-orange-700 border-orange-400/50" : "text-purple-300 border-purple-400/50"
                            } w-fit mt-2 lg:mt-0 text-xs sm:text-sm`}
                        >
                          Dec 2024 – Jan 2025
                        </Badge>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4
                            className={`font-semibold ${isDayMode ? "text-gray-800" : "text-gray-200"
                              } mb-2 text-sm sm:text-base`}
                          >
                            Key Responsibilities:
                          </h4>
                          <ul
                            className={`${isDayMode ? "text-gray-700" : "text-gray-300"} space-y-1 text-xs sm:text-sm`}
                          >
                            <li>• Designed and implemented user interface (UI) for the Voyager Estimator</li>
                            <li>• Developed calculation logic for cost and resource estimations</li>
                            <li>• Ensured responsive design for logistics and supply chain management</li>
                          </ul>
                        </div>

                        <div>
                          <h4
                            className={`font-semibold ${isDayMode ? "text-gray-800" : "text-gray-200"
                              } mb-2 text-sm sm:text-base`}
                          >
                            Technologies Used:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {["HTML", "CSS", "JavaScript", "MySQL", "cPanel"].map((tech) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className={`text-xs ${isDayMode ? "bg-gray-200 text-gray-800" : "bg-slate-700 text-gray-300"
                                  }`}
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div
                          className={`${isDayMode ? "bg-orange-50" : "bg-slate-800/50"} rounded-lg p-3 sm:p-4 border ${isDayMode ? "border-orange-200/50" : "border-purple-500/20"
                            } transition-all duration-500`}
                        >
                          <h4
                            className={`font-semibold ${isDayMode ? "text-green-700" : "text-green-400"
                              } mb-2 text-sm sm:text-base`}
                          >
                            Experience Gained:
                          </h4>
                          <p className={`${isDayMode ? "text-gray-700" : "text-gray-300"} text-xs sm:text-sm`}>
                            Strengthened UI design skills, gained experience in developing calculation-driven features,
                            and improved collaboration skills through work with cross-functional teams.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Technology Business Incubator */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="relative flex items-start space-x-4 sm:space-x-8"
                >
                  <motion.div
                    className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${isDayMode ? "from-blue-500 to-indigo-600" : "from-purple-500 to-blue-600"
                      } rounded-full flex items-center justify-center relative z-10 transition-all duration-500`}
                    whileHover={{ scale: 1.1 }}
                    animate={{
                      boxShadow: isDayMode
                        ? ["0 0 0 0 rgba(59, 130, 246, 0.4)", "0 0 0 10px rgba(59, 130, 246, 0)"]
                        : ["0 0 0 0 rgba(168, 85, 247, 0.4)", "0 0 0 10px rgba(168, 85, 247, 0)"],
                    }}
                    transition={{
                      boxShadow: { duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 },
                    }}
                  >
                    <Database className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </motion.div>
                  <Card
                    className={`flex-1 ${themeStyles.cardBg} ${themeStyles.cardBorder} ${themeStyles.cardHover} transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${isDayMode ? "hover:shadow-blue-500/10" : "hover:shadow-purple-500/10"
                      }`}
                  >
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h3 className={`text-lg sm:text-xl font-bold ${themeStyles.text} mb-1`}>
                            Full Stack Developer Intern
                          </h3>
                          <p
                            className={`${isDayMode ? "text-blue-600" : "text-purple-400"
                              } font-semibold text-sm sm:text-base`}
                          >
                            Technology Business Incubator
                          </p>
                        </div>
                        <Badge
                          variant="outline"
                          className={`${isDayMode ? "text-blue-700 border-blue-400/50" : "text-purple-300 border-purple-400/50"
                            } w-fit mt-2 lg:mt-0 text-xs sm:text-sm`}
                        >
                          July 2024 – Oct 2024
                        </Badge>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4
                            className={`font-semibold ${isDayMode ? "text-gray-800" : "text-gray-200"
                              } mb-2 text-sm sm:text-base`}
                          >
                            Key Responsibilities:
                          </h4>
                          <ul
                            className={`${isDayMode ? "text-gray-700" : "text-gray-300"} space-y-1 text-xs sm:text-sm`}
                          >
                            <li>• Developed a comprehensive task manager application</li>
                            <li>• Implemented CRUD operations using MongoDB</li>
                            <li>• Built scalable web solutions with modern frameworks</li>
                          </ul>
                        </div>

                        <div>
                          <h4
                            className={`font-semibold ${isDayMode ? "text-gray-800" : "text-gray-200"
                              } mb-2 text-sm sm:text-base`}
                          >
                            Technologies Used:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {["React.js", "Node.js", "HTML", "CSS", "JavaScript", "SQL", "MongoDB", "Git"].map(
                              (tech) => (
                                <Badge
                                  key={tech}
                                  variant="secondary"
                                  className={`text-xs ${isDayMode ? "bg-gray-200 text-gray-800" : "bg-slate-700 text-gray-300"
                                    }`}
                                >
                                  {tech}
                                </Badge>
                              ),
                            )}
                          </div>
                        </div>

                        <div
                          className={`${isDayMode ? "bg-blue-50" : "bg-slate-800/50"} rounded-lg p-3 sm:p-4 border ${isDayMode ? "border-blue-200/50" : "border-purple-500/20"
                            } transition-all duration-500`}
                        >
                          <h4
                            className={`font-semibold ${isDayMode ? "text-green-700" : "text-green-400"
                              } mb-2 text-sm sm:text-base`}
                          >
                            Experience Gained:
                          </h4>
                          <p className={`${isDayMode ? "text-gray-700" : "text-gray-300"} text-xs sm:text-sm mb-3`}>
                            Gained hands-on experience in full-stack development and improved proficiency in building
                            scalable web solutions.
                          </p>
                          <div className="flex items-center space-x-2">
                            <Award className={`w-4 h-4 ${isDayMode ? "text-yellow-600" : "text-yellow-400"}`} />
                            <a
                              href="https://drive.google.com/file/d/1_oUiUHjoXg52SZA6LALa6-lIky-ZNVkd/view?pli=1"
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`${isDayMode
                                  ? "text-yellow-600 hover:text-yellow-700"
                                  : "text-yellow-400 hover:text-yellow-300"
                                } transition-colors text-xs sm:text-sm font-medium flex items-center space-x-1`}
                            >
                              <span>View Certification</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 lg:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Technical Expertise</h2>
            <p className={`${isDayMode ? "text-gray-600" : "text-gray-400"} max-w-2xl mx-auto text-sm lg:text-base`}>
              Comprehensive skill set developed through academic coursework, internships, and hands-on project
              experience
            </p>
          </motion.div>

          {/* Skills by Category */}
          <div className="space-y-8 lg:space-y-12">
            {Object.entries(skillCategories).map(([category, config], categoryIndex) => {
              const categorySkills = skills.filter((skill) => skill.category === category)
              if (categorySkills.length === 0) return null

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1 }}
                  className="space-y-4 lg:space-y-6"
                >
                  <div className="flex items-center space-x-3 mb-4 lg:mb-6">
                    <motion.div
                      className={`w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-gradient-to-r ${config.color} flex items-center justify-center transition-all duration-500`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <config.icon className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                    </motion.div>
                    <h3 className={`text-xl lg:text-2xl font-bold ${themeStyles.text}`}>{category} Skills</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-4">
                    {categorySkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                        whileHover={{
                          scale: 1.05,
                          rotateY: 5,
                          boxShadow: isDayMode ? "0 10px 25px rgba(0,0,0,0.1)" : "0 10px 25px rgba(0,0,0,0.2)",
                        }}
                      >
                        <Card
                          className={`${themeStyles.cardBg} ${themeStyles.cardBorder} ${themeStyles.cardHover} transition-all duration-300 group`}
                        >
                          <CardContent className="p-3 lg:p-4">
                            <div className="flex items-center space-x-2 lg:space-x-3 mb-2 lg:mb-3">
                              <motion.div
                                className={`w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-gradient-to-r ${config.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                              >
                                <skill.icon className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                              </motion.div>
                              <h4 className={`font-semibold ${themeStyles.text} text-xs lg:text-sm`}>{skill.name}</h4>
                            </div>
                            
                            <div className="flex justify-between items-center">
                              <span className={`text-xs ${isDayMode ? "text-gray-600" : "text-gray-400"}`}>
                                
                              </span>
                              <span
                                className={`text-xs font-medium bg-gradient-to-r ${config.color} bg-clip-text text-transparent`}
                              >
                                
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>


        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 lg:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className={`${isDayMode ? "text-gray-600" : "text-gray-400"} max-w-2xl mx-auto text-sm lg:text-base`}>
              Showcasing expertise in AI/ML and full-stack development 
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  rotateY: 2,
                  rotateX: 2,
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card
                  className={`${themeStyles.cardBg} ${themeStyles.cardBorder} ${themeStyles.cardHover} transition-all duration-300 h-full group relative overflow-hidden`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${isDayMode ? "from-orange-500/10 to-red-500/10" : "from-pink-500/10 to-purple-500/10"
                      } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                  <CardHeader className="p-4 lg:p-6 relative z-10">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle
                        className={`${themeStyles.text} text-base lg:text-lg ${isDayMode ? "group-hover:text-orange-600" : "group-hover:text-pink-400"
                          } transition-colors`}
                      >
                        {project.title}
                      </CardTitle>
                      <Badge
                        variant={project.status === "Live" || project.status === "Production" ? "default" : "secondary"}
                        className="shrink-0 text-xs"
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <CardDescription
                      className={`${isDayMode ? "text-gray-600" : "text-gray-400"} text-xs lg:text-sm mb-3`}
                    >
                      {project.description}
                    </CardDescription>
                    <div className={`text-xs ${isDayMode ? "text-blue-600" : "text-purple-400"} font-medium mb-3`}>
                      {project.date}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3 lg:space-y-4 p-4 lg:p-6 pt-0 relative z-10">
                    {/* Key Highlights */}
                    <div>
                      <h4
                        className={`text-xs lg:text-sm font-semibold ${isDayMode ? "text-gray-800" : "text-gray-200"
                          } mb-2`}
                      >
                        Key Features:
                      </h4>
                      <ul className={`text-xs ${isDayMode ? "text-gray-700" : "text-gray-300"} space-y-1`}>
                        {project.highlights.map((highlight, idx) => (
                          <motion.li
                            key={idx}
                            className="flex items-start space-x-2"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <span className={`${isDayMode ? "text-orange-600" : "text-pink-400"} mt-1`}>•</span>
                            <span>{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4
                        className={`text-xs lg:text-sm font-semibold ${isDayMode ? "text-gray-800" : "text-gray-200"
                          } mb-2`}
                      >
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((tech, idx) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            <Badge
                              variant="outline"
                              className={`text-xs px-2 py-1 ${isDayMode ? "hover:bg-gray-100" : "hover:bg-white/10"
                                } transition-colors`}
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Impact & Action */}
                    <div className="flex items-center justify-between pt-2 border-t border-white/10">
                      <span
                        className={`text-xs lg:text-sm ${isDayMode ? "text-green-700" : "text-green-400"} font-medium`}
                      >
                        {project.impact}
                      </span>
                      <Button
                        size="sm"
                        variant="ghost"
                        className={`${isDayMode
                            ? "text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                            : "text-pink-400 hover:text-pink-300 hover:bg-pink-400/10"
                          } p-2 transition-all duration-300`}
                        onClick={() => project.githubUrl && window.open(project.githubUrl, "_blank")}
                        disabled={!project.githubUrl}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Projects Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 lg:mt-16 text-center"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto">
              {[
                { number: "5+", label: "Projects Completed", color: isDayMode ? "text-orange-600" : "text-pink-400" },
                { number: "3", label: "AI/ML Projects", color: isDayMode ? "text-blue-600" : "text-purple-400" },
                {
                  number: "50%",
                  label: "Security Improvement",
                  color: isDayMode ? "text-green-600" : "text-orange-400",
                },
                { number: "15+", label: "Technologies Used", color: isDayMode ? "text-purple-600" : "text-green-400" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className={`${themeStyles.cardBg} rounded-lg p-4 lg:p-6 border ${themeStyles.cardBorder} transition-all duration-500`}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: isDayMode ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.1)",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`text-2xl lg:text-3xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                  <p className={`${isDayMode ? "text-gray-700" : "text-gray-300"} text-xs lg:text-sm`}>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications & Achievements Section */}
      <section className="py-16 lg:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Certifications & Achievements</h2>
            <p className={`${isDayMode ? "text-gray-600" : "text-gray-400"} max-w-2xl mx-auto text-sm lg:text-base`}>
              Professional certifications and key milestones that demonstrate expertise and commitment to continuous
              learning
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {certificationsAndAchievements.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
                whileHover={{ scale: 1.05, rotateY: 5 }}
              >
                <Card
                  className={`${themeStyles.cardBg} ${themeStyles.cardBorder} ${themeStyles.cardHover} transition-all duration-300 h-full relative overflow-hidden`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${isDayMode ? "from-blue-500/5 to-purple-500/5" : "from-blue-500/5 to-purple-500/5"
                      } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                  <CardContent className="p-4 lg:p-6 text-center relative z-10">
                    <motion.div
                      className={`${item.type === "certification"
                          ? isDayMode
                            ? "bg-gradient-to-r from-blue-600 to-cyan-600"
                            : "bg-gradient-to-r from-blue-500 to-cyan-500"
                          : isDayMode
                            ? "bg-gradient-to-r from-orange-600 to-red-600"
                            : "bg-gradient-to-r from-pink-500 to-purple-600"
                        } w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                    </motion.div>

                    <h3 className={`font-semibold ${themeStyles.text} mb-2 text-base lg:text-lg`}>{item.title}</h3>
                    <p className={`${isDayMode ? "text-gray-600" : "text-gray-400"} text-xs lg:text-sm mb-4`}>
                      {item.description}
                    </p>

                    {item.issuer && (
                      <div className="mb-4">
                        <Badge
                          variant="outline"
                          className={`${item.type === "certification"
                              ? isDayMode
                                ? "border-blue-400/50 text-blue-700"
                                : "border-blue-400/50 text-blue-300"
                              : isDayMode
                                ? "border-orange-400/50 text-orange-700"
                                : "border-purple-400/50 text-purple-300"
                            } text-xs`}
                        >
                          {item.issuer}
                        </Badge>
                      </div>
                    )}

                    {item.link && (
                      <motion.a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center space-x-2 ${isDayMode ? "text-blue-600 hover:text-blue-700" : "text-blue-400 hover:text-blue-300"
                          } transition-colors text-xs lg:text-sm font-medium`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>View Certificate</span>
                        <ExternalLink className="w-3 h-3 lg:w-4 lg:h-4" />
                      </motion.a>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Certifications Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 lg:mt-16 text-center"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 max-w-4xl mx-auto">
              <motion.div
                className={`${themeStyles.cardBg} rounded-lg p-4 lg:p-6 border ${themeStyles.cardBorder} transition-all duration-500`}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: isDayMode ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.1)",
                }}
              >
                <div className={`text-2xl lg:text-3xl font-bold ${isDayMode ? "text-blue-600" : "text-blue-400"} mb-2`}>
                  {certificationsAndAchievements.filter((item) => item.type === "certification").length}
                </div>
                <p className={`${isDayMode ? "text-gray-700" : "text-gray-300"} text-sm lg:text-base`}>
                  Professional Certifications    
                  
                </p>
              </motion.div>
              <motion.div
                className={`${themeStyles.cardBg} rounded-lg p-4 lg:p-6 border ${themeStyles.cardBorder} transition-all duration-500`}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: isDayMode ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.1)",
                }}
              >
                <div
                  className={`text-2xl lg:text-3xl font-bold ${isDayMode ? "text-orange-600" : "text-purple-400"} mb-2`}
                >
                  Google
                </div>
                <p className={`${isDayMode ? "text-gray-700" : "text-gray-300"} text-sm lg:text-base`}>
                  Cloud & Security Certified
                </p>
              </motion.div>
              <motion.div
                className={`${themeStyles.cardBg} rounded-lg p-4 lg:p-6 border ${themeStyles.cardBorder} transition-all duration-500`}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: isDayMode ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.1)",
                }}
              >
                <div
                  className={`text-2xl lg:text-3xl font-bold ${isDayMode ? "text-green-600" : "text-orange-400"} mb-2`}
                >
                  100%
                </div>
                <p className={`${isDayMode ? "text-gray-700" : "text-gray-300"} text-sm lg:text-base`}>
                  Completion Rate
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Let's Build Something Amazing</h2>
            <p className={`${isDayMode ? "text-gray-600" : "text-gray-400"} text-base lg:text-lg mb-8`}>
              Ready to contribute to innovative projects and grow with a dynamic team. Let's discuss how I can add value
              to your organization.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className={`bg-gradient-to-r ${isDayMode
                    ? "from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
                    : "from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                  } w-full sm:w-auto relative overflow-hidden group transition-all duration-500`}
                onClick={() => window.open("mailto:prashantmishra06032003@gmail.com")}
              >
                <span
                  className={`absolute inset-0 bg-gradient-to-r ${isDayMode ? "from-orange-600 to-red-700" : "from-pink-600 to-purple-700"
                    } transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300`}
                ></span>
                <Mail className="w-5 h-5 mr-2 relative z-10" />
                <span className="relative z-10">prashantmishra06032003@gmail.com</span>
              </Button>
              <Button
                size="lg"
                className={`${isDayMode
                    ? "bg-white/60 border border-orange-400/50 text-orange-700 hover:bg-white/80 hover:border-orange-500/70"
                    : "bg-slate-800/60 border border-purple-500/30 text-purple-200 hover:bg-slate-700/80 hover:border-purple-400/50"
                  } backdrop-blur-sm w-full sm:w-auto relative overflow-hidden group transition-all duration-500`}
                onClick={() => window.open("tel:+917973745181")}
              >
                <span
                  className={`absolute inset-0 ${isDayMode ? "bg-orange-500/20" : "bg-purple-600/20"
                    } transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300`}
                ></span>
                <Phone className="w-5 h-5 mr-2 relative z-10" />
                <span className="relative z-10">+91 7973745181</span>
              </Button>
            </div>

            <div className="flex justify-center space-x-6">
              <motion.a
                href="https://github.com/pmi0603"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className={`${isDayMode
                      ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                      : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                    } transition-all duration-300 group-hover:scale-110`}
                >
                  <Github className="w-6 h-6" />
                </Button>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/prashant-mishra-2b194b256/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className={`${isDayMode
                      ? "text-gray-600 hover:text-[#0077B5] hover:bg-[#0077B5]/10"
                      : "text-gray-400 hover:text-white hover:bg-[#0077B5]/10"
                    } transition-all duration-300 group-hover:scale-110`}
                >
                  <Linkedin className="w-6 h-6" />
                </Button>
              </motion.a>
              <motion.a
                href="https://leetcode.com/u/mishraprashant/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LeetCode Profile"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className={`${isDayMode
                      ? "text-gray-600 hover:text-[#FFA116] hover:bg-[#FFA116]/10"
                      : "text-gray-400 hover:text-[#FFA116] hover:bg-[#FFA116]/10"
                    } transition-all duration-300 group-hover:scale-110`}
                >
                  <Laptop className="w-6 h-6" />
                </Button>
              </motion.a>
              <motion.a
                href="https://www.codechef.com/users/buffy_lark_70"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="CodeChef Profile"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className={`${isDayMode
                      ? "text-gray-600 hover:text-[#5B4638] hover:bg-[#5B4638]/10"
                      : "text-gray-400 hover:text-[#5B4638] hover:bg-[#5B4638]/10"
                    } transition-all duration-300 group-hover:scale-110`}
                >
                  <Laptop className="w-6 h-6" />
                </Button>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-6 lg:py-8 border-t ${isDayMode ? "border-gray-200/50" : "border-white/10"
          } transition-all duration-500`}
      >
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className={`text-sm lg:text-base ${isDayMode ? "text-gray-600" : "text-gray-400"}`}>
            &copy; 2024 Prashant Mishra. Crafted with passion and precision.
          </p>
        </div>
      </footer>
    </div>
  )
}