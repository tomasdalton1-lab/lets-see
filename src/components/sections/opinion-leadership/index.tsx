'use client'

import { motion } from 'framer-motion'

interface Article {
  id: number
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  image: string
}

interface OpinionLeadershipData {
  heading: string
  subheading: string
  articles: Article[]
}

export function OpinionLeadership() {
  // Data
  const opinionData: OpinionLeadershipData = {
    heading: 'Liderazgo de Opinión',
    subheading: 'Nuestras ideas y perspectivas sobre la industria',
    articles: [
      {
        id: 1,
        title: 'El Futuro de la Transformación Digital',
        excerpt: 'Exploramos las tendencias emergentes que definirán el panorama digital en los próximos años.',
        author: 'Alejandro Méndez',
        date: '15 Jul 2023',
        readTime: '5 min',
        image: '📱'
      },
      {
        id: 2,
        title: 'Inteligencia Artificial en los Negocios',
        excerpt: 'Cómo la IA está revolucionando la forma en que las empresas toman decisiones estratégicas.',
        author: 'Laura Sánchez',
        date: '28 Jun 2023',
        readTime: '7 min',
        image: '🤖'
      },
      {
        id: 3,
        title: 'Estrategias de Crecimiento Sostenible',
        excerpt: 'Prácticas que permiten a las empresas crecer mientras mantienen un impacto positivo.',
        author: 'Roberto Gómez',
        date: '10 Jun 2023',
        readTime: '6 min',
        image: '🌱'
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
      id="opinion-leadership" 
      className="w-full bg-gradient-to-b from-slate-50 to-white text-slate-900 py-20 md:py-32"
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
            {opinionData.heading}
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl text-slate-600 font-light leading-relaxed max-w-4xl mx-auto"
            variants={paragraphVariants}
            transition={{ duration: 1.0, ease: "easeOut" }}
          >
            {opinionData.subheading}
          </motion.p>
        </div>

        {/* Articles Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={gridVariants}
        >
          {opinionData.articles.map((article) => (
            <motion.article
              key={article.id}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
              variants={cardVariants}
              transition={{ duration: 1.0, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Image/Icon */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-400 p-8 text-center">
                <motion.div 
                  className="text-4xl mb-2"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {article.image}
                </motion.div>
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {article.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {article.excerpt}
                </p>
                
                {/* Meta */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6 text-sm text-gray-400">
                  <p className="font-medium">Por {article.author}</p>
                  <div className="flex items-center gap-2">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime} lectura</span>
                  </div>
                </div>
                
                {/* Button */}
                <motion.button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Leer más
                </motion.button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
