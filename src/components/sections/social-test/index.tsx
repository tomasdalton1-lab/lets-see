'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  avatar: string
}

interface SocialTestData {
  heading: string
  subheading: string
  testimonials: Testimonial[]
}

export function SocialTest() {
  // Data
  const socialTestData: SocialTestData = {
    heading: 'Lo Que Dicen Nuestros Clientes',
    subheading: 'Testimonios de quienes ya han experimentado nuestras soluciones',
    testimonials: [
      {
        id: 1,
        name: 'María González',
        role: 'CEO',
        company: 'Innovatech',
        content: 'Implementar sus soluciones transformó completamente nuestra presencia digital. Los resultados superaron nuestras expectativas.',
        avatar: '👩‍💼'
      },
      {
        id: 2,
        name: 'Carlos Rodríguez',
        role: 'Director de Marketing',
        company: 'Global Solutions',
        content: 'El enfoque personalizado y la atención al detalle marcaron la diferencia. Definitivamente los recomendaría.',
        avatar: '👨‍💼'
      },
      {
        id: 3,
        name: 'Ana Martínez',
        role: 'Fundadora',
        company: 'CreativeLab',
        content: 'La automatización de procesos nos permitió ahorrar tiempo y recursos, pudiendo enfocarnos en lo que realmente importa.',
        avatar: '👩‍🔬'
      }
    ]
  }

  const [activeIndex, setActiveIndex] = useState(0)

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

  const testimonialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  }

  const controlsVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  return (
    <motion.section 
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
            {socialTestData.heading}
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 font-normal max-w-3xl mx-auto"
            variants={paragraphVariants}
            transition={{ duration: 1.0, ease: "easeOut" }}
          >
            {socialTestData.subheading}
          </motion.p>
        </div>

        {/* Testimonial Container */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="bg-white rounded-2xl p-8 md:p-12 shadow-lg text-center w-full"
                variants={testimonialVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Avatar */}
                <motion.div 
                  className="text-6xl mb-6"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {socialTestData.testimonials[activeIndex].avatar}
                </motion.div>
                
                {/* Content */}
                <motion.blockquote 
                  className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  "{socialTestData.testimonials[activeIndex].content}"
                </motion.blockquote>
                
                {/* Author */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <p className="text-lg font-semibold text-[#17293A] mb-1">
                    {socialTestData.testimonials[activeIndex].name}
                  </p>
                  <p className="text-gray-600">
                    {socialTestData.testimonials[activeIndex].role}, {socialTestData.testimonials[activeIndex].company}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        
        {/* Controls */}
        <motion.div 
          className="flex justify-center gap-3"
          variants={controlsVariants}
          transition={{ duration: 1.0, delay: 0.6 }}
        >
          {socialTestData.testimonials.map((_, index) => (
            <motion.button 
              key={index} 
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-blue-500 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Testimonial ${index + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
