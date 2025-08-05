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
        staggerChildren: 0.8,
        delayChildren: 0.8
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1
    }
  }

  const glowBarVariants = {
    initial: { scaleX: 0, opacity: 0 },
    hover: { 
      scaleX: 1, 
      opacity: 1
    },
    visible: {
      opacity: 0.3,
      scaleX: 0.1
    }
  }

  return (
    <motion.section 
      id="problem" 
      className="w-full bg-gradient-to-b from-slate-50 to-white text-slate-900 py-20 md:py-32"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
        {/* Header Section */}
        <div className="max-w-5xl mx-auto text-center mb-16 md:mb-20">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 leading-tight tracking-tight"
            variants={headingVariants}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <span className="relative inline-block text-slate-900 hover:text-slate-700 transition-colors duration-300">
              Escalas a gran velocidad.<br /> ¿Sobre qué base?
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl text-slate-600 font-light leading-relaxed"
            variants={paragraphVariants}
            transition={{ duration: 1.0, ease: "easeOut" }}
          >
            Una base débil, improvisada y genérica crea una doble amenaza: la ineficiencia fiscal que consume tu runway, y los <strong>"cisnes negros"</strong> que pueden destruir tu visión a futuro.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
          variants={cardsContainerVariants}
        >
          {painPoints.map((point, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-2xl p-8 md:p-10 flex flex-col h-full relative overflow-hidden shadow-lg border border-slate-200 hover:shadow-xl"
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 2.0,
                ease: "easeOut",
                opacity: { duration: 1.5, ease: "easeOut" },
                y: { duration: 2.0, ease: "easeOut" },
                scale: { duration: 1.8, delay: 0.4, ease: "easeOut" }
              }}
            >
              {/* Animated top border accent */}
              <motion.div 
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-slate-700 to-slate-600 origin-left"
                variants={glowBarVariants}
                initial="initial"
                whileHover="hover"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  duration: 1.0,
                  ease: "easeOut",
                  delay: 2.5
                }}
              />
              
              {/* Card content */}
              <div className="card-content h-full w-full flex flex-col relative z-10">
                <h3 className="text-xl md:text-2xl font-semibold mb-6 text-slate-800">
                  {point.title}
                </h3>
                <p className="text-slate-600 flex-grow font-normal leading-relaxed">
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
