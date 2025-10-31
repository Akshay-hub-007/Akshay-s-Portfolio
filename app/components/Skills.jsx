'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  { name: 'CSS3', icon: '🎨', color: 'bg-blue-500' },
  { name: 'Express', icon: 'ex', color: 'bg-slate-700' },
  { name: 'Git', icon: '📦', color: 'bg-red-500' },
  { name: 'GitHub', icon: '🐙', color: 'bg-black' },
  { name: 'HTML5', icon: '🌐', color: 'bg-orange-500' },
  { name: 'JavaScript', icon: 'JS', color: 'bg-yellow-400' },
  { name: 'MongoDB', icon: '🍃', color: 'bg-green-600' },
  { name: 'Material UI', icon: 'M', color: 'bg-blue-600' },
  { name: 'Next.js', icon: 'N', color: 'bg-black' },
  { name: 'Node.js', icon: '⬢', color: 'bg-green-500' },
  { name: 'React', icon: '⚛', color: 'bg-cyan-400' },
  { name: 'Redux', icon: '🔄', color: 'bg-purple-600' },
  { name: 'Figma', icon: '🎯', color: 'bg-pink-500' },
  { name: 'Tailwind', icon: '💨', color: 'bg-cyan-500' },
  { name: 'TypeScript', icon: 'TS', color: 'bg-blue-600' },
  { name: 'Spring Boot', icon: '🍀', color: 'bg-green-500' },
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
      className="min-h-screen flex flex-col items-center justify-center py-20 px-8 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden dark:from-slate-900 dark:to-slate-950"
      id="skills"
    >
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 w-full max-w-6xl"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-3 dark:text-slate-100">
            My Skills
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap gap-3 justify-center md:justify-start"
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
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center relative overflow-hidden w-20 h-20 dark:bg-slate-800">
                {/* Hover background effect */}
                <div className={`absolute inset-0 ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Icon */}
                <motion.div
                  className="relative z-10 text-3xl mb-2"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  {skill.icon.length > 2 ? (
                    <span className="text-xl font-bold text-slate-700 dark:text-slate-200">{skill.icon}</span>
                  ) : (
                    skill.icon
                  )}
                </motion.div>
                
                {/* Skill name - hidden by default, shown on hover */}
                <motion.p
                  className="relative z-10 text-xs font-medium text-slate-600 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:text-slate-300"
                  initial={{ y: 5 }}
                  whileHover={{ y: 0 }}
                >
                  {skill.name}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}