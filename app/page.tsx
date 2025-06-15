"use client"

import Image from "next/image"
import type React from "react"
import { Github, LinkedIn } from "@/components/ui/icons"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Mail, FileText, ArrowRight } from "lucide-react"
import SkillCard from "@/components/skill-card";

export default function Home() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header/Navigation */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-40 w-full border-b bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-slate-700"
      >
        <div className="container flex h-16 items-center justify-between">
          <motion.div
            className="font-bold text-xl text-white"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Joshua Onwuemene
          </motion.div>
          <nav className="hidden md:flex items-center gap-6">
            {["about", "projects", "skills", "education", "contact"].map((section, index) => (
              <motion.a
                key={section}
                href={`#${section}`}
                className="text-sm font-medium hover:underline underline-offset-4 text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.a>
            ))}
          </nav>
          {/* Mobile Navigation Menu */}
          <div className="md:hidden">
            <motion.button
              className="text-sm font-medium p-2 text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const mobileMenu = document.getElementById("mobile-menu")
                if (mobileMenu) {
                  mobileMenu.classList.toggle("hidden")
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu"
              >
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </motion.button>

            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="hidden absolute top-16 left-0 right-0 bg-background border-b border-border p-4 shadow-lg"
            >
              <div className="flex flex-col space-y-4">
                {["about", "projects", "skills", "education", "contact"].map((section, index) => (
                  <motion.a
                    key={section}
                    href={`#${section}`}
                    className="text-sm font-medium hover:underline underline-offset-4 py-2 text-white"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })
                      document.getElementById("mobile-menu")?.classList.add("hidden")
                    }}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              variant="outline"
              size="sm"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
            >
              <FileText className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </motion.div>
        </div>
      </motion.header>

      <main>
        {/* Hero Section */}
        <section className="container py-24 md:py-32 space-y-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="space-y-6 flex-1">
              <motion.h1
                className="text-4xl md:text-6xl font-bold text-white"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Hi, I'm{" "}
                <motion.span
                  className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1.2,
                    delay: 0.5,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotate: [0, -1, 1, -1, 0],
                    transition: { duration: 0.5 },
                  }}
                >
                  <motion.span
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  >
                    Joshua Onwuemene
                  </motion.span>
                </motion.span>
              </motion.h1>

              <motion.h2
                className="text-2xl md:text-3xl font-medium text-blue-300"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Backend and Cloud Engineer
              </motion.h2>

              <motion.p
                className="text-xl text-gray-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                I design and build robust and fault tolerant backend solutions that power modern applications.
                Strong interest in distributed software systems, scalable infrastructure and clean architecture.
              </motion.p>

              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Contact Me
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                    onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    View Projects
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex gap-4 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                {socialLinks.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.text}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:text-white"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  >
                    <contact.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            <motion.div
              className="flex-1 flex justify-center"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
            >
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Image
                  src="/asset/josh_bw.jpeg"
                  width={400}
                  height={400}
                  alt="Profile"
                  fill
                  className="object-cover" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Startup Idea */}
        <AnimatedSection className="bg-slate-800/30 py-16">
          <div className="container">
            <motion.h2
              className="text-3xl font-bold mb-12 text-center text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Project Idea
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                className="relative aspect-video rounded-lg overflow-hidden border shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src="/asset/find-doc.png"
                  width={800}
                  height={200}
                  alt="Find a Doctor Startup Concept"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white">Find a Doctor</h3>
                <p className="text-blue-300">
                  A revolutionary healthcare platform concept that would connect patients with specialized doctors in
                  real-time. Using advanced matching algorithms, geolocation and artificial intelligence, it aims to reduce appointment wait times by 60% while
                  ensuring optimal doctor-patient compatibility based on medical history and expertise.
                </p>
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {["TypeScript", "Node.js", "NestJS", "PostgreSQL", "Redis"].map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Badge className="bg-blue-900/30 text-blue-300 border-blue-500/30">{tech}</Badge>
                    </motion.div>
                  ))}
                </motion.div>
                <motion.div
                  className="flex gap-4 pt-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Concept Repo
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Pitch Deck
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* About Section */}
        <AnimatedSection id="about" className="container py-16 md:py-24">
          <motion.h2
            className="text-3xl font-bold mb-8 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <div className="max-w-3xl space-y-4">
            {[
              "I'm a passionate Software Engineer with a strong interest in distributed software systems and digital transformation.",
              "I bring 2+ years of hands-on experience in backend development for web and mobile applications using tools like Java, Springboot, Dropwizard, gRPC and Node.js. Currently exploring Cloud DevOps Engineering at AltSchool Africa.",
              "A Medical Biochemist turned software engineer, I get excited about the intersections between health and technology; learning and exploring how engineering, technology and data can strengthen healthcare systems, research and delivery.",
              "When I'm not programming, I love to read around several subjects of interest (theology, tech, growth), share my knowledge amongst developer commmunity or play on the piano.",
            ].map((text, index) => (
              <motion.p
                key={index}
                className="text-lg text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </AnimatedSection>

        {/* Projects Section */}
        <AnimatedSection id="projects" className="bg-slate-800/30 py-16 md:py-24">
          <div className="container">
            <motion.h2
              className="text-3xl font-bold mb-12 text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Projects
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Report Management System",
                  description:
                    "A comprehensive system for creating, managing, and analyzing reports with advanced filtering capabilities.",
                  tech: ["TypeScript", "Node.js", "Express", "MongoDB"],
                  pic: "/asset/report.png",
                  code: "https://github.com/Emjay6229/e-Report",
                  demo: ""
                },
                {
                  title: "Task Tracker",
                  description: "A productivity application for managing tasks, deadlines, and team collaboration.",
                  tech: ["JavaScript", "Node.js", "Express", "MongoDB", "Cloudinary"],
                  pic: "/asset/task.png",
                  code: "https://github.com/Emjay6229/Task-Tracker",
                  demo: "https://task-management-nu-nine.vercel.app/"
                },
                {
                  title: "Loan Management System",
                  description:
                    "A secure platform for processing loan applications, tracking repayments, and managing borrower information.",
                  tech: ["TypeScript", "Node.js", "Express", "Redis", "Postgres"],
                  pic: "/asset/loan.png",
                  code: "",
                  demo: "https://ezzymeans-fe.onrender.com/"
                },
                // {
                //   title: "Aidra AI",
                //   description: "Your AI business co-pilot designed to streamline your business tasks and enhance customer communication with ease.",
                //   tech: ["TypeScript", "Node.js", "Express", "MongoDB", "Twilio"],
                //   pic: "/asset/loan.png"
                // },
                {
                  title: "URL Shortener",
                  description: "A high-performance URL shortening service with analytics and custom alias support.",
                  tech: ["Java", "Dropwizard", "Hibernate", "Postgres"],
                  pic: "/asset/shortner.png",
                  code: "https://github.com/Emjay6229/dropwizard-app",
                  demo: ""
                },
                 {
                  title: "Compare env",
                  description: "A utility CLI tool that compares .env or .yaml/yml config files and prints the difference",
                  tech: ["TypeScript", "Chalk", "Commander", "cli-table3"],
                  pic: "/asset/compare.png",
                  code: "https://github.com/Emjay6229/compare-env",
                  demo: ""
                },
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <Card className="overflow-hidden h-full bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                    <motion.div className="relative h-48" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                      <Image
                        src={project.pic}
                        width={500}
                        height={300}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <CardHeader>
                      <CardTitle className="text-white">{project.title}</CardTitle>
                      <CardDescription className="text-blue-300">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <Badge variant="outline" className="bg-blue-900/30 text-blue-300 border-blue-500/30">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <a
                          href={project.code}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </Button>
                        </a>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </Button>
                        </a>
                      </motion.div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection id="skills" className="container py-16 md:py-24">
          <motion.h2
            className="text-3xl font-bold mb-12 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Skills & Technologies
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Tabs defaultValue="languages" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="languages" className="text-white">
                  Languages
                </TabsTrigger>
                <TabsTrigger value="frameworks" className="text-white">
                  Frameworks
                </TabsTrigger>
                <TabsTrigger value="databases & ORMs" className="text-white">
                  Databases
                </TabsTrigger>
                <TabsTrigger value="tools" className="text-white">
                  Tools
                </TabsTrigger>
              </TabsList>
              <TabsContent value="languages" className="mt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[ { name: "Java" }, { name: "JavaScript" }, { name: "TypeScript"} ].map((skill, index) => (
                    <AnimatedSkillCard key={skill.name} {...skill} index={index} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="frameworks" className="mt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[{ name: "NodeJS" },
                    { name: "Express" }, 
                    { name: "NestJS" }, 
                    { name: "Spring Boot" }, 
                    { name: "Dropwizard" }, 
                    {name: "AdonisJs"}].map((skill, index) => (
                    <AnimatedSkillCard key={skill.name} {...skill} index={index} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="databases & ORMs" className="mt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[{ name: "MongoDB" }, 
                    { name: "PostgreSQL" }, 
                    { name: "Redis" },
                    { name: "Prisma" },
                    { name: "Mongoose" },
                    { name: "TypeORM" }
                  ].map((skill, index) => (
                    <AnimatedSkillCard key={skill.name} {...skill} index={index} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="tools" className="mt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: "Git" },
                    { name: "IntelliJ" },
                    { name: "VSCode" },
                    { name: "Docker" },
                    { name: "gRPC" }
                  ].map((skill, index) => (
                    <AnimatedSkillCard key={skill.name} {...skill} index={index} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </AnimatedSection>

        {/* Education Section */}
        <AnimatedSection id="education" className="bg-slate-800/30 py-16 md:py-24">
          <div className="container">
            <motion.h2
              className="text-3xl font-bold mb-12 text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Education
            </motion.h2>
            <div className="space-y-8">
              {[
                {
                  school: "AltSchool Africa",
                  degree: "Diploma, Cloud Engineering",
                  period: "2024 - Present",
                  description:
                    "Currently pursuing advanced training in cloud technologies, infrastructure as code, containerization, and DevOps practices. Focusing on AWS, Azure, and GCP platforms.",
                },
                {
                  school: "University of Benin",
                  degree: "BSc. Medical Biochemistry",
                  period: "2015 - 2019",
                  description:
                    "Graduated with honors in Medical Biochemistry. Coursework included molecular biology, biochemical techniques, and research methodology. Developed strong analytical and problem-solving skills applicable to technical fields.",
                },
              ].map((edu, index) => (
                <motion.div
                  key={edu.school}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-white">{edu.school}</CardTitle>
                          <CardDescription className="text-blue-300">{edu.degree}</CardDescription>
                        </div>
                        <Badge className="bg-blue-900/30 text-blue-300 border-blue-500/30">{edu.period}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">{edu.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection id="contact" className="container py-16 md:py-24">
          <motion.h2
            className="text-3xl font-bold mb-12 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-300">
                I'm always open to discussing new projects, opportunities, or partnerships. Whether you have a question
                or just want to say hi, I'll try my best to get back to you!
              </p>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={link.text}
                    className="flex items-center gap-3 text-white"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                  >
                    <link.icon className="h-5 w-5 text-primary" />
                    <span>{link.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-white">
                          Name
                        </label>
                        <input
                          id="name"
                          className="w-full p-2 border rounded-md bg-slate-700 text-white"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-white">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="w-full p-2 border rounded-md bg-slate-700 text-white"
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-white">
                        Subject
                      </label>
                      <input
                        id="subject"
                        className="w-full p-2 border rounded-md bg-slate-700 text-white"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-white">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full p-2 border rounded-md bg-slate-700 text-white"
                        placeholder="Your message"
                      />
                    </div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Send Message</Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </AnimatedSection>
      </main>

      {/* Footer */}
      <motion.footer
        className="border-t py-8 border-slate-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-blue-300 mb-4 md:mb-0">© 2025 Joshua Onwuemene. All rights reserved.</div>
          <div className="flex gap-6">
            {[
              { href: "https://github.com/Emjay6229", icon: Github },
              { href: "https://www.linkedin.com/in/joshuaonwuemene", icon: LinkedIn },
              { href: "joshua.onwuemene5@gmail.com", icon: Mail },
            ].map((social, index) => (
              <motion.a
                key={social.href}
                href={social.href}
                className="text-blue-300 hover:text-white"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.footer>
    </div>
  )
}

function AnimatedSection({
  children,
  className = "",
  ...props
}: { children: React.ReactNode; className?: string;[key: string]: any }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.section
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      {...props}
    >
      {children}
    </motion.section>
  )
}

type AnimatedSkillCardProps = {
  name: string;
  index: number;
};

function AnimatedSkillCard({ name, index }: AnimatedSkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <SkillCard skill={name} />
    </motion.div>
  );
}

const socialLinks = [
  { icon: Mail, text: "joshua.onwuemene5@gmail.com" },
  { icon: LinkedIn, text: "https://www.linkedin.com/in/joshuaonwuemene" },
  { icon: Github, text: "https://github.com/emjay6229" },
];