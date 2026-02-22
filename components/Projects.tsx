'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: "DigitalAgEdu - AI Curriculum Generation Toolkit",
    shortDescription: "Config-driven Python CLI system to auto-generate structured AI curricula for high school classrooms",
    technologies: ["Python", "Typer", "Pydantic", "Jinja2", "YAML", "CLI"],
    highlights: [
      "Config-driven Python CLI system to auto-generate structured AI curricula",
      "Schema-validated inputs with template-based rendering",
      "End-to-end automation from validated configuration to rendered artifacts",
      "Architected for scalability, testability, and CI/CD readiness"
    ],
    category: "AI/ML",
    githubUrl: "",
    featured: true,
    // image: "/images/digital-ag-leaf.jpg" // Added image
  },
  {
    id: 2,
    title: "Multimodal AI Video Generation",
    shortDescription: "Text-to-video synthesis for personalized behavioral health interventions for children",
    technologies: ["CLIP", "Diffusion Models", "Vision Transformers", "RAG", "ChromaDB", "U-Net"],
    highlights: [
      "Integrated CLIP, 3D VAEs, and Vision Transformers for text-to-video synthesis",
      "Evaluated U-Net/Transformer architectures for behavioral intervention applications",
      "Investigating temporal alignment techniques for consistent gesture representation",
      "Content-aware motion adapters for personalized behavioral health videos"
    ],
    category: "Computer Vision",
    githubUrl: "",
    featured: true
  },
  {
    id: 3,
    title: "Geospatial Depth Estimation using Diffusion Models",
    shortDescription: "Monocular depth estimation for large-scale orthomosaic imagery using Marigold diffusion pipeline",
    technologies: ["Marigold", "Diffusion Models", "DINOv3", "Rasterio", "GeoPandas", "Hugging Face"],
    highlights: [
      "Custom geospatial dataset with 10K+ orthomosaic .tif images",
      "Marigold diffusion pipeline with image tiling for accurate depth estimation",
      "Geo-coordinate, altitude, and spatio-temporal data extraction",
      "DINOv3 and contour masking reduced compute by ~40%"
    ],
    category: "Computer Vision",
    githubUrl: "",
    featured: true
  },
  {
    id: 4,
    title: "AlphaDent - Dental Caries Detection",
    shortDescription: "YOLO-based teeth marking and caries detection system with test-time augmentation",
    technologies: ["YOLO", "SAHI", "PyTorch", "Computer Vision", "OpenCV"],
    highlights: [
      "Achieved 0.38678 mAP@50 on AlphaDent Kaggle competition",
      "Implemented test-time augmentation strategies",
      "Fine-tuned SAM3 for dental pathology detection",
      "Converted datasets from YOLO to COCO format"
    ],
    category: "Computer Vision",
    githubUrl: "",
    featured: true
  },
  {
    id: 5,
    title: "Vehicle Tracking System with Anti-theft Security",
    shortDescription: "IoT-based vehicle tracking system with parental control features",
    technologies: ["IoT", "GPS", "Sensors", "Embedded Systems"],
    highlights: [
      "Published paper on vehicle tracking and security",
      "Anti-theft security implementation",
      "Parental control features",
      "Real-time tracking capabilities"
    ],
    category: "IoT",
    githubUrl: "",
    paperUrl: "#",
    featured: false
  }
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-text-primary mb-16 text-center">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
              >
                <div className="glass-effect rounded-xl p-6 hover:border-accent-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent-primary/20 h-full">
                  {/* Project Image (if exists) */}
                  {project.image && (
                    <div className="mb-4 overflow-hidden rounded-lg">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-accent-primary/20 text-accent-primary rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-accent-primary group-hover:to-accent-secondary group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-accent-secondary/10 text-accent-secondary rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-accent-secondary/10 text-accent-secondary rounded text-xs">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Expanded Details */}
                  {selectedProject === project.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-accent-primary/20 pt-4 mt-4"
                    >
                      <h4 className="text-sm font-semibold text-accent-primary mb-2">Key Highlights:</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-text-secondary text-sm">
                            <span className="text-accent-primary mt-1 flex-shrink-0">▹</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* Links */}
                  <div className="flex gap-4 mt-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-primary hover:text-accent-secondary transition-colors text-sm flex items-center gap-1"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                      </a>
                    )}
                    {project.paperUrl && (
                      <a
                        href={project.paperUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-primary hover:text-accent-secondary transition-colors text-sm flex items-center gap-1"
                        onClick={(e) => e.stopPropagation()}
                      >
                        📄 Paper
                      </a>
                    )}
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