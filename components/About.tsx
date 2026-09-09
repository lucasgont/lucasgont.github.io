"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"

import lucas from "@/public/images/lucas.png"

const focusAreas = ["WEB", "FULLSTACK", "BACKEND", "CLOUD", "AI"]

const timeline = [
    {
        year: "ORIGIN",
        title: "Aerospace Engineering",
        description: "Discovered programming while studying aerospace systems, and curiosity took over from there.",
    },
    {
        year: "TRAINING",
        title: "Web Application Development (DAW)",
        description: "Formal training building complete, production-ready web applications with modern practices.",
    },
    {
        year: "TODAY",
        title: "Full-Stack Engineer",
        description: "Engineering scalable, secure, maintainable solutions end-to-end, with AI-assisted velocity.",
    },
]

const competencies = [
    {
        category: "Software",
        items: ["Full-stack development", "Software architecture", "End-to-end features", "Scalability", "Security", "Performance optimisation"],
    },
    {
        category: "Frontend",
        items: ["React", "Next.js", "TypeScript", "JavaScript", "CSS", "Tailwind CSS", "Sass", "Responsive design", "SEO", "UI/UX"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express.js", "REST APIs", "Business logic", "Auth & authorisation", "WebSockets", "Caching"],
    },
    {
        category: "APIs & Integrations",
        items: ["Third-party integrations", "Stripe", "Payment systems", "Instagram", "TikTok", "OpenAI", "Gemini"],
    },
    {
        category: "Databases & Data",
        items: ["PostgreSQL", "MySQL", "Relational modelling", "Database design", "Query optimisation", "Data persistence"],
    },
    {
        category: "Cloud & DevOps",
        items: ["Microsoft Azure", "Google Cloud", "Docker", "Linux", "Render", "Vercel", "CI/CD", "GitHub Actions", "Deployment"],
    },
    {
        category: "Engineering Practices",
        items: ["Git & GitHub", "Agile / Scrum", "Version control", "Feature planning", "Technical docs", "AI-assisted development"],
    },
    {
        category: "Collaboration & Leadership",
        items: ["Technical coordination", "Developer onboarding", "Cross-team collaboration", "Code reviews", "YouTrack", "Figma"],
    },
]

export default function About({ onInView }: {
    onInView: () => void
}) {
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 0.2 })

    useEffect(() => {
        if (isInView) onInView()
    }, [isInView, onInView])

    return (
        <section
            ref={ref}
            className="min-h-screen flex flex-col justify-center px-6 py-24"
        >
            <div className="max-w-6xl mx-auto w-full">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-12 sm:mb-16"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-8 h-px bg-nx-cyan" />
                        <span className="font-mono text-[10px] sm:text-xs text-nx-cyan tracking-[0.4em]">
                            ABOUT ME
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-nx-text tracking-tight wrap-break-word">
                        LUCAS GONTIJO GUIMARÃES
                    </h2>
                    <p className="font-mono text-sm text-nx-text-secondary mt-3">
                        Operative profile, thoughtful engineer and full-stack expertise.
                    </p>
                </motion.div>

                {/* Profile */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="glass-panel rounded-xl p-6 sm:p-8"
                >
                    <div className="flex flex-col items-center sm:flex-row sm:items-center gap-5 pb-6 border-b border-nx-border">
                        {/* Avatar */}
                        <div className="relative w-16 h-16 shrink-0">
                            <div className="absolute inset-0 rounded-full border border-nx-cyan/20 overflow-hidden">
                                <Image src={lucas} alt="Lucas Gontijo Guimarães" fill sizes="64px" className="object-cover" />
                            </div>
                            <div className="absolute inset-0 rounded-full border border-nx-cyan/20 pulse-ring" />
                        </div>

                        <div>
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-nx-green rounded-full animate-pulse" />
                                <span className="font-mono text-[10px] text-nx-green tracking-[0.2em]">OPEN TO WORK</span>
                            </div>
                            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mt-1.5 font-mono text-xs text-nx-text-secondary">
                                <span className="text-nx-text">SEVILLE, SPAIN</span>
                            </div>
                        </div>

                        {/* Focus areas */}
                        <div className="flex flex-wrap gap-1.5 sm:ml-auto">
                            {focusAreas.map((area) => (
                                <span
                                    key={area}
                                    className="font-mono text-[9px] tracking-wider text-nx-cyan px-2 py-1 rounded-full border border-nx-cyan/25 bg-nx-cyan/5"
                                >
                                    {area}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-6">
                        {/* Bio */}
                        <div className="lg:col-span-2 space-y-3 text-sm text-nx-text-secondary leading-relaxed">
                            <p>
                                I'm a
                                <span className="text-nx-text"> full-stack engineer </span>
                                who delivers features end-to-end &mdash; across modern
                                <span className="text-nx-cyan"> frontend, backend, and cloud infrastructure</span>,
                                with integrated
                                <span className="text-nx-cyan"> AI and third-party systems</span>,
                                contributing at an engineering / technical-lead level.
                            </p>
                            <p>
                                I engineer solutions from idea to deployment, keeping
                                <span className="text-nx-text"> scalability, security, performance, maintainability, and UX </span>
                                in mind, and I continuously update my skills across the web stack.
                            </p>
                            <p>
                                Currently open to new
                                <span className="text-nx-text"> career growth opportunities</span>.
                            </p>
                        </div>

                        {/* Quote */}
                        <div className="p-4 rounded-lg bg-nx-cyan/5 border-l-2 border-nx-cyan/30 h-fit">
                            <p className="font-mono text-xs text-nx-text-secondary italic">
                                &ldquo;I craft robust, maintainable systems with meticulous attention to quality.&rdquo;
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Background */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-5 glass-panel rounded-xl p-6 sm:p-8"
                >
                    <div className="flex items-center gap-2 mb-6 pb-3 border-b border-nx-border">
                        <div className="w-1.5 h-1.5 bg-nx-cyan rounded-full" />
                        <span className="font-mono text-[10px] text-nx-text-muted tracking-[0.2em]">BACKGROUND</span>
                    </div>

                    <p className="text-sm text-nx-text-secondary leading-relaxed max-w-3xl">
                        My path wasn&apos;t always about code. I started studying
                        <span className="text-nx-text"> aerospace engineering</span>, fascinated by how software worked. I discovered something more immediate:
                        <span className="text-nx-text"> programming</span>. That curiosity became an obsession. I shifted gears and pursued formal training in
                        <span className="text-nx-text"> Web Application Development (DAW)</span>, learning not just to write code, but to
                        <span className="text-nx-text"> architect solutions</span>. Since then, I&apos;ve built production applications for different purposes.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                        {timeline.map((step, i) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.25 + i * 0.1 }}
                                className="pl-4 border-l border-nx-cyan/20"
                            >
                                <span className="font-mono text-[10px] text-nx-cyan tracking-[0.2em]">
                                    {`0${i + 1} — ${step.year}`}
                                </span>
                                <h4 className="text-sm font-semibold text-nx-text mt-2">{step.title}</h4>
                                <p className="text-xs text-nx-text-secondary leading-relaxed mt-2">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Technical expertise */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-5 glass-panel rounded-xl p-6 sm:p-8"
                >
                    <div className="flex items-center gap-2 mb-2 pb-3 border-b border-nx-border">
                        <div className="w-1.5 h-1.5 bg-nx-cyan rounded-full" />
                        <span className="font-mono text-[10px] text-nx-text-muted tracking-[0.2em]">TECHNICAL EXPERTISE & CORE COMPETENCIES</span>
                    </div>

                    <div className="divide-y divide-nx-border">
                        {competencies.map((group, i) => (
                            <motion.div
                                key={group.category}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + i * 0.04 }}
                                className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 py-4"
                            >
                                <span className="font-mono text-[10px] text-nx-cyan tracking-[0.15em] sm:w-44 sm:shrink-0 sm:pt-0.5">
                                    {group.category.toUpperCase()}
                                </span>
                                <div className="flex flex-wrap gap-1.5">
                                    {group.items.map((item) => (
                                        <span
                                            key={item}
                                            className="font-mono text-[10px] text-nx-text-secondary px-2 py-1 rounded-md border border-nx-border bg-nx-elevated/40"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div >
        </section >
    )
}
