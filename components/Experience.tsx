'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    company: "ParaWave",
    location: "Marysville, OH",
    role: "Full Stack Intern",
    period: "May 2025 – August 2025",
    highlights: [
      "Built and optimized a web app with custom Dart actions and widgets, integrating FastAPI and Node.js as backend systems",
      "Leveraged AWS Lambda, RDS, S3, and Glue to automate video streaming workflows using CloudWatch and containerized microservices",
      "Fine-tuned AI models for object detection and segmentation (3 sec avg detection), enhancing computer vision accuracy by 29%",
      "Integrated server with RTMP, RTSP, WebRTC, and HLS protocols for real-time video streaming, enabling low-latency (1-2 sec) playback"
    ],
    color: "purple"
  },
  {
    company: "Persistent Systems Ltd",
    location: "Pune, India",
    role: "Senior Software Engineer",
    period: "April 2024 – July 2024",
    highlights: [
      "Engineered and managed notebooks, views, tables in Databricks (Spark SQL, Python), and procedures in Azure Synapse Analytics",
      "Implemented data load strategies including CTEs and temporary tables in SQL, reducing data redundancy by 50%",
      "Streamlined data workflows via Azure Data Factory (ADF), reducing transfer time by 40%",
      "Developed and maintained unit testing documentation, contributing to a 30% decrease in processing errors"
    ],
    color: "blue"
  },
  {
    company: "Persistent Systems Ltd",
    location: "Pune, India",
    role: "Software Engineer",
    period: "July 2022 – April 2024",
    highlights: [
      "Improved enterprise data warehouse by modifying views, tables, and stored procedures, boosting query performance by 15%",
      "Implemented CI/CD with ADF using JSON for 20+ pipelines, reducing deployment time by 30% and increasing frequency by 25%",
      "Ensured 100% database consistency across environments via comparison and sync using Azure Data Studio, SSMS, and DevOps"
    ],
    color: "pink"
  },
  {
    company: "Persistent Systems Ltd",
    location: "Pune, India",
    role: "Software Engineer Intern",
    period: "February 2022 – July 2022",
    highlights: [
      "Translated SQL server Stored Procedures into DBT models on MySQL and PostgreSQL, ensuring seamless migration",
      "Facilitated the migration of over 30 Tableau reports from SQL Server to Snowflake, resulting in a 30% improvement in reporting efficiency for 50 stakeholders"
    ],
    color: "cyan"
  }
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
            Work Experience
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="relative"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <p className={`text-${exp.color}-400 font-semibold text-lg mb-2`}>
                      {exp.company} • {exp.location}
                    </p>
                    <p className="text-gray-400 text-sm">{exp.period}</p>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <span className={`text-${exp.color}-400 mt-1 flex-shrink-0`}>▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}