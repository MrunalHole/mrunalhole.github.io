'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const highlights = [
  {
    type: 'Conference',
    title: 'Grace Hopper Celebration 2025',
    description: 'Attended GHC\'25, the world\'s largest gathering of women and non-binary technologists',
    date: '2025',
    icon: '🎯'
  },
  {
    type: 'Event',
    title: 'Society of Women Engineers LOCAL Columbus',
    description: 'Upcoming attendance at SWE LOCAL Columbus 2026',
    date: '2026',
    icon: '👩‍💻'
  },
  {
    type: 'Certification',
    title: 'Microsoft Azure Fundamentals (AZ-900)',
    description: 'Certified in Microsoft Azure cloud fundamentals',
    date: 'Certified',
    icon: '☁️',
    link: '#'
  },
  {
    type: 'Certification',
    title: 'SnowPro Core Certification',
    description: 'Snowflake Certified Data Cloud Core (COF-CO2)',
    date: 'Certified',
    icon: '❄️',
    link: '#'
  },
  {
    type: 'Publication',
    title: 'Vehicle Tracking System with Anti-theft Security',
    description: 'Published research on IoT-based vehicle tracking with parental control features',
    date: 'May 2022',
    icon: '📄',
    link: '#'
  }
]

export default function Highlights() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="highlights" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
            Highlights & Achievements
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {highlight.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium">
                          {highlight.type}
                        </span>
                        <span className="text-gray-400 text-sm">{highlight.date}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                        {highlight.title}
                      </h3>
                      
                      <p className="text-gray-300 leading-relaxed">
                        {highlight.description}
                      </p>

                      {highlight.link && (
                        <a
                          href={highlight.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 mt-3 text-purple-400 hover:text-pink-400 transition-colors duration-300 text-sm"
                        >
                          View Details
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}