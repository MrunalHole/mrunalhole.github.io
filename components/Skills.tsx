'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["Python", "C", "C++", "Java", "R", "SQL", "JavaScript", "HTML5", "CSS3"],
  },
  {
    category: "ML & AI Frameworks",
    skills: ["PyTorch", "TensorFlow", "Pandas", "NumPy", "Scikit-learn", "OpenCV", "Hugging Face", "Langchain"],
  },
  {
    category: "Data Engineering",
    skills: ["Databricks", "Snowflake", "Apache Spark", "Azure Data Factory", "Azure Synapse", "Airflow", "SQL Server"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "Git", "Azure DevOps", "CI/CD"],
  },
  {
    category: "Databases & Tools",
    skills: ["PostgreSQL", "MongoDB", "Tableau", "Power BI", "Hadoop", "NoSQL", "RDBMS"],
  },
  {
    category: "Backend & APIs",
    skills: ["Node.js", "FastAPI", "Django", "Spring Boot", "RESTful API", "Kafka"],
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
          {/* FIXED: Consistent heading style matching other sections */}
          <h2 className="text-4xl md:text-5xl font-light text-text-primary mb-16 text-center">
            Technical Skills
          </h2>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass-effect rounded-xl p-6 hover:border-accent-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent-primary/20"
              >
                {/* FIXED: White headings instead of purple/pink */}
                <h3 className="text-lg font-semibold text-text-primary mb-4">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-accent-primary/10 text-accent-primary rounded-full text-sm hover:bg-accent-primary/20 transition-all duration-300 cursor-default"
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