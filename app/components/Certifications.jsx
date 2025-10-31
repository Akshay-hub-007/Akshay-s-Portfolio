'use client'
import React from 'react'
import { motion } from 'framer-motion'

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    id: "8c07b37c-979c-4707-8f62-770a1e61c815",
    host: "https://www.credly.com",
  },
  {
    title: "MongoDB Certified Associate Database Administrator",
    id: "3119ac55-008b-4eea-8881-2d70bd270ad2",
    host: "https://www.credly.com",
  },
]

const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="bg-secondary py-16 px-6 text-center">
      <motion.div
        className="max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="text-4xl font-bold text-primary mb-8"
          variants={cardVariants}
        >
          Certifications
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-10 justify-items-center"
          variants={containerVariants}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-primary-light/10 border border-medium rounded-2xl p-6 shadow-lg w-[250px] transition-transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div
                data-iframe-width="200"
                data-iframe-height="270"
                data-share-badge-id={cert.id}
                data-share-badge-host={cert.host}
              ></div>
              <h3 className="text-lg font-semibold text-primary mt-4">
                {cert.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Credly script */}
      <script
        type="text/javascript"
        async
        src="//cdn.credly.com/assets/utilities/embed.js"
      ></script>
    </section>
  )
}

export default Certifications
