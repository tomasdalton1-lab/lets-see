'use client'

import { motion } from 'framer-motion'

export function AnimatedCards() {
  // Animation variants for the cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0
    }
  }

  // Top bar animation variant
  const topBarVariants = {
    initial: { scaleX: 0 },
    hover: { scaleX: 1 }
  }

  const cardsData = [
    {
      title: "Fronteras Regulatorias",
      content: "Cada nuevo mercado es un laberinto. Operar sin proyectar a futuro o aplicando viejos paradigmas convierte un lanzamiento prometedor en un negocio inviable por costos fiscales inesperados."
    },
    {
      title: "Tu Ronda de Inversión en Juego",
      content: "Un futuro Due Diligence te preocupa. Sabes que una estructura estandarizada no es un manual mágico, y te preguntas si tu IP, revenue recognition y precios de transferencia están realmente diseñados para atraer y cerrar tu próxima ronda."
    },
    {
      title: "El Costo Real de la Burocracia",
      content: "El mayor desaprovechamiento de oportunidades es tu tiempo. Dedicas tu energía a navegar la complejidad, en lugar de enfocarte 100% en tu producto, tu equipo y tu visión."
    }
  ]

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {cardsData.map((card, index) => (
        <motion.div
          key={index}
          className="elementor-column unidades bg-gray-900 rounded-2xl p-6 md:p-8 flex flex-col h-full relative overflow-hidden"
          variants={cardVariants}
          whileHover="hover"
          initial="initial"
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Animated top bar */}
          <motion.div 
            className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-blue-400 origin-left"
            variants={topBarVariants}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          />
          
          {/* Card content */}
          <div className="card-content h-full w-full flex flex-col relative z-10">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-400">
              {card.title}
            </h3>
            <p className="text-gray-300 flex-grow font-normal">
              {card.content}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
