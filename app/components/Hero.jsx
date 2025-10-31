'use client';

import { motion } from 'framer-motion';

function Hero() {
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
      className="relative flex flex-col justify-center min-h-screen px-8 text-center md:text-left overflow-hidden"
      id="hero"
            style={{ backgroundColor: 'var(--bg-primary)' }}

    >
      {/* Background animation */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 rounded-full filter blur-3xl"
          style={{ background: 'var(--accent-blue)' }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full filter blur-3xl"
          style={{ background: 'var(--primary)' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
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
          className="text-sm mb-4 font-mono tracking-wide"
          style={{ color: 'var(--primary)' }}
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-bold mb-3 tracking-tight"
          style={{ color: 'var(--text-primary)' }}
        >
          Akshay Kalangi
          <motion.span
            className="inline-block"
            style={{ color: 'var(--primary)' }}
            animate={{ rotate: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            .
          </motion.span>
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold mb-8 tracking-tight"
          style={{ color: 'var(--text-secondary)' }}
        >
          I build things for the web.
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="max-w-2xl mx-auto md:mx-0"
        >
          <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            I&apos;m a{' '}
            <span className="font-semibold border-b-2" style={{ 
              color: 'var(--text-primary)', 
              borderColor: 'var(--primary)' 
            }}>
              Full Stack Developer
            </span>{' '}
            at{' '}
            <span className="font-semibold border-b-2" style={{ 
              color: 'var(--text-primary)', 
              borderColor: 'var(--accent-blue)' 
            }}>
              KL University
            </span>
            , passionate about{' '}
            <span className="font-semibold border-b-2" style={{ 
              color: 'var(--text-primary)', 
              borderColor: 'var(--accent)' 
            }}>
              AI
            </span>{' '}
            and building scalable web applications.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-wrap gap-4 justify-center md:justify-start"
        >
          <motion.a
            href="#projects"
            className="px-7 py-3.5 text-white rounded-lg font-medium shadow-lg"
            style={{ 
              background: 'var(--primary)',
              boxShadow: '0 10px 15px -3px rgba(99, 102, 241, 0.3)'
            }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 25px -5px rgba(99, 102, 241, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="px-7 py-3.5 border-2 rounded-lg font-medium bg-secondary"
            style={{ 
              color: 'var(--primary)',
              borderColor: 'var(--primary)',
              backgroundColor: 'var(--bg-secondary)'
            }}
            whileHover={{ 
              scale: 1.02,
              backgroundColor: 'var(--bg-tertiary)'
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