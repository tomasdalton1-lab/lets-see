'use client'

import { motion, Variants } from 'framer-motion'
import Image from 'next/image'

interface SolutionPhase {
  id: number
  title: string
  description: string
  gif: string
}

export function Solution() {
  const phases: SolutionPhase[] = [
    {
      id: 1,
      title: "Diagnóstico Estratégico",
      description: "Analizamos tu estructura actual y identificamos oportunidades de optimización fiscal y legal.",
      gif: "/gifs/timer.gif"
    },
    {
      id: 2,
      title: "Arquitectura Unificada",
      description: "Diseñamos una estructura legal y fiscal integrada que escale con tu crecimiento.",
      gif: "/gifs/fingerprint.gif"
    },
    {
      id: 3,
      title: "Implementación y Monitoreo",
      description: "Ejecutamos la estrategia y mantenemos un seguimiento continuo para garantizar el cumplimiento.",
      gif: "/gifs/partner.gif"
    }
  ]

  // Custom easing functions for smooth animations
  const customEasing = [0.4, 0, 0.2, 1] as const // Smooth ease-in-out
  const customEasing2 = [0.2, 0, 0, 1] as const   // Slow ease-out

  // Animation variants with proper TypeScript types for Framer Motion
  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
        duration: 1.2,
        ease: customEasing as any
      }
    }
  }

  const headingVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      filter: 'blur(4px)'
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1.2,
        ease: customEasing2
      }
    }
  }

  const paragraphVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 15,
      filter: 'blur(2px)'
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1.2,
        ease: customEasing2,
        delay: 0.2
      }
    }
  }

  const timelineVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.3,
        ease: customEasing
      }
    }
  }

  const phaseVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      filter: 'blur(3px)'
    },
    visible: (i: number = 0) => ({
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1.2,
        ease: customEasing2 as any,
        delay: i * 0.2
      }
    })
  }

  const iconVariants: Variants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      rotate: -10,
      filter: 'blur(3px)'
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1.2,
        ease: customEasing2,
        delay: 0.2
      }
    }
  }

  return (
    <section className="w-full bg-slate-900 text-white py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
        {/* Header */}
        <motion.div 
          className="max-w-5xl mx-auto text-center mb-16 md:mb-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 leading-tight tracking-tight text-white"
            variants={headingVariants}
          >
            Nuestra Metodología Probada
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl text-slate-300 font-light leading-relaxed max-w-4xl mx-auto"
            variants={paragraphVariants}
          >
            Un proceso estructurado en tres fases que transforma la complejidad regulatoria en tu ventaja competitiva sostenible.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div 
          className="max-w-5xl mx-auto"
          variants={timelineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-slate-400 to-slate-600 hidden md:block"></div>
            
            {/* Phases */}
            <div className="space-y-12 md:space-y-16">
              {phases.map((phase, index) => (
                <motion.div
                  key={phase.id}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  custom={index}
                  variants={phaseVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {/* Content */}
                  <div className={`flex-1 text-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} px-4 md:px-0`}>
                    <div className="relative group">
                      {/* Title with hover effect */}
                      <div className="inline-block relative">
                        <motion.h3 
                          className="text-2xl md:text-3xl font-semibold mb-4 text-white cursor-pointer inline-block relative"
                          whileHover={{
                            y: -2,
                            transition: {
                              duration: 0.3,
                              ease: customEasing2
                            }
                          }}
                        >
                          {phase.title}
                          
                          {/* Animated underline */}
                          <motion.div 
                            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-400/70 to-transparent -bottom-1"
                            initial={{ scaleX: 0, opacity: 0 }}
                            whileHover={{
                              scaleX: 1,
                              opacity: 1,
                              transition: {
                                duration: 0.6,
                                ease: customEasing2
                              }
                            }}
                          />
                        </motion.h3>
                      </div>
                      
                      {/* Description with hover effect */}
                      <div className="relative">
                        <motion.p 
                          className="text-slate-300 text-lg lg:text-xl leading-relaxed font-light pt-2"
                          initial={{ opacity: 0, y: 10 }}
                          whileHover={{
                            opacity: 1,
                            y: 0,
                            transition: {
                              duration: 0.4,
                              ease: 'easeOut'
                            }
                          }}
                        >
                          {phase.description}
                        </motion.p>
                      </div>
                      
                      {/* Bottom line indicator */}
                      <motion.div 
                        className="mt-4 h-0.5 bg-gradient-to-r from-slate-400/30 to-slate-500/30"
                        initial={{ width: 0, opacity: 0 }}
                        whileHover={{
                          width: '100%',
                          opacity: 1,
                          transition: {
                            duration: 0.6,
                            ease: customEasing2,
                            delay: 0.2
                          }
                        }}
                      />
                    </div>
                  </div>

                  {/* Timeline connector with GIF */}
                  <motion.div 
                    className="relative z-10 bg-slate-800 border-4 border-slate-600 rounded-full p-6 shadow-xl group-hover:border-slate-500 transition-all duration-500 ease-in-out"
                    variants={iconVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 3,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6)"
                    }}
                  >
                    <div className="w-12 h-12 relative overflow-hidden rounded-full">
                      <Image
                        src={phase.gif}
                        alt={phase.title}
                        fill
                        className="object-cover object-center opacity-95 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                        unoptimized
                      />
                    </div>
                    
                    <motion.div
                      className="absolute inset-0 rounded-full bg-slate-500/20"
                      initial={{ scale: 1, opacity: 0 }}
                      whileHover={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0, 0.4, 0],
                        transition: {
                          duration: 1.2,
                          ease: "easeInOut",
                          repeat: Infinity,
                          repeatDelay: 0.3
                        }
                      }}
                    />
                  </motion.div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
