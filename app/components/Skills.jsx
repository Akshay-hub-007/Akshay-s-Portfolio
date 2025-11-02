'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const skills = [
  // Frontend Technologies
  { name: 'HTML5', path: '/skills/html.svg', color: '#f97316' },
  { name: 'CSS3', path: '/skills/css.svg', color: '#2563eb' },
  { name: 'JavaScript', path: '/skills/javaScript.svg', color: '#facc15' },
  { name: 'TypeScript', path: '/skills/typescript.svg', color: '#2563eb' },
  { name: 'React', path: '/skills/react.svg', color: '#06b6d4' },
  { name: 'Next.js', path: '/skills/nextjs.svg', color: '#0f172a' },
  { name: 'Redux', path: '/skills/redux.svg', color: '#8b5cf6' },
  { name: 'Tailwind CSS', path: '/skills/tailwindcss.svg', color: '#06b6d4' },
  
  // Backend Technologies
  { name: 'Node.js', path: '/skills/nodejs.svg', color: '#22c55e' },
  { name: 'Express', path: '/skills/express.svg', color: '#475569' },
  { name: 'Python', path: '/skills/python.svg', color: '#3776ab' },
  { name: 'Django', path: '/skills/django.svg', color: '#092e20' },
  { name: 'Java', path: '/skills/java.svg', color: '#f89820' },
  { name: 'Spring Boot', path: '/skills/spring.svg', color: '#22c55e' },
  
  // AI & LLM Tools
  { name: 'LangChain', path: '/skills/langchain.svg', color: '#1C3C3C' },
  { name: 'LangGraph', path: '/skills/langgraph.png', color: '#FF4B4B' },
  { name: 'MCP', path: '/skills/mcp.png', color: '#6366f1' },
  
  // Database & Tools
  { name: 'MongoDB', path: '/skills/mongodb.svg', color: '#16a34a' },
  { name: 'MySQL', path: '/skills/mysql.svg', color: '#00758F' },
  { name: 'Git', path: '/skills/git.svg', color: '#ef4444' },
  { name: 'GitHub', path: '/skills/github.svg', color: '#0f172a' },
];

export default function Skills() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.5]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center py-20 px-8 relative overflow-hidden"
      // style={{ backgroundColor: 'var(--bg-secondary)' }}
      id="skills"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div 
          className="absolute top-20 right-20 w-72 h-72 rounded-full filter blur-3xl"
          style={{ backgroundColor: 'var(--primary)' }}
        />
        <div 
          className="absolute bottom-20 left-20 w-72 h-72 rounded-full filter blur-3xl"
          style={{ backgroundColor: 'var(--accent)' }}
        />
      </div>

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 w-full max-w-6xl"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 
            className="text-5xl md:text-6xl font-bold mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            My Skills
          </h2>
          <div 
            className="w-20 h-1 rounded-full mx-auto md:mx-0"
            style={{ backgroundColor: 'var(--primary)' }}
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap gap-4 justify-center md:justify-start"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <div 
                className="rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center relative overflow-hidden w-28 h-28 border"
                style={{ 
                  backgroundColor: 'var(--bg-primary)',
                  borderColor: 'var(--border-light)'
                }}
              >
                {/* Hover background effect */}
                <motion.div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ backgroundColor: skill.color }}
                />
                
                {/* Icon container with white background for visibility */}
                <motion.div
                  className="relative z-10 w-16 h-16 mb-1 flex items-center justify-center rounded-lg bg-white dark:bg-white p-2"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={skill.path}
                      alt={`${skill.name} icon`}
                      fill
                      className="object-contain"
                      sizes="48px"
                      unoptimized={skill.path.endsWith('.png')}
                      onError={(e) => {
                        // Fallback if image doesn't load
                        const target = e.currentTarget ;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                </motion.div>
                
                {/* Skill name */}
                <p
                  className="relative z-10 text-xs font-medium text-center px-2"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {skill.name}
                </p>

                {/* Accent bar at bottom on hover */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: skill.color }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Always learning and exploring new technologies to build better web experiences.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}