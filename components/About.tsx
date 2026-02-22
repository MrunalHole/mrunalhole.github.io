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
    title: 'Conference Enthusiast',
    description: 'Attended GHC\'25 and excited for SWE LOCAL Columbus \'26!',
  },
  {
    emoji: '🌱',
    title: 'Digital Agriculture',
    description: 'Led an AI project at Columbus School for Girls on soybean leaf segmentation',
  },
  {
    emoji: '💡',
    title: 'Forever Learning',
    description: 'Currently exploring multimodal AI and geospatial depth estimation',
  },
  {
    emoji: '🎨',
    title: 'Beyond Code',
    description: 'When I\'m not coding, you\'ll find me exploring new tech, attending conferences, or planning my next project',
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
            {/* Left: About Text */}
            <div className="glass-effect rounded-2xl p-8 md:p-10">
              <h3 className="text-2xl font-normal text-text-primary mb-6">
                Bridging Research & Real Impact
              </h3>
              <p className="text-base text-text-secondary leading-relaxed mb-4">
                At <span className="text-accent-primary">The Ohio State University</span>, I'm working on everything from automated AI curriculum generation for high schools to multimodal video synthesis for behavioral health. 
              </p>
              <p className="text-base text-text-secondary leading-relaxed mb-4">
                My background spans <span className="text-accent-secondary">data engineering at Persistent Systems</span>—where I optimized enterprise data warehouses, built CI/CD pipelines, and reduced processing errors by 30%—and cutting-edge computer vision research in geospatial analysis and medical imaging.
              </p>
              <p className="text-base text-text-secondary leading-relaxed">
                I'm actively seeking roles where I can combine my passion for <span className="text-accent-primary">data systems</span>, <span className="text-accent-secondary">ML engineering</span>, and building tools that genuinely help people.
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

          {/* Fun Facts */}
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
                  className="glass-effect rounded-xl p-6 text-center hover:border-accent-primary/30 transition-all duration-300"
                >
                  <div className="text-4xl mb-3">{fact.emoji}</div>
                  <h4 className="text-lg font-medium text-text-primary mb-2">{fact.title}</h4>
                  <p className="text-sm text-text-muted leading-relaxed">{fact.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-3xl font-light text-text-primary mb-8 text-center">
              Education
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="glass-effect rounded-xl p-6"
              >
                <h4 className="text-xl font-medium text-text-primary mb-2">The Ohio State University</h4>
                <p className="text-accent-primary font-medium mb-2">Master of Science, Computer Science</p>
                <p className="text-text-muted mb-2">August 2024 - May 2026</p>
                <p className="text-text-secondary mb-3">CGPA: 3.82/4.0</p>
                <p className="text-sm text-text-muted">
                  Courses: Speech and Language Processing, Artificial Intelligence, Data Mining
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="glass-effect rounded-xl p-6"
              >
                <h4 className="text-xl font-medium text-text-primary mb-2">Savitribai Phule Pune University</h4>
                <p className="text-accent-secondary font-medium mb-2">Bachelor of Engineering, Information Technology</p>
                <p className="text-text-muted mb-2">August 2018 - June 2022</p>
                <p className="text-text-secondary mb-3">CGPA: 9.30/10</p>
                <p className="text-sm text-text-muted">
                  Courses: Operating Systems, Theory of Computation, Database Management, OOP
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}