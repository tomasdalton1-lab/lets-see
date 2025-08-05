'use client'

import { ScheduleButton } from '@/components/ui/schedule-button/schedule-button'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function Hero() {
  // Variantes de animación para el texto - Smooth and subtle
  const textVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 }
  }

  // Variantes para el contenedor de palabras
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.3
      }
    }
  }

  // Variantes para cada palabra
  const wordVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0 }
  }

  // Función para dividir el texto en palabras con Motion
  const animateText = (text: string) => {
    return text.split(' ').map((word: string, index: number) => (
      <motion.span 
        key={index} 
        className="inline-block mr-[0.25em]"
        variants={wordVariants}
      >
        {word}
      </motion.span>
    ))
  }

  return (
    <section id="top" className="relative w-full min-h-screen bg-[#17293A] text-white flex items-center py-16 overflow-hidden font-montserrat">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          className="w-full h-full object-cover opacity-20"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onError={(e) => console.error('Video failed to load:', e)}
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          {/* Fallback background */}
        </video>
        {/* Gradient overlay para mejorar legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#17293A]/80 via-[#17293A]/60 to-[#17293A]/80"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
        <motion.div 
          className="flex flex-col items-start text-left"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3,
                delayChildren: 0.1
              }
            }
          }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {animateText('Transformamos la Complejidad en tu Ventaja Competitiva.')}
          </motion.h1>
          
          <motion.div 
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl"
            variants={textVariants}
            transition={{
              duration: 1.2,
              delay: 0.8,
              ease: "easeOut"
            }}
          >
            Somos el socio estratégico que diseña tu arquitectura legal y fiscal unificada para escalar globalmente con seguridad y superar cualquier Due Diligence con total confianza
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 1.2
                }
              }
            }}
          >
            {/* Para pantallas grandes (lg y superiores) */}
            <motion.div 
              className="hidden lg:block footer-tablet:hidden"
              variants={textVariants}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <ScheduleButton 
                text="Agenda tu Diagnóstico Estratégico" 
                size="lg" 
              />
            </motion.div>
            
            {/* Para pantallas medianas (md-lg usando el breakpoint personalizado) */}
            <motion.div 
              className="hidden footer-tablet:block md:block lg:hidden"
              variants={textVariants}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <ScheduleButton 
                text="Agenda Diagnóstico" 
                size="md" 
              />
            </motion.div>
            
            {/* Para pantallas pequeñas (sm y menores) */}
            <motion.div 
              className="block md:hidden"
              variants={textVariants}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <ScheduleButton 
                text="Agenda Diagnóstico" 
                size="sm" 
              />
            </motion.div>
            
            {/* Botón secundario con lógica responsive similar */}
            {/* Para pantallas grandes */}
            <motion.div 
              className="hidden lg:block footer-tablet:hidden"
              variants={textVariants}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <Link 
                href="#section-5"
                className="inline-flex items-center justify-center rounded-[12px] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 shadow-sm h-11 px-10 py-3 border border-gray-700 text-white hover:bg-gray-900 transition-all duration-200 group"
              >
                <span>Leer nuestro último Análisis</span>
                <motion.svg 
                  className="ml-2" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <path d="M6.5 3.5L11 8L6.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </motion.svg>
              </Link>
            </motion.div>
            
            {/* Para pantallas medianas */}
            <motion.div 
              className="hidden footer-tablet:block md:block lg:hidden"
              variants={textVariants}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <Link 
                href="#section-5"
                className="inline-flex items-center justify-center rounded-[12px] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 shadow-sm h-10 px-6 py-2 border border-gray-700 text-white hover:bg-gray-900 transition-all duration-200 group"
              >
                <span>Leer Análisis</span>
                <motion.svg 
                  className="ml-2" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <path d="M6.5 3.5L11 8L6.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </motion.svg>
              </Link>
            </motion.div>
            
            {/* Para pantallas pequeñas */}
            <motion.div 
              className="block md:hidden"
              variants={textVariants}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <Link 
                href="#section-5"
                className="inline-flex items-center justify-center rounded-[12px] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 shadow-sm h-9 px-5 text-sm border border-gray-700 text-white hover:bg-gray-900 transition-all duration-200 group"
              >
                <span>Leer</span>
                <motion.svg 
                  className="ml-2" 
                  width="14" 
                  height="14" 
                  viewBox="0 0 16 16" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <path d="M6.5 3.5L11 8L6.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </motion.svg>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
