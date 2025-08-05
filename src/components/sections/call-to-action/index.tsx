'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ScheduleButton } from '../../ui/schedule-button/schedule-button'

interface CtaData {
  heading: string
  subheading: string
  buttonText: string
  placeholderText: string
}

export function CallToAction() {
  const [email, setEmail] = useState('')
  
  // Data
  const ctaData: CtaData = {
    heading: 'Comienza Tu Transformación Hoy',
    subheading: 'Suscríbete para recibir más información y una consulta gratuita',
    buttonText: 'Comenzar',
    placeholderText: 'Tu correo electrónico'
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Email submitted:', email)
    setEmail('')
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

  const formVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 }
  }

  const disclaimerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const scheduleVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.section 
      className="w-full bg-gradient-to-br from-[#17293A] to-[#2A4A5C] text-white py-16 md:py-24 font-montserrat"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6"
            variants={headingVariants}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {ctaData.heading}
          </motion.h2>
          
          {/* Subheading */}
          <motion.p 
            className="text-lg md:text-xl text-gray-200 font-normal mb-8 md:mb-12 max-w-3xl mx-auto"
            variants={paragraphVariants}
            transition={{ duration: 1.0, ease: "easeOut" }}
          >
            {ctaData.subheading}
          </motion.p>
          
          {/* Form */}
          <motion.form 
            onSubmit={handleSubmit} 
            className="mb-6"
            variants={formVariants}
            transition={{ duration: 1.0, ease: "easeOut" }}
          >
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <motion.input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={ctaData.placeholderText}
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                required
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
              <motion.button 
                type="submit" 
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-300 whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {ctaData.buttonText}
              </motion.button>
            </div>
          </motion.form>
          
          {/* Disclaimer */}
          <motion.p 
            className="text-sm text-gray-300 mb-8"
            variants={disclaimerVariants}
            transition={{ duration: 1.0, delay: 0.3, ease: "easeOut" }}
          >
            Al suscribirte, aceptas nuestra política de privacidad y términos de servicio.
          </motion.p>
          
          {/* Schedule Section */}
          <motion.div 
            className="border-t border-gray-600 pt-8"
            variants={scheduleVariants}
            transition={{ duration: 1.0, delay: 0.4, ease: "easeOut" }}
          >
            <p className="text-gray-200 text-sm mb-4">
              O si prefieres una atención personalizada:
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <ScheduleButton size="lg" text="Agendar tu Diagnóstico Personalizado" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
