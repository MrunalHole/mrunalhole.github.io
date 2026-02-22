'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["Python", "C", "C++", "Java", "R", "SQL", "JavaScript", "HTML5", "CSS3"],
    color: "purple"
  },
  {
    category: "ML & AI Frameworks",
    skills: ["PyTorch", "TensorFlow", "Pandas", "NumPy", "Scikit-learn", "OpenCV", "Hugging Face", "Langchain"],
    color: "pink"
  },
  {
    category: "Data Engineering",
    skills: ["Databricks", "Snowflake", "Apache Spark", "Azure Data Factory", "Azure Synapse", "Airflow", "SQL Server"],
    color: "blue"
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "Git", "Azure DevOps", "CI/CD"],
    color: "cyan"
  },
  {
    category: "Databases & Tools",
    skills: ["PostgreSQL", "MongoDB", "Tableau", "Power BI", "Hadoop", "NoSQL", "RDBMS"],
    color: "purple"
  },
  {
    category: "Backend & APIs",
    skills: ["Node.js", "FastAPI", "Django", "Spring Boot", "RESTful API", "Kafka"],
    color: "pink"
  }
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
            Technical Skills
          </h2>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <h3 className={`text-lg font-bold text-${category.color}-400 mb-4`}>
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/5 text-gray-300 rounded-full text-sm hover:bg-purple-500/20 hover:text-purple-300 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}