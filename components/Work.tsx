"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"

import { work } from "@/data/work"

export default function Work({ onInView }: {
    onInView: () => void
}) {
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 0.15 })
    const [selected, setSelected] = useState(0)

    useEffect(() => {
        if (isInView) onInView()
    }, [isInView, onInView])

    const project = work[selected]

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
                            MY WORK
                        </span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-nx-text tracking-tight">
                        SELECTED PROJECTS
                    </h2>
                    <p className="font-mono text-sm text-nx-text-secondary mt-3 max-w-lg">
                        A selection of my work, showcasing my expertise in full-stack development, system design, and innovative solutions.
                    </p>
                </motion.div>

                {/* Project selector tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex gap-2 mb-8"
                >
                    {work.map((p, i) => (
                        <button
                            key={p.id}
                            onClick={() => setSelected(i)}
                            className={`relative px-5 py-3 font-mono text-xs tracking-wider cursor-pointer transition-all duration-300 rounded-t-lg ${selected === i
                                ? "text-nx-text bg-nx-surface border border-nx-border-bright border-b-transparent"
                                : "text-nx-text-muted hover:text-nx-text-secondary border border-transparent hover:border-nx-border"
                                }`}
                        >
                            <span className={`mr-2 ${selected === i ? "text-nx-cyan" : "text-nx-text-muted/50"}`}>
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            {p.name}
                            {selected === i && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-nx-cyan rounded-full"
                                />
                            )}
                        </button>
                    ))}
                </motion.div>

                {/* Project detail */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 lg:grid-cols-5 gap-6"
                    >
                        {/* Left: Visual + Description */}
                        <div className="lg:col-span-3 space-y-6">
                            {/* Image/Preview card */}
                            <div className="relative glass-panel rounded-xl overflow-hidden group">
                                {/* Decorative image placeholder */}
                                <div className="relative h-56 sm:h-72 bg-linear-to-br from-nx-surface to-nx-elevated overflow-hidden">
                                    {/* Project image */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6 }}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={project.image}
                                            alt={project.name}
                                            fill
                                            sizes="(max-width: 1024px) 100%, 60%"
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.div>

                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-linear-to-t from-nx-surface via-transparent to-transparent" />

                                    {/* Vignette effect */}
                                    <div className="absolute inset-0" style={{
                                        backgroundImage: `radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.4) 100%)`,
                                    }} />

                                    {/* Status badge */}
                                    <div className="absolute top-4 right-4">
                                        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel ${project.statusColor}`}>
                                            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                                            <span className="font-mono text-[10px] tracking-wider">{project.status}</span>
                                        </div>
                                    </div>

                                    {/* Project name overlay */}
                                    <div className="absolute bottom-4 left-5 right-5">
                                        <h3 className="text-2xl sm:text-3xl font-bold text-nx-text tracking-tight mb-1">
                                            {project.name}
                                        </h3>
                                        <p className="font-mono text-xs text-nx-text-secondary">{project.tagline}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="glass-panel rounded-xl p-6">

                                {/* Company Logo */}
                                <div className="flex items-center justify-center gap-2 mb-6">
                                    <div className="w-32 h-22 relative">
                                        <Image src={project.logo} alt={`${project.name} logo`} fill sizes="128px" className="w-full h-full object-contain" />
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-1.5 h-1.5 bg-nx-cyan rounded-full" />
                                    <span className="font-mono text-[10px] text-nx-text-muted tracking-[0.2em]">OVERVIEW</span>
                                </div>
                                <p className="text-sm text-nx-text-secondary leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-1.5 h-1.5 bg-nx-cyan rounded-full" />
                                    <span className="font-mono text-[10px] text-nx-text-muted tracking-[0.2em]">FEATURES</span>
                                </div>

                                {/* Feature list */}
                                <div className="space-y-2">
                                    {project.features.map((f, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.08 }}
                                            className="flex items-start gap-3 text-xs text-nx-text-secondary"
                                        >
                                            <span className="text-nx-cyan mt-0.5 shrink-0">▹</span>
                                            {f}
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Impact */}
                                <div className="mt-6 p-4 rounded-lg bg-nx-cyan/5 border border-nx-cyan/10">
                                    <div className="font-mono text-[10px] text-nx-cyan mb-1 tracking-wider">◈ IMPACT</div>
                                    <div className="font-mono text-sm text-nx-text">{project.impact}</div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Tech + Links */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="glass-panel rounded-xl p-6">
                                {/* Tech stack */}
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="w-1.5 h-1.5 bg-nx-cyan rounded-full" />
                                    <span className="font-mono text-[10px] text-nx-text-muted tracking-[0.2em]">TECH STACK</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <motion.span
                                            key={t}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.05 }}
                                            className="px-3 py-1.5 text-xs font-mono text-nx-text-secondary border border-nx-border rounded-md hover:border-nx-cyan/30 hover:text-nx-cyan hover:bg-nx-cyan/5 transition-all duration-300 cursor-default"
                                        >
                                            {t}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>

                            {/* Action buttons */}
                            <div className="flex gap-3">
                                {project.liveUrl && (
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-3 rounded-lg font-mono text-xs tracking-wider bg-nx-cyan/10 border border-nx-cyan/30 text-nx-cyan hover:bg-nx-cyan/20 hover:shadow-[0_0_20px_rgba(0,212,255,0.15)] transition-all duration-300">
                                        VISIT SITE
                                    </a>
                                )}
                                {project.sourceUrl && (
                                    <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-3 rounded-lg font-mono text-xs tracking-wider glass-panel text-nx-text-secondary hover:text-nx-text hover:border-nx-border-bright transition-all duration-300">
                                        SOURCE CODE
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    )
}
