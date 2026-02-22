'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Hero() {
  // Add state for language toggle
  const [isGerman, setIsGerman] = useState(false)

  // Toggle between English and German every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsGerman((prev) => !prev)
    }, 2000) // Change language every 2 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Mrunal Hole"
          fill
          // CHANGE 1: Move image left - adjust object-position
          // Try: object-left, object-[30%], object-[40%] to shift image left
          // RESPONSIVE: Different positions for different screen sizes
          className="object-cover object-[90%] sm:object-[70%] md:object-[50%] lg:object-[40%]"
          // object-[90%] on mobile (very right)
          // object-[70%] on small tablets
          // object-[50%] on medium screens  
          // object-[40%] on large screens
          // Alternative: className="object-cover object-left"
          priority
          quality={90}
        />
        
        {/* CHANGE 2: Make background clearer - reduce overlay opacity */}
        {/* Current overlay - dark */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/70 via-dark-bg/50 to-dark-bg/70" /> */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/50 via-dark-bg/30 to-dark-bg/50" />
        {/* Try lighter: from-dark-bg/60 via-dark-bg/40 to-dark-bg/60 */}
        {/* Or even lighter: from-dark-bg/50 via-dark-bg/30 to-dark-bg/50 */}
        
        <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-transparent to-accent-secondary/10" />
      </div>

      {/* CHANGE 3: Shift text to the right */}
      {/* Add ml-auto and max-w-2xl to push content right */}
      {/* RESPONSIVE: Adjust padding for different screen sizes */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          // Text positioning: Try these options
          // className="text-right max-w-2xl ml-auto mr-8"
          // Option 1: Remove right margin
          // className="text-right max-w-2xl ml-auto"

          // // Option 2: Reduce right margin
          // className="text-right max-w-2xl ml-auto mr-2"

          // // Option 3: Increase max width
          // className="text-right max-w-3xl ml-auto mr-8"

          // // Option 4: Increase max width + reduce margin
          // className="text-right max-w-20xl ml-auto mr-0"
          
          // RESPONSIVE VERSION (current):
          // Mobile: centered text, full width
          // Tablet+: right-aligned with proper max-width
          className="text-center sm:text-right w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl sm:ml-auto mr-0 px-2 sm:px-0"
          // Alternative (centered): className="text-center max-w-4xl mx-auto"
          // Alternative (left aligned): className="text-left max-w-2xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            // RESPONSIVE font sizes added
            // Mobile: 2xl, Tablet: 4xl, Desktop: 6xl, Large: 7xl
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light text-text-primary mb-4 sm:mb-6 leading-tight"
            // Original: className="text-4xl md:text-6xl lg:text-7xl font-light text-text-primary mb-6"
          >
            {/* Animated text that switches between English and German */}
            <motion.span
              key={isGerman ? 'german' : 'english'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              {isGerman ? 'Hallo! Ich bin' : "Hey! I'm"}
            </motion.span>{' '}
            {/* CHANGE 4: Lemon yellow color for name */}
            {/* <span className="text-yellow-300 font-normal">
              Mrunal Hole
            </span> */}
            {/* Alternative white color (uncomment to try): */}
            {/* RESPONSIVE: Force line break on mobile, inline on desktop */}
            <span className="text-white font-light block sm:inline">Mrunal Hole</span>
            {/* block = new line on mobile, inline = same line on desktop */}
          </motion.h1>

          {/* CHANGE 5: Minimal subtitle - just 1-2 sentences */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            // className="text-xl md:text-2xl text-text-primary mb-10 leading-relaxed"
            // OPTION 2: Higher opacity white text (uncomment to try)
            // RESPONSIVE font sizes added
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white font-medium mb-6 sm:mb-8 md:mb-10 leading-relaxed"
            // Original: className="text-xl md:text-2xl text-white font-medium mb-10 leading-relaxed"
          >
            {/* OPTION 1: Text with background (like button style) - uncomment to try */}
            {/* <span className="bg-accent-primary/90 px-4 py-2 rounded-lg inline-block">
              Building AI systems that turn complex research into real-world solutions.
            </span> */}
            
            {/* OPTION 2: Plain text with higher opacity (current) */}
            Building AI systems that turn complex research into real-world solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            // Current: Left-aligned (items-start)
            // className="flex flex-col sm:flex-row gap-4 items-start"
            // Alternative: Right-aligned (uncomment to try)
            // className="flex flex-col sm:flex-row gap-4 items-start justify-end"
            
            // RESPONSIVE VERSION (current):
            // Mobile: centered stack, Desktop: right-aligned row
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center sm:items-start sm:justify-end"
            // Alternative: Center-aligned (uncomment to try)
            // className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <Link
              href="#projects"
              // RESPONSIVE: Full width on mobile, auto width on desktop
              className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-white text-accent-primary rounded-lg font-medium hover:bg-accent-primary hover:text-white transition-all duration-300 transform hover:scale-105 text-center"
              // Original: className="px-8 py-3 bg-white text-accent-primary rounded-lg font-medium hover:bg-accent-primary hover:text-white transition-all duration-300 transform hover:scale-105"

              // className="px-8 py-3 bg-gradient-to-r from-accent-primary to-accent-secondary text-white rounded-lg font-medium hover:shadow-lg hover:shadow-accent-primary/30 transition-all duration-300 transform hover:scale-105"
            >
              Check Out My Work
            </Link>
            
            {/* Current: Gradient background */}
            {/* <Link
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-accent-primary to-accent-secondary text-white rounded-lg font-medium hover:shadow-lg hover:shadow-accent-primary/30 transition-all duration-300 transform hover:scale-105"
            >
              Let's Connect
            </Link> */}
            
            {/* Alternative: White background (uncomment to try) */}
            <Link
              href="#contact"
              // RESPONSIVE: Full width on mobile, auto width on desktop
              className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-white text-accent-primary rounded-lg font-medium hover:bg-accent-primary hover:text-white transition-all duration-300 transform hover:scale-105 text-center"
              // Original: className="px-8 py-3 bg-white text-accent-primary rounded-lg font-medium hover:bg-accent-primary hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Let's Connect
            </Link>
            
            {/* Alternative: Border style (uncomment to try) */}
            {/* <Link
              href="#contact"
              className="px-8 py-3 border-2 border-accent-primary text-accent-primary rounded-lg font-medium hover:bg-accent-primary hover:text-white transition-all duration-300"
            >
              Let's Connect
            </Link> */}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            // Current: Left-aligned
            // className="flex gap-6 mt-12"
            // Alternative: Right-aligned (uncomment to try)
            // className="flex gap-6 mt-12 justify-end"
            
            // RESPONSIVE VERSION (current):
            // Mobile: centered, Desktop: right-aligned
            className="flex gap-4 sm:gap-6 mt-8 sm:mt-12 justify-center sm:justify-end"
            // Alternative: Center-aligned (uncomment to try)
            // className="flex gap-6 mt-12 justify-center"
          >
            <a
              href="https://github.com/MrunalHole"
              target="_blank"
              rel="noopener noreferrer"
              // Current: Muted white with lower opacity
              className="text-white hover:text-yellow-300 transition-colors duration-300"
              // Alternative: Full white (uncomment to try)
              // className="text-white hover:text-yellow-300 transition-colors duration-300"
              aria-label="GitHub"
            >
              {/* RESPONSIVE icon size */}
              <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            </a>
            
            <a
              href="https://www.linkedin.com/in/mrunalhole/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              {/* RESPONSIVE icon size */}
              <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            <a
              href="mailto:hole.17@osu.edu"
              className="text-white hover:text-yellow-300 transition-colors duration-300"
              aria-label="Email"
            >
              {/* RESPONSIVE icon size */}
              <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          // Current: Centered
          // className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          // Right-aligned (below icons):
          // className="absolute bottom-10 right-(-20) md:right-16"
            // Position it to align with center icon
            // className="absolute bottom-10 right-20 md:right-24"
            // Try these values to move it left:
            // className="absolute bottom-10 right-24 md:right-28"
            // className="absolute bottom-10 right-28 md:right-32"
            // className="absolute bottom-10 right-32 md:right-36"
          
          // RESPONSIVE VERSION (current):
          // Mobile: centered at bottom
          // Desktop: right-aligned below icons
          className="absolute bottom-8 sm:bottom-10 left-1/2 sm:left-auto sm:right-[4.5rem] md:right-[5.5rem] transform -translate-x-1/2 sm:translate-x-0"
          // className="absolute bottom-8 sm:bottom-10 left-1/2 sm:left-auto sm:right-24 md:right-28 transform -translate-x-1/2 sm:translate-x-0"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            // Updated: Full white opacity
            className="text-white"
          >
            {/* RESPONSIVE icon size */}
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}