'use client'

import { motion } from 'framer-motion'

interface DiferencePoint {
  id: number
  title: string
  description: string
}

interface DiferenceData {
  heading: string
  subheading: string
  points: DiferencePoint[]
}

export function Diference() {
  // Data
  const diferenceData: DiferenceData = {
    heading: 'Lo Que Nos Diferencia',
    subheading: 'Características que nos hacen únicos en el mercado',
    points: [
      {
        id: 1,
        title: 'Enfoque Personalizado',
        description: 'Cada solución se adapta específicamente a las necesidades de tu negocio'
      },
      {
        id: 2,
        title: 'Tecnología de Vanguardia',
        description: 'Utilizamos las herramientas más avanzadas para garantizar resultados óptimos'
      },
      {
        id: 3,
        title: 'Equipo Experto',
        description: 'Nuestros profesionales tienen años de experiencia en la industria'
      },
      {
        id: 4,
        title: 'Soporte Continuo',
        description: 'Te acompañamos en cada paso del proceso, incluso después de la implementación'
      }
    ]
  }

  // Animation variants - Smooth and subtle
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
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

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.section 
      id="diference" 
      className="w-full bg-gray-50 text-gray-900 py-16 md:py-24 font-montserrat"
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
            {diferenceData.heading}
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 font-normal max-w-3xl mx-auto"
            variants={paragraphVariants}
            transition={{ duration: 1.0, ease: "easeOut" }}
          >
            {diferenceData.subheading}
          </motion.p>
        </div>

        {/* Points Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 max-w-6xl mx-auto"
          variants={gridVariants}
        >
          {diferenceData.points.map((point) => (
            <motion.div
              key={point.id}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group"
              variants={cardVariants}
              transition={{ duration: 1.0, ease: "easeOut" }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Number */}
              <motion.div 
                className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 5 }}
              >
                <span className="text-white font-bold text-xl">{point.id}</span>
              </motion.div>
              
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#17293A] group-hover:text-blue-600 transition-colors duration-300">
                {point.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
