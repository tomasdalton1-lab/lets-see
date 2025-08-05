'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface SolutionPhase {
  id: number
  title: string
  description: string
  icon: string
}

export function Solution() {
  const phases: SolutionPhase[] = [
    {
      id: 1,
      title: "Diagnóstico Estratégico",
      description: "Analizamos tu estructura actual y identificamos oportunidades de optimización fiscal y legal.",
      icon: "/icons/diagnostic.svg"
    },
    {
      id: 2,
      title: "Arquitectura Unificada",
      description: "Diseñamos una estructura legal y fiscal integrada que escale con tu crecimiento.",
      icon: "/icons/architecture.svg"
    },
    {
      id: 3,
      title: "Implementación y Monitoreo",
      description: "Ejecutamos la estrategia y mantenemos un seguimiento continuo para garantizar el cumplimiento.",
      icon: "/icons/implementation.svg"
    }
  ]

  // Animation variants - Smooth and subtle
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const headingVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  }

  const paragraphVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0 }
  }

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5
      }
    }
  }

  const phaseVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }

  return (
    <motion.section
      id="solution"
      className="w-full bg-white text-gray-900 py-16 md:py-24 font-montserrat"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-[#17293A]"
            variants={headingVariants}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            Nuestra Metodología Probada
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 font-normal max-w-3xl mx-auto"
            variants={paragraphVariants}
            transition={{ duration: 1.0, ease: "easeOut" }}
          >
            Un proceso estructurado en tres fases que transforma la complejidad regulatoria en tu ventaja competitiva sostenible.
          </motion.p>
        </div>

        {/* Timeline */}
        <motion.div 
          className="max-w-5xl mx-auto"
          variants={timelineVariants}
        >
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-400 hidden md:block"></div>
            
            {/* Phases */}
            <div className="space-y-12 md:space-y-16">
              {phases.map((phase, index) => (
                <motion.div
                  key={phase.id}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  variants={phaseVariants}
                  transition={{ duration: 1.0, ease: "easeOut" }}
                >
                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <div className={`${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                      <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-[#17293A]">
                        {phase.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon */}
                  <motion.div 
                    className="relative z-10 bg-white border-4 border-blue-500 rounded-full p-6 shadow-lg"
                    variants={iconVariants}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">{phase.id}</span>
                    </div>
                  </motion.div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
