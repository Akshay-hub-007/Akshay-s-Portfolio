'use client';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const projects = [
    {
        id: 1,
        title: 'CarVerse - Test Drive Booking',
        description: 'A modern car test drive booking platform built with Next.js. Features include real-time availability, user authentication, and seamless booking experience.',
        image: '/projects/carverse.png', // Add your project screenshot
        tags: ['Next.js', 'React', 'Tailwind CSS', 'MongoDB'],
        liveUrl: 'https://akshaycarverse.vercel.app/',
        githubUrl: '#', // Add your github repo link
        color: '#3b82f6',
    },
    {
        id: 2,
        title: 'Photo Editor',
        description: 'An intuitive web-based photo editing application with powerful features. Apply filters, adjust brightness, contrast, and more with a clean, user-friendly interface.',
        image: '/projects/photo-editor.png', // Add your project screenshot
        tags: ['React', 'JavaScript', 'Canvas API', 'CSS3'],
        liveUrl: 'https://akshay-edits-omega.vercel.app/',
        githubUrl: '#', // Add your github repo link
        color: '#8b5cf6',
    },
];

export default function Projects() {
    const ref = useRef(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 50,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <section
            ref={ref}
            className="min-h-screen flex flex-col items-center justify-center py-20 px-8 relative overflow-hidden"
            style={{ backgroundColor: 'var(--bg-primary)' }}
            id="projects"
        >
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div
                    className="absolute top-40 left-20 w-96 h-96 rounded-full filter blur-3xl"
                    style={{ backgroundColor: 'var(--accent-blue)' }}
                />
                <div
                    className="absolute bottom-40 right-20 w-96 h-96 rounded-full filter blur-3xl"
                    style={{ backgroundColor: 'var(--accent-cyan)' }}
                />
            </div>

            <motion.div
                className="relative z-10 w-full max-w-6xl"
            >
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2
                        className="text-5xl md:text-6xl font-bold mb-3"
                        style={{ color: 'var(--text-primary)' }}
                    >
                        Featured Projects
                    </h2>
                    <div
                        className="w-20 h-1 rounded-full mx-auto mb-4"
                        style={{ backgroundColor: 'var(--primary)' }}
                    />
                    <p
                        className="text-lg max-w-2xl mx-auto"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        Here are some of my recent projects that showcase my skills and experience
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            className="group"
                        >
                            <div
                                className="rounded-2xl overflow-hidden border shadow-lg hover:shadow-2xl transition-all duration-300"
                                style={{
                                    backgroundColor: 'var(--bg-secondary)',
                                    borderColor: 'var(--border-light)'
                                }}
                            >
                                {/* Project Image */}
                                <div className="relative h-64 overflow-hidden rounded-t-2xl">
                                    <motion.div
                                        initial={{ scale: 1 }}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.4 }}
                                        className="w-full h-full"
                                    >
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </motion.div>

                                    {/* Gradient overlay for readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-60" />

                                    {/* Action Buttons */}
                                    <div className="absolute bottom-4 left-4 right-4 flex gap-3 z-10">
                                        <motion.a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 px-4 py-2 rounded-lg font-medium text-white text-center shadow-lg backdrop-blur-sm"
                                            style={{ backgroundColor: 'var(--primary)' }}
                                            whileHover={{ scale: 1.03, y: -2 }}
                                            whileTap={{ scale: 0.97 }}
                                        >
                                            View Live
                                        </motion.a>
                                        <motion.a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 px-4 py-2 rounded-lg font-medium border-2 text-center shadow-lg backdrop-blur-sm"
                                            style={{
                                                color: 'white',
                                                borderColor: 'white',
                                                backgroundColor: 'rgba(0, 0, 0, 0.3)'
                                            }}
                                            whileHover={{ scale: 1.03, y: -2 }}
                                            whileTap={{ scale: 0.97 }}
                                        >
                                            GitHub
                                        </motion.a>
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="p-6">
                                    <h3
                                        className="text-2xl font-bold mb-3"
                                        style={{ color: 'var(--text-primary)' }}
                                    >
                                        {project.title}
                                    </h3>
                                    <p
                                        className="mb-4 leading-relaxed"
                                        style={{ color: 'var(--text-secondary)' }}
                                    >
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 text-xs font-medium rounded-full"
                                                style={{
                                                    backgroundColor: 'var(--bg-tertiary)',
                                                    color: 'var(--text-secondary)'
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-4 pt-4 border-t" style={{ borderColor: 'var(--border-light)' }}>
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-medium hover:underline"
                                            style={{ color: 'var(--primary)' }}
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                            Live Demo
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-medium hover:underline"
                                            style={{ color: 'var(--text-secondary)' }}
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                            Source Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <p
                        className="text-lg mb-6"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        Want to see more of my work?
                    </p>
                    <motion.a
                        href="https://github.com/Akshay-hub-007" // Update with your GitHub
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-medium text-white shadow-lg"
                        style={{ backgroundColor: 'var(--primary)' }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        View All Projects on GitHub
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
}