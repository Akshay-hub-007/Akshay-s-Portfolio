'use client'
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    id: "8c07b37c-979c-4707-8f62-770a1e61c815",
    host: "https://www.credly.com",
    issuer: "Amazon Web Services",
    date: "September 2025",
    color: "#FF9900",
  },
  {
    title: "MongoDB Certified Associate Database Administrator",
    id: "3119ac55-008b-4eea-8881-2d70bd270ad2",
    host: "https://www.credly.com",
    issuer: "MongoDB",
    date: "March 2025",
    color: "#00ED64",
  },
  {
    title: "Oracle Cloud Infrastructure Generative AI",
    id: "D206B379B486CCCAF719A0AA20489C423825A4AC0B92934BAF79767CFFA20E25",
    host: "https://catalog-education.oracle.com",
    issuer: "Oracle",
    date: "November 2025",
    color: "#F80000",
    isOracle: true
  }
]

const Certifications = () => {
  useEffect(() => {
    // Load Credly script
    const script = document.createElement('script');
    script.src = '//cdn.credly.com/assets/utilities/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }
    },
  }

  return (
    <section 
      className="min-h-screen flex flex-col items-center justify-center py-20 px-8 relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
      id="certifications"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div 
          className="absolute top-20 right-20 w-72 h-72 rounded-full filter blur-3xl"
          style={{ backgroundColor: 'var(--accent)' }}
        />
        <div 
          className="absolute bottom-20 left-20 w-72 h-72 rounded-full filter blur-3xl"
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
        <motion.div
          variants={cardVariants}
          className="mb-16 text-center"
        >
          <h2 
            className="text-5xl md:text-6xl font-bold mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            Certifications
          </h2>
          <div 
            className="w-20 h-1 rounded-full mx-auto mb-4"
            style={{ backgroundColor: 'var(--primary)' }}
          />
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Professional certifications that validate my expertise
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div 
                className="rounded-2xl overflow-hidden border shadow-lg hover:shadow-2xl transition-all duration-300 h-full"
                style={{ 
                  backgroundColor: 'var(--bg-primary)',
                  borderColor: 'var(--border-light)'
                }}
              >
                {/* Top accent bar */}
                <motion.div 
                  className="h-2"
                  style={{ backgroundColor: cert.color }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                />

                {/* Card Content */}
                <div className="p-8">
                  {/* Icon/Badge Area */}
                  <div className="flex items-center justify-between mb-6">
                    {/* <motion.div
                      className="text-5xl"
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {cert.icon}
                    </motion.div> */}
                    <div 
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: 'var(--bg-tertiary)',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      {cert.date}
                    </div>
                  </div>

                  {/* Badge Embed */}
                  <div className="mb-6 flex justify-center">
                    {cert.isOracle ? (
                      <div className="w-[150px] h-[180px] flex items-center justify-center bg-white rounded-lg p-4">
                        <div className="relative w-full h-full">
                          <Image 
                            src="/badges/oracle.png" 
                            alt="Oracle Certification Badge"
                            fill
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                      </div>
                    ) : ( 
                      <div
                        data-iframe-width="150"
                        data-iframe-height="180"
                        data-share-badge-id={cert.id}
                        data-share-badge-host={cert.host}
                      ></div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-xl font-bold mb-2 leading-tight"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <p 
                    className="text-sm mb-4"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Issued by <span className="font-semibold">{cert.issuer}</span>
                  </p>

                  {/* Verify Button */}
                  <motion.a
                    href={cert.isOracle 
                      ? `${cert.host}/ords/certview/sharebadge?id=${cert.id}`
                      : `${cert.host}/badges/${cert.id}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all"
                    style={{ color: 'var(--primary)' }}
                    whileHover={{ x: 4 }}
                  >
                    Verify Credential
                    <svg 
                      className="w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </motion.a>
                </div>

                {/* Bottom shine effect on hover */}
                <motion.div
                  className="h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ 
                    background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)`
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p 
            className="text-lg"
            style={{ color: 'var(--text-secondary)' }}
          >
            Continuously learning and expanding my skill set
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Certifications