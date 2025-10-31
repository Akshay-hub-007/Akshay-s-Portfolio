'use client';

import { motion } from 'framer-motion';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function Hero() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Wait for theme + DOM to be ready
  if (!mounted) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
      className="flex flex-col justify-center min-h-screen px-8 text-center md:text-left "
      id="hero"
    >
      {/* Background animation */}
      <div className="absolute inset-0 opacity-40">
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl dark:bg-blue-900/30"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-100 rounded-full filter blur-3xl dark:bg-indigo-900/30"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto md:mx-0"
      >
        <motion.p
          variants={itemVariants}
          className="text-sm mb-4 font-mono text-indigo-600 tracking-wide dark:text-indigo-400"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-bold mb-3 text-slate-900 tracking-tight dark:text-slate-100"
        >
          Akshay Kalangi
          <motion.span
            className="inline-block text-indigo-600"
            animate={{ rotate: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            .
          </motion.span>
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold mb-8 text-slate-600 tracking-tight dark:text-slate-300"
        >
          I build things for the web.
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="max-w-2xl mx-auto md:mx-0"
        >
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            I&apos;m a{' '}
            <span className="text-slate-900 font-semibold border-b-2 border-indigo-600 dark:text-slate-100">
              Full Stack Developer
            </span>{' '}
            at{' '}
            <span className="text-slate-900 font-semibold border-b-2 border-blue-600 dark:text-slate-100">
              KL University
            </span>
            , passionate about{' '}
            <span className="text-slate-900 font-semibold border-b-2 border-violet-600 dark:text-slate-100">
              AI
            </span>{' '}
            and building scalable web applications.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 flex gap-4 justify-center md:justify-start"
        >
          <motion.a
            href="#projects"
            className="px-7 py-3.5 bg-indigo-600 text-white rounded-lg font-medium shadow-lg shadow-indigo-600/30 dark:shadow-indigo-800/40"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 25px -5px rgb(79 70 229 / 0.3), 0 8px 10px -6px rgb(79 70 229 / 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="px-7 py-3.5 bg-white text-indigo-600 border-2 border-indigo-600 rounded-lg font-medium dark:bg-transparent dark:text-indigo-300 dark:border-indigo-300"
            whileHover={{ 
              scale: 1.02,
              backgroundColor: "rgb(238 242 255)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
