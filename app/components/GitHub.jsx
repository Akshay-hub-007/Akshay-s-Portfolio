'use client';
import React from 'react';
import { motion } from 'framer-motion';
import GitHubCalendar from 'react-github-calendar';

function GitHub() {
  const username = 'Akshay-hub-007';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Custom theme for GitHub Calendar
  const calendarTheme = {
    light: ['#f1f5f9', '#c7d2fe', '#818cf8', '#6366f1', '#4f46e5'],
    dark: ['#1e293b', '#312e81', '#4f46e5', '#6366f1', '#818cf8'],
  };

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center py-20 px-8 relative overflow-hidden"
    //   style={{ backgroundColor: 'var(--bg-primary)' }}
      id="github"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute top-40 right-20 w-96 h-96 rounded-full filter blur-3xl"
          style={{ backgroundColor: 'var(--accent-cyan)' }}
        />
        <div
          className="absolute bottom-40 left-20 w-96 h-96 rounded-full filter blur-3xl"
          style={{ backgroundColor: 'var(--primary)' }}
        />
      </div>

      <motion.div
        className="relative z-10 w-full max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h2
            className="text-5xl md:text-6xl font-bold mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            GitHub Activity
          </h2>
          <div
            className="w-20 h-1 rounded-full mx-auto mb-4"
            style={{ backgroundColor: 'var(--primary)' }}
          />
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            My contributions and coding activity on GitHub
          </p>
        </motion.div>

        {/* GitHub Calendar */}
        <motion.div
          variants={itemVariants}
          className="mb-12 p-8 rounded-2xl border shadow-lg overflow-x-auto"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderColor: 'var(--border-light)',
          }}
          whileHover={{ y: -4 }}
        >
          <h3
            className="text-2xl font-bold mb-6 text-center"
            style={{ color: 'var(--text-primary)' }}
          >
            📅 Contribution Graph
          </h3>
          <div className="flex justify-center">
            <GitHubCalendar
              username={username}
              colorScheme="light"
              theme={calendarTheme}
              blockSize={12}
              blockMargin={4}
              fontSize={14}
            />
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-6"
          variants={containerVariants}
        >
          {/* GitHub Stats */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group"
          >
            <div
              className="rounded-2xl border shadow-lg overflow-hidden h-full"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-light)',
              }}
            >
              <div
                className="h-2 transition-all duration-300 group-hover:h-3"
                style={{ backgroundColor: 'var(--primary)' }}
              />
              <div className="p-6 flex items-center justify-center">
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&hide_border=true&count_private=true&bg_color=00000000&title_color=6366f1&text_color=64748b&icon_color=818cf8`}
                  alt="GitHub Stats"
                  className="w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* Streak Stats */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group"
          >
            <div
              className="rounded-2xl border shadow-lg overflow-hidden h-full"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-light)',
              }}
            >
              <div
                className="h-2 transition-all duration-300 group-hover:h-3"
                style={{ backgroundColor: 'var(--accent)' }}
              />
              <div className="p-6 flex items-center justify-center">
                <img
                  src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&hide_border=true&background=00000000&ring=6366f1&fire=818cf8&currStreakLabel=6366f1&sideLabels=6366f1&currStreakNum=64748b&sideNums=64748b&dates=64748b`}
                  alt="GitHub Streak"
                  className="w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Top Languages */}
        <motion.div variants={itemVariants} whileHover={{ y: -8, scale: 1.01 }} className="group">
          <div
            className="rounded-2xl border shadow-lg overflow-hidden"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-light)',
            }}
          >
            <div
              className="h-2 transition-all duration-300 group-hover:h-3"
              style={{ backgroundColor: 'var(--accent-cyan)' }}
            />
            <div className="p-6">
              <h3
                className="text-2xl font-bold mb-4 text-center"
                style={{ color: 'var(--text-primary)' }}
              >
                💻 Most Used Languages
              </h3>
              <div className="flex justify-center">
                <img
                  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&hide_border=true&layout=compact&bg_color=00000000&title_color=6366f1&text_color=64748b`}
                  alt="Top Languages"
                  className="w-full max-w-md"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <motion.a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg font-medium text-white shadow-lg"
            style={{ backgroundColor: 'var(--primary)' }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Visit My GitHub Profile
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default GitHub;