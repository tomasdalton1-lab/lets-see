'use client'

import { motion } from 'framer-motion'

interface PainPoint {
  title: string
  text: string
}

export function Problem() {
  const painPoints: PainPoint[] = [
    {
      title: 'Fronteras Regulatorias',
      text: 'Cada nuevo mercado es un laberinto. Operar sin proyectar a futuro o aplicando viejos paradigmas convierte un lanzamiento prometedor en un negocio inviable por costos fiscales inesperados.'
    },
    {
      title: 'Tu Ronda de Inversión en Juego',
      text: 'Un futuro Due Diligence te preocupa. Sabes que una estructura estandarizada no es un manual mágico, y te preguntas si tu IP, revenue recognition y precios de transferencia están realmente diseñados para atraer y cerrar tu próxima ronda.'
    },
    {
      title: 'El Costo Real de la Burocracia',
      text: 'El mayor desaprovechamiento de oportunidades es tu tiempo. Dedicas tu energía a navegar la complejidad, en lugar de enfocarte 100% en tu producto, tu equipo y tu visión.'
    }
  ]

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

  const cardsContainerVariants = {
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

  const glowBarVariants = {
    initial: { scaleX: 0 },
    hover: { scaleX: 1 }
  }

  return (
    <motion.section 
      id="problem" 
      className="w-full bg-gradient-to-b from-[#17293A] to-[#0d1a25] text-white py-16 md:py-24 font-montserrat elementor-section"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 elementor-container">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6"
            variants={headingVariants}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <span className="relative inline-block hover:text-blue-400 transition-colors duration-300">
              Escalas a gran velocidad.<br /> ¿Sobre qué base?
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 font-normal"
            variants={paragraphVariants}
            transition={{ duration: 1.0, ease: "easeOut" }}
          >
            Una base débil, improvisada y genérica crea una doble amenaza: la ineficiencia fiscal que consume tu runway, y los <strong>"cisnes negros"</strong> que pueden destruir tu visión a futuro.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          variants={cardsContainerVariants}
        >
          {painPoints.map((point, index) => (
            <motion.div 
              key={index} 
              className="elementor-column unidades bg-gray-900 rounded-2xl p-6 md:p-8 flex flex-col h-full relative overflow-hidden"
              variants={cardVariants}
              whileHover="hover"
              initial="initial"
              transition={{ duration: 1.0, ease: "easeOut" }}
            >
              {/* Animated top border glow */}
              <motion.div 
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-blue-400 origin-left"
                variants={glowBarVariants}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
              
              {/* Card content */}
              <div className="card-content h-full w-full flex flex-col relative z-10">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-400">
                  {point.title}
                </h3>
                <p className="text-gray-300 flex-grow font-normal">
                  {point.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
