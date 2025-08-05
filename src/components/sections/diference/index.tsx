'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

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
      className="w-full bg-gradient-to-b from-white to-slate-50 text-slate-900 py-20 md:py-32"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
        {/* Header */}
        <div className="max-w-5xl mx-auto text-center mb-16 md:mb-20">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 leading-tight tracking-tight text-slate-900"
            variants={headingVariants}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {diferenceData.heading}
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl text-slate-600 font-light leading-relaxed max-w-4xl mx-auto"
            variants={paragraphVariants}
            transition={{ duration: 1.0, ease: "easeOut" }}
          >
            {diferenceData.subheading}
          </motion.p>
        </div>

        {/* Points Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto"
          variants={gridVariants}
        >
          {diferenceData.points.map((point, index) => {
            // Professional images for each card
            const cardImages = [
              'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=faces', // Legal consultation/personalized approach
              'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&crop=center', // Technology/digital transformation
              'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop&crop=faces'  // Expert team/business meeting
            ]
            
            return (
              <motion.div
                key={point.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group border border-slate-200/50 hover:border-slate-300"
                variants={cardVariants}
                transition={{ duration: 1.0, ease: "easeOut" }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.03,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={cardImages[index]}
                    alt={point.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent group-hover:from-slate-900/30 transition-all duration-500" />
                </div>
                
                {/* Content */}
                <div className="p-8">
                  {/* Number Badge */}
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-r from-slate-700 to-slate-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:from-slate-600 group-hover:to-slate-500 transition-all duration-300"
                    whileHover={{ rotate: 10 }}
                  >
                    <span className="text-white font-bold text-lg">{point.id}</span>
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-slate-800 group-hover:text-slate-700 transition-colors duration-300">
                    {point.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed font-light group-hover:text-slate-700 transition-colors duration-300">
                    {point.description}
                  </p>
                  
                  {/* Hover indicator line */}
                  <div className="mt-6 h-0.5 bg-gradient-to-r from-slate-600 to-slate-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </motion.section>
  )
}
