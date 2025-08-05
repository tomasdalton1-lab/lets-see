'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ScheduleButton } from '../ui/schedule-button/schedule-button'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll function
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    setMobileMenuOpen(false) // Close mobile menu if open

    // Get the target element
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      // Get header height to offset scroll position
      const headerHeight = document.querySelector('header')?.offsetHeight || 0

      // Calculate the target scroll position with offset for the header
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight

      // Smooth scroll to the target position
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })

      // Update URL without page reload
      window.history.pushState(null, '', `#${targetId}`)
    }
  }

  // Prevent body scroll when mobile menu is open and handle escape key
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'

      // Add escape key handler
      const handleEscKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setMobileMenuOpen(false)
        }
      }
      
      document.addEventListener('keydown', handleEscKey)
      return () => {
        document.body.style.overflow = ''
        document.removeEventListener('keydown', handleEscKey)
      }
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const navLinks = [
    { name: 'El Desafío', href: '#problem' },
    { name: 'La Hoja de Ruta', href: '#solution' },
    { name: 'Por Qué Nosotros', href: '#diference' },
    { name: 'Análisis', href: '#opinion-leadership' }
  ]

  return (
    <>
      {/* Main header */}
      <motion.header 
        className={`w-full py-4 sm:py-5 fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-out backdrop-blur-md ${
          scrolled 
            ? 'bg-white/95 shadow-lg border-b border-slate-200/50' 
            : 'bg-slate-900/80 border-b border-slate-700/30'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl flex justify-between items-center">
          {/* Logo (Left) */}
          <motion.a 
            href="#top" 
            className={`flex items-center cursor-pointer transition-colors duration-300 ${
              scrolled ? 'text-slate-900' : 'text-white'
            }`}
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              })
              window.history.pushState(null, '', '#top')
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="text-xl sm:text-2xl font-bold tracking-tight">Geremia&Co</span>
          </motion.a>

          {/* Navigation Links (Center) - Hidden on mobile and small tablets */}
          <nav className="hidden lg:flex items-center justify-center space-x-8 xl:space-x-12">
            {navLinks.map((link, index) => (
              <motion.a 
                key={link.name} 
                href={link.href} 
                className={`relative text-sm font-medium cursor-pointer transition-colors duration-300 group ${
                  scrolled ? 'text-slate-600 hover:text-slate-900' : 'text-slate-300 hover:text-white'
                }`}
                onClick={(e) => handleSmoothScroll(e, link.href.substring(1))}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -2 }}
              >
                {link.name}
                <motion.div 
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r ${
                    scrolled ? 'from-slate-700 to-slate-600' : 'from-white to-slate-200'
                  } origin-left`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </motion.a>
            ))}
          </nav>

          {/* CTA Button (Right) - Different sizes based on screen width */}
          <motion.div 
            className="hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <ScheduleButton size="sm" text="Agendar Diagnóstico" />
          </motion.div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            {/* Hamburger menu button with animation */}
            <motion.button 
              onClick={toggleMobileMenu}
              className={`focus:outline-none focus:ring-0 focus:border-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:border-0 p-2 z-[110] relative rounded-lg transition-colors duration-300 ${
                scrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
              style={{ WebkitTapHighlightColor: 'transparent' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-5 h-5 relative">
                {/* Animated X (close) icon */}
                <svg 
                  className={`w-5 h-5 absolute inset-0 transition-opacity duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                    className={`transform transition-transform duration-300 ${mobileMenuOpen ? 'scale-100 rotate-0' : 'scale-0 rotate-90'}`}
                  />
                </svg>
                
                {/* Animated hamburger icon */}
                <svg 
                  className={`w-5 h-5 absolute inset-0 transition-opacity duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                    className={`transform transition-transform duration-300 ${mobileMenuOpen ? 'scale-0 -rotate-90' : 'scale-100 rotate-0'}`}
                  />
                </svg>
              </div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu dropdown - Fixed position, full screen */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="lg:hidden fixed inset-0 top-[73px] bg-slate-900/95 backdrop-blur-md z-[90]"
            style={{ height: 'calc(100vh - 73px)' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="flex flex-col justify-between h-full">
              {/* Navigation links - Top section */}
              <div className="container mx-auto px-6 sm:px-8 py-12">
                <nav className="flex flex-col space-y-8">
                  {navLinks.map((link, index) => (
                    <motion.a 
                      key={link.name} 
                      href={link.href} 
                      className="text-slate-300 hover:text-white transition-colors duration-300 text-xl font-medium flex items-center group"
                      onClick={(e) => handleSmoothScroll(e, link.href.substring(1))}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                      whileHover={{ x: 8 }}
                    >
                      <span className="border-b border-transparent group-hover:border-white pb-1 transition-colors duration-300">
                        {link.name}
                      </span>
                    </motion.a>
                  ))}
                </nav>
              </div>
              
              {/* CTA Button - Bottom section */}
              <motion.div 
                className="container mx-auto px-6 sm:px-8 py-8 border-t border-slate-700/50 mt-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              >
                <Link 
                  href="/contact" 
                  className="bg-white text-slate-900 px-6 py-4 rounded-xl text-base font-semibold hover:bg-slate-100 transition-all duration-300 inline-block text-center w-full shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Agendar tu Diagnóstico Estratégico
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Spacer to prevent content from being hidden under fixed header */}
      <div className="h-[73px] sm:h-[77px] md:h-[81px]"></div>
    </>  
  )
}
