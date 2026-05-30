'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import ImageCarousel from './ImageCarousel'

const ghcImages = [
  '/images/ghc-1.jpg',
  '/images/ghc-2.jpg',
  '/images/ghc-3.jpg',
]

const funFacts = [
  {
    emoji: '🎯',
    title: 'Grace Hopper Celebration 2025',
    description: 'Attended GHC\'25, the world\'s largest gathering of women in tech',
    link: 'https://www.linkedin.com/posts/mrunalhole_ghc25-ghc2025-gracehoppercelebration-activity-7394209734209286144-HQ4C?utm_source=share&utm_medium=member_desktop&rcm=ACoAADOgrLIBqfS9U5VlmM4_8l1tUKbz7zf5vI0' // Replace with actual link
  },
  {
    emoji: '👩‍💻',
    title: 'SWE LOCAL Columbus 2026',
    description: 'Upcoming attendance at Society of Women Engineers LOCAL Columbus',
    link: '' // You'll add this later
  },
  {
    emoji: '🌱',
    title: 'AI Presidential Challenge 2025-26',
    description: 'Led digital agriculture AI project at Columbus School for Girls on soybean leaf segmentation',
    link: 'https://www.linkedin.com/posts/icicle-ai-ci_the-nsf-icicle-ai-institute-is-excited-to-activity-7388985663288692736-oKwh?utm_source=share&utm_medium=member_desktop&rcm=ACoAADOgrLIBqfS9U5VlmM4_8l1tUKbz7zf5vI0' // Replace with actual link
  },
  {
    emoji: '💼',
    title: 'Volunteer Work at Persistent Systems',
    description: 'Contributing to community initiatives and mentoring programs',
    link: 'https://www.linkedin.com/posts/mrunalhole_educationmatters-givingback-socialimpact-activity-7127278584464822272-reMv?utm_source=share&utm_medium=member_desktop&rcm=ACoAADOgrLIBqfS9U5VlmM4_8l1tUKbz7zf5vI0' // Replace with actual link
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-light text-text-primary mb-16 text-center">
            My Story
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left: About Text - UPDATED WITH YOUR NEW TEXT */}
            <div className="glass-effect rounded-2xl p-8 md:p-10">
              <h3 className="text-2xl font-normal text-text-primary mb-6">
                Rediscovering Purpose through Code and Creativity
              </h3>
              <p className="text-base text-text-secondary leading-relaxed mb-4">
                Ever since I started my Master's at <span className="text-accent-primary">The Ohio State University</span>, I've rediscovered myself. I fell in love with coding again and began focusing on making small, consistent improvements every day, while creating a beautiful life.
              </p>
              <p className="text-base text-text-secondary leading-relaxed mb-4">
                I enjoy building AI-driven systems and data-centric applications, and I'm constantly exploring ways to turn ideas into practical solutions.
              </p>
              <p className="text-base text-text-secondary leading-relaxed mb-4">
                Outside of technology, I love <span className="text-accent-primary">travelling, photography, swimming, dance, and painting</span>, things that help me stay curious and creative. 
              </p>
              <p className="text-base text-text-secondary leading-relaxed">
                Grateful for the journey and excited for what's ahead.
              </p>
            </div>

            {/* Right: GHC Carousel */}
            <div>
              <h3 className="text-xl font-normal text-text-primary mb-4 text-center">
                From Grace Hopper Celebration 2025
              </h3>
              <ImageCarousel images={ghcImages} alt="GHC 2025" />
            </div>
          </div>

          {/* Beyond the Resume - UPDATED WITH YOUR 4 ITEMS */}
          <div className="mb-16">
            <h3 className="text-3xl font-light text-text-primary mb-8 text-center">
              Beyond the Resume
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {funFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="glass-effect rounded-xl p-6 text-center hover:border-accent-primary/30 transition-all duration-300 group"
                >
                  <div className="text-4xl mb-3">{fact.emoji}</div>
                  <h4 className="text-lg font-medium text-text-primary mb-2">{fact.title}</h4>
                  <p className="text-sm text-text-muted leading-relaxed mb-3">{fact.description}</p>
                  
                  {/* LinkedIn Link - only show if link exists */}
                  {fact.link && (
                    <a
                      href={fact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-secondary transition-colors duration-300 text-sm"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      View Post
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

        
          {/* Education - REDESIGNED TIMELINE */}
          <div>
            <h3 className="text-3xl font-light text-text-primary mb-12 text-center">
              Education
            </h3>
            
            {/* Timeline Container */}
            <div className="relative max-w-5xl mx-auto">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-accent-secondary via-accent-primary to-accent-secondary transform -translate-y-1/2 hidden md:block"></div>
              
              {/* Education Cards */}
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 relative">
                {/* Ohio State University */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                <div className="hidden md:block absolute top-1/2 right-0 w-6 h-6 bg-accent-primary rounded-full border-4 border-dark-bg transform translate-x-1/2 -translate-y-1/2 z-10 shadow-lg shadow-accent-primary/50"></div>                  
                  <div className="glass-effect rounded-xl p-6 hover:border-accent-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent-primary/20 h-full">
                    {/* University Logo Area - You can add logo here */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-accent-primary/20 rounded-lg flex items-center justify-center text-2xl">
                        🎓
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-xl font-semibold text-text-primary mb-1">The Ohio State University</h4>
                        <p className="text-accent-primary font-medium text-sm">Master of Science, Computer Science</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-text-muted text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>August 2024 - May 2026</span>
                      </div>
                      <div className="flex items-center gap-2 text-accent-primary text-sm font-medium">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        <span>CGPA: 3.82/4.0</span>
                      </div>
                    </div>
                    
                    <div className="pt-3 border-t border-accent-primary/20">
                      <p className="text-xs text-text-muted uppercase tracking-wide mb-2">Key Courses</p>
                      <div className="flex flex-wrap gap-2">
                        {['Advanced Operating Systems', 'Speech & Natural Language Processing', 'Artificial Intelligence', 'Computer Vision', 'Data Mining'].map((course, idx) => (
                          <span key={idx} className="px-2 py-1 bg-accent-primary/10 text-accent-primary rounded text-xs">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Pune University */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                <div className="hidden md:block absolute top-1/2 left-0 w-6 h-6 bg-accent-primary rounded-full border-4 border-dark-bg transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-lg shadow-accent-secondary/50"></div>                  
                  <div className="glass-effect rounded-xl p-6 hover:border-accent-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent-secondary/20 h-full">
                    {/* University Logo Area */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-accent-primary/20 rounded-lg flex items-center justify-center text-2xl">
                        🎓
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-xl font-semibold text-text-primary mb-1">Savitribai Phule Pune University</h4>
                        <p className="text-accent-primary font-medium text-sm">Bachelor of Engineering, Information Technology</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-text-muted text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>August 2018 - April 2022</span>
                      </div>
                      <div className="flex items-center gap-2 text-accent-primary text-sm font-medium">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        <span>CGPA: 9.30/10</span>
                      </div>
                    </div>
                    
                    <div className="pt-3 border-t border-accent-primary/20">
                      <p className="text-xs text-text-muted uppercase tracking-wide mb-2">Key Courses</p>
                      <div className="flex flex-wrap gap-2">
                        {['Operating Systems', 'Theory of Computation', 'Database Management', 'OOP'].map((course, idx) => (
                          <span key={idx} className="px-2 py-1 bg-accent-primary/10 text-accent-primary rounded text-xs">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}