import React, { useState } from 'react';
import { 
  ArrowRight, 
  Linkedin, 
  Instagram,
  BarChart3, 
  BrainCircuit, 
  Database, 
  CheckCircle2, 
  MessageCircle,
  Star,
  Zap,
  BookOpen,
  Menu,
  X
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#272725] selection:bg-[#575460]/20 selection:text-[#272725] overflow-x-hidden font-secondary">
      
      {/* NAVEGACIÓN */}
      <nav className="sticky top-0 z-50 bg-[#FFFFFF]/90 backdrop-blur-md border-b border-gray-100 font-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-1 cursor-pointer">
              {/* Logo */}
              <span className="font-primary font-bold text-2xl tracking-tight text-[#272725]">
                La <span className="text-[#575460]">Mentoría</span>
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#equipo" className="text-sm font-semibold text-gray-500 hover:text-[#272725] transition-colors">El Equipo</a>
              <a href="#servicios" className="text-sm font-semibold text-gray-500 hover:text-[#272725] transition-colors">Servicios</a>
              <a href="#mentoria" className="text-sm font-semibold text-gray-500 hover:text-[#272725] transition-colors">La Mentoría</a>
              <a 
                href="https://calendar.app.google/L2kNYujpQHvjAvkc8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#272725] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#575460] transition-all shadow-sm"
              >
                Reservar Consultoría
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-500 hover:text-[#272725] focus:outline-none p-2"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-b border-gray-100 bg-[#FFFFFF] px-4 pt-2 pb-6 space-y-3"
          >
            <a 
              href="#equipo" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-[#272725]"
            >
              El Equipo
            </a>
            <a 
              href="#servicios" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-[#272725]"
            >
              Servicios
            </a>
            <a 
              href="#mentoria" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-[#272725]"
            >
              La Mentoría
            </a>
            <div className="pt-2">
              <a 
                href="https://calendar.app.google/L2kNYujpQHvjAvkc8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full text-center bg-[#272725] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#575460] transition-all"
              >
                Reservar Consultoría
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      <main>
        {/* HERO SECTION */}
        <section className="pt-12 pb-16 md:pt-24 md:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* OPTIMIZADO UX */}
              <div className="inline-flex items-center gap-2 bg-[#f4f4f5] text-[#272725] px-4 py-1.5 rounded-full text-sm font-extrabold tracking-wide uppercase border border-gray-200">
                <span className="w-2 h-2 rounded-full bg-[#575460] animate-pulse"></span>
                Consultoría & Formación
              </div>
              
              {/* Tagline Oficial */}
              {/* OPTIMIZADO UX */}
              <h1 className="font-primary text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-[#272725]">
                Transforma tu negocio con <span className="text-[#575460]">IA y datos</span>
              </h1>
              
              {/* Overview del Brand Book */}
              {/* OPTIMIZADO UX */}
              <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
                Ayudamos a directivos de PYMEs en España y LATAM a automatizar procesos operativos, optimizar el rendimiento de sus equipos y tomar mejores decisiones mediante Inteligencia Artificial generativa y analítica de datos aplicada.
              </p>
              
              {/* OPTIMIZADO UX */}
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <a 
                  href="https://calendar.app.google/L2kNYujpQHvjAvkc8" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center gap-2 bg-[#272725] text-white px-8 py-4 rounded-full font-bold hover:bg-[#575460] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
                >
                  Agendar Sesión 1:1 <ArrowRight size={20} />
                </a>
                <a 
                  href="#mentoria" 
                  className="flex justify-center items-center gap-2 bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:text-[#272725] hover:border-[#272725] hover:bg-gray-50/50 transition-all"
                >
                  Ver Mentoría
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#575460]/10 to-transparent rounded-[2rem] transform translate-x-4 translate-y-4 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Workspace con dashboard de datos" 
                className="rounded-[2rem] shadow-xl object-cover w-full h-[350px] sm:h-[500px] border border-gray-100"
                loading="eager"
              />
            </motion.div>
          </div>
        </section>

        {/* EL EQUIPO */}
        <section id="equipo" className="py-20 bg-[#f9f9fa] border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-primary text-3xl md:text-4xl font-bold mb-6 text-[#272725]">El Equipo</h2>
              <p className="text-lg text-gray-600">
                Somos un equipo de especialistas en Business Intelligence, IA y Gestión de Proyectos. Nos apasiona facilitar el aprendizaje y la aplicación práctica de conocimientos en entornos corporativos.
              </p>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {/* Perfil 1 */}
              {/* OPTIMIZADO UX */}
              <motion.div 
                variants={itemVariants}
                className="bg-white rounded-[2rem] p-8 border border-gray-100 hover:shadow-lg transition-all flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 bg-gray-100 rounded-full mb-6 overflow-hidden border-2 border-gray-100 shadow-inner flex-shrink-0">
                  <img 
                    src="https://lh3.googleusercontent.com/d/1MAnRrp1ynTFlvYC260LtT1bG91mHpECd" 
                    referrerPolicy="no-referrer"
                    alt="Sofía Aguirre" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h3 className="font-primary text-xl font-bold mb-2">Sofía Aguirre</h3>
                <p className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed">
                  Especialista en IA con +5 años optimizando procesos en entornos corporativos.<br />
                  Founder de <a href="https://www.data-so.com/" target="_blank" rel="noopener noreferrer" className="text-[#575460] font-semibold underline hover:text-[#272725] transition-colors">data-so.com</a>
                </p>
                <a href="https://www.linkedin.com/in/sofiaaguirree/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-[#575460] bg-[#f4f4f5] px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
                  <Linkedin size={16} /> Ver LinkedIn
                </a>
              </motion.div>

              {/* Perfil 2 */}
              {/* OPTIMIZADO UX */}
              <motion.div 
                variants={itemVariants}
                className="bg-white rounded-[2rem] p-8 border border-gray-100 hover:shadow-lg transition-all flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 bg-gray-100 rounded-full mb-6 overflow-hidden border-2 border-gray-100 shadow-inner flex-shrink-0">
                  <img 
                    src="https://lh3.googleusercontent.com/d/1AKGamcjzo-NwL-EIRYaEC2pahpODVKPj" 
                    referrerPolicy="no-referrer"
                    alt="María Virginia Ares" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h3 className="font-primary text-xl font-bold mb-2">María Virginia Ares</h3>
                <p className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed">Consultora Financiera y Project Manager con experiencia en LATAM y Europa.</p>
                <a href="https://www.linkedin.com/in/mar%C3%ADavirginiaares/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-[#575460] bg-[#f4f4f5] px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
                  <Linkedin size={16} /> Ver LinkedIn
                </a>
              </motion.div>

              {/* Perfil 3 */}
              {/* OPTIMIZADO UX */}
              <motion.div 
                variants={itemVariants}
                className="bg-white rounded-[2rem] p-8 border border-gray-100 hover:shadow-lg transition-all flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 bg-gray-100 rounded-full mb-6 overflow-hidden border-2 border-gray-100 shadow-inner flex-shrink-0">
                  <img 
                    src="https://lh3.googleusercontent.com/d/1yXXUEVXF2X99RF6H2NFaebTXW3qpQgB1" 
                    referrerPolicy="no-referrer"
                    alt="Mariela Sanchez" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h3 className="font-primary text-xl font-bold mb-2">Mariela Sanchez</h3>
                <p className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed">Experta en Datos y Analytics. Ha liderado transformaciones digitales en +30 empresas.</p>
                <a href="https://www.linkedin.com/in/lmsdatos/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-[#575460] bg-[#f4f4f5] px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
                  <Linkedin size={16} /> Ver LinkedIn
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SERVICIOS SECTION */}
        <section id="servicios" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#575460] text-sm font-bold tracking-widest uppercase mb-4 block">Eficiencia Práctica</span>
            <h2 className="font-primary text-3xl md:text-5xl font-bold text-[#272725]">Servicios de Consultoría y Formación</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Card 1 - Light */}
            {/* OPTIMIZADO UX */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-[2rem] p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow flex flex-col"
            >
              <div className="w-14 h-14 bg-[#f4f4f5] rounded-2xl flex items-center justify-center mb-8">
                <BarChart3 className="text-[#272725]" size={28} />
              </div>
              <h3 className="font-primary text-2xl font-bold mb-4 text-[#272725]">Visualización de Datos</h3>
              <p className="text-gray-600 mb-3 leading-relaxed">
                Transformamos datos complejos en dashboards intuitivos y visuales para facilitar la toma de decisiones estratégicas.
              </p>
              
              <div className="mb-6 bg-emerald-50/60 text-emerald-800 px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 border border-emerald-100/50">
                <Zap size={16} className="text-emerald-600 flex-shrink-0" /> 
                <span>Reduce hasta un 60% el tiempo de generación de informes.</span>
              </div>

              <ul className="space-y-4 flex-grow mb-8">
                <li className="flex items-center gap-3 text-gray-800 font-medium"><CheckCircle2 className="text-[#575460]" size={20} /> Herramientas BI</li>
                <li className="flex items-center gap-3 text-gray-800 font-medium"><CheckCircle2 className="text-[#575460]" size={20} /> Acompañamiento en la implantación</li>
                <li className="flex items-center gap-3 text-gray-800 font-medium"><CheckCircle2 className="text-[#575460]" size={20} /> Gestión del cambio</li>
              </ul>

              <a 
                href="https://calendar.app.google/L2kNYujpQHvjAvkc8" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full text-center bg-[#272725] text-white py-3 rounded-xl font-bold hover:bg-[#575460] transition-colors"
              >
                Solicitar Propuesta
              </a>
            </motion.div>

            {/* Card 2 - Dark (Highlighted con Obsidian Black) */}
            {/* OPTIMIZADO UX */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#272725] text-white rounded-[2rem] p-10 shadow-2xl relative flex flex-col transform md:-translate-y-4 border border-[#575460]/20"
            >
              <div className="absolute top-8 right-8 bg-[#575460] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                Popular
              </div>
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                <BrainCircuit className="text-white" size={28} />
              </div>
              <h3 className="font-primary text-2xl font-bold mb-4">Formación en IA y Productividad</h3>
              <p className="text-gray-300 mb-3 leading-relaxed">
                Capacitación práctica para equipos en herramientas digitales de última generación para multiplicar resultados.
              </p>

              <div className="mb-6 bg-white/10 text-emerald-300 px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 border border-white/5">
                <Zap size={16} className="text-emerald-400 flex-shrink-0" /> 
                <span>Equipos más productivos desde la primera semana.</span>
              </div>

              <ul className="space-y-4 flex-grow mb-8">
                <li className="flex items-center gap-3 font-medium"><CheckCircle2 className="text-[#575460]" size={20} /> IAs generativas</li>
                <li className="flex items-center gap-3 font-medium"><CheckCircle2 className="text-[#575460]" size={20} /> Google Workspace + Gemini</li>
                <li className="flex items-center gap-3 font-medium"><CheckCircle2 className="text-[#575460]" size={20} /> Automatizaciones con GAS</li>
              </ul>
              <a href="https://calendar.app.google/L2kNYujpQHvjAvkc8" target="_blank" rel="noopener noreferrer" className="w-full text-center bg-white text-[#272725] py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                Agendar Consultoría Gratuita
              </a>
            </motion.div>

            {/* Card 3 - Light */}
            {/* OPTIMIZADO UX */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-[2rem] p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow flex flex-col"
            >
              <div className="w-14 h-14 bg-[#f4f4f5] rounded-2xl flex items-center justify-center mb-8">
                <Database className="text-[#272725]" size={28} />
              </div>
              <h3 className="font-primary text-2xl font-bold mb-4 text-[#272725]">Consultoría de Negocio</h3>
              <p className="text-gray-600 mb-3 leading-relaxed">
                Análisis exhaustivo y rediseño de procesos administrativos para lograr una gestión verdaderamente eficiente.
              </p>

              <div className="mb-6 bg-emerald-50/60 text-emerald-800 px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 border border-emerald-100/50">
                <Zap size={16} className="text-emerald-600 flex-shrink-0" /> 
                <span>Identifica ineficiencias y recupera horas de trabajo cada semana.</span>
              </div>

              <ul className="space-y-4 flex-grow mb-8">
                <li className="flex items-center gap-3 text-gray-800 font-medium"><CheckCircle2 className="text-[#575460]" size={20} /> Control de gestión ágil</li>
                <li className="flex items-center gap-3 text-gray-800 font-medium"><CheckCircle2 className="text-[#575460]" size={20} /> Acompañamiento en la transformación digital</li>
                <li className="flex items-center gap-3 text-gray-800 font-medium"><CheckCircle2 className="text-[#575460]" size={20} /> Mejora de procesos</li>
              </ul>

              <a 
                href="https://calendar.app.google/L2kNYujpQHvjAvkc8" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full text-center bg-[#272725] text-white py-3 rounded-xl font-bold hover:bg-[#575460] transition-colors"
              >
                Solicitar Propuesta
              </a>
            </motion.div>
          </div>
        </section>

        {/* MENTORÍA SECTION */}
        <section id="mentoria" className="py-24 bg-[#f9f9fa] border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-primary text-3xl md:text-5xl font-bold mb-6 text-[#272725]">La Mentoría</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Aprendizaje continuo y práctico. Domina la Inteligencia Artificial y optimiza tu tiempo a tu propio ritmo con nuestras mentorías personalizadas.
              </p>
            </div>

            {/* Grid 3 Cursos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              
              {/* Curso 1 */}
              <div className="bg-white border border-gray-200 rounded-[2rem] p-8 flex flex-col hover:shadow-xl transition-shadow">
                <div className="mb-6">
                  <span className="inline-block bg-[#f4f4f5] text-[#575460] border border-[#575460]/20 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Más Vendido
                  </span>
                </div>
                <h3 className="font-primary text-2xl font-bold mb-4 text-[#272725]">Crea presentaciones de alto impacto en minutos con IA</h3>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                  Destaca profesionalmente y ahorra horas de trabajo delegando el diseño a la Inteligencia Artificial. Cautiva a tu audiencia con diapositivas irresistibles sin conocimientos previos de diseño.
                </p>
                <a 
                  href="https://pay.hotmart.com/G106034907Y" 
                  target="_blank" rel="noopener noreferrer"
                  className="w-full bg-[#272725] text-white py-4 rounded-xl font-bold text-center hover:bg-[#575460] transition-colors"
                >
                  Quiero este curso
                </a>
              </div>

              {/* Curso 2 */}
              <div className="bg-white border border-gray-200 rounded-[2rem] p-8 flex flex-col hover:shadow-xl transition-shadow">
                <div className="mb-6">
                  <span className="inline-block bg-[#f4f4f5] text-[#575460] border border-[#575460]/20 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Productividad Extrema
                  </span>
                </div>
                <h3 className="font-primary text-2xl font-bold mb-4 text-[#272725]">Hackea tu agenda con Gemini</h3>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                  Multiplica tu productividad, organiza tu vida y domina la Inteligencia Artificial de Google a tu favor. Libera tu mente de las tareas repetitivas y recupera el control total de tu tiempo.
                </p>
                <a 
                  href="https://pay.hotmart.com/G106198119J" 
                  target="_blank" rel="noopener noreferrer"
                  className="w-full bg-[#272725] text-white py-4 rounded-xl font-bold text-center hover:bg-[#575460] transition-colors"
                >
                  Acceder ahora
                </a>
              </div>

              {/* Curso 3 */}
              <div className="bg-white border border-gray-200 rounded-[2rem] p-8 flex flex-col hover:shadow-xl transition-shadow">
                <div className="mb-6">
                  <span className="inline-block bg-[#f4f4f5] text-[#575460] border border-[#575460]/20 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Organización Mental
                  </span>
                </div>
                <h3 className="font-primary text-2xl font-bold mb-4 text-[#272725]">Crea tu segundo cerebro con NotebookLM</h3>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                  Libérate de la fatiga mental y el caos de documentos. Aprende a construir una "biblioteca inteligente" privada que analiza y conecta tu información exacta sin alucinaciones.
                </p>
                <a 
                  href="https://pay.hotmart.com/H106550489L" 
                  target="_blank" rel="noopener noreferrer"
                  className="w-full bg-[#272725] text-white py-4 rounded-xl font-bold text-center hover:bg-[#575460] transition-colors"
                >
                  Quiero este curso
                </a>
              </div>

            </div>

            {/* COMBO & GUIA Destacados */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Combo Box */}
              <div className="bg-[#272725] text-white rounded-[2rem] p-8 md:p-12 shadow-xl relative overflow-hidden flex flex-col justify-center border border-[#575460]/30">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 text-white/5">
                  <Zap size={200} />
                </div>
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-[#575460] text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase mb-6">
                    <Star size={16} fill="currentColor" /> Oferta Especial
                  </div>
                  <h3 className="font-primary text-3xl font-bold mb-4">Combo Máster: Los 3 Cursos</h3>
                  <p className="text-gray-300 mb-8 text-lg">
                    Lleva tu productividad al siguiente nivel. Adquiere los 3 cursos juntos por un precio especial y domina la IA en todas las áreas de tu negocio.
                  </p>
                  <a 
                    href="https://pay.hotmart.com/R106562462M" 
                    target="_blank" rel="noopener noreferrer"
                    className="inline-block bg-white text-[#272725] px-8 py-4 rounded-xl font-bold text-center hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    Obtener el Combo Completo
                  </a>
                </div>
              </div>

              {/* Guia Low Cost */}
              <div className="bg-[#f4f4f5] rounded-[2rem] p-8 md:p-12 border border-gray-200 flex flex-col justify-center items-start">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <BookOpen className="text-[#575460]" size={24} />
                </div>
                <h3 className="font-primary text-2xl font-bold mb-3 text-[#272725]">Guía Práctica Low Cost</h3>
                <p className="text-gray-700 mb-8 text-lg">
                  Empieza hoy mismo con una pequeña inversión. Una guía paso a paso esencial para dar tus primeros pasos en el desarrollo de herramientas operativas.
                </p>
                <a 
                  href="https://tr.ee/InxcAV42yE" 
                  target="_blank" rel="noopener noreferrer"
                  className="bg-[#575460] text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-[#272725] transition-colors shadow-md"
                >
                  Descargar Guía
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* OPTIMIZADO UX */}
            <div className="bg-white rounded-[3rem] p-12 md:p-20 text-center shadow-xl border border-gray-100">
              <h2 className="font-primary text-4xl md:text-5xl font-bold mb-6 tracking-tight text-[#272725]">¿Tu equipo pierde horas en tareas que la IA ya puede resolver?</h2>
              <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Ya sea que necesites un dashboard personalizado, formar a tu equipo o rediseñar tus procesos corporativos, estamos aquí para ayudarte a escalar.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
                <a 
                  href="https://calendar.app.google/L2kNYujpQHvjAvkc8" 
                  target="_blank" rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[#272725] text-white px-8 py-4 rounded-full font-bold hover:bg-[#575460] transition-all shadow-md"
                >
                  Reservar Consultoría
                </a>
                <a 
                  href="https://wa.me/34666126573?text=Hola!%20Me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n." 
                  target="_blank" rel="noopener noreferrer"
                  className="w-full sm:w-auto flex justify-center items-center gap-2 bg-white border-2 border-gray-200 text-[#272725] px-8 py-4 rounded-full font-bold hover:border-[#575460] transition-all"
                >
                  <MessageCircle size={18} /> WhatsApp
                </a>
              </div>

              <div className="pt-8 border-t border-gray-100 flex items-center justify-center gap-2 text-sm text-gray-500 font-medium">
                <CheckCircle2 size={16} className="text-[#575460]" />
                Sesiones online vía Google Meet. Pagos 100% seguros.
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      {/* OPTIMIZADO UX */}
      <footer className="bg-[#f9f9fa] pt-16 pb-12 border-t border-gray-100 font-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-gray-100 text-left">
            {/* Columna 1: Brand / Info */}
            <div className="space-y-4">
              <span className="font-primary font-bold text-2xl tracking-tight text-[#272725] block">
                La <span className="text-[#575460]">Mentoría</span>
              </span>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                Consultoría & Formación en Datos e IA. Transformamos el potencial de tu negocio con tecnología y automatización con propósito.
              </p>
              <p className="text-gray-600 text-sm font-semibold">
                Valencia, España · <a href="mailto:hola@lamentoria.info" className="hover:text-[#575460] transition-colors">hola@lamentoria.info</a>
              </p>
            </div>

            {/* Columna 2: Navegación Rápida */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#272725]">Navegación</h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="#equipo" className="text-gray-500 hover:text-[#272725] transition-colors">El Equipo</a>
                </li>
                <li>
                  <a href="#servicios" className="text-gray-500 hover:text-[#272725] transition-colors">Servicios</a>
                </li>
                <li>
                  <a href="#mentoria" className="text-gray-500 hover:text-[#272725] transition-colors">La Mentoría</a>
                </li>
              </ul>
            </div>

            {/* Columna 3: Legal & Socials */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#272725]">Legal y Social</h4>
              <ul className="space-y-2.5 text-sm mb-6">
                <li>
                  <a href="#" className="text-gray-500 hover:text-[#272725] transition-colors">Política de Privacidad</a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-[#272725] transition-colors">Aviso Legal</a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-[#272725] transition-colors">Política de Cookies</a>
                </li>
              </ul>
              <div className="flex gap-4">
                <a href="#" aria-label="LinkedIn" className="p-2 bg-white border border-gray-200 rounded-full text-gray-500 hover:text-[#272725] hover:border-gray-300 transition-all">
                  <Linkedin size={18} />
                </a>
                <a href="#" aria-label="Instagram" className="p-2 bg-white border border-gray-200 rounded-full text-gray-500 hover:text-[#272725] hover:border-gray-300 transition-all">
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 text-center md:flex md:justify-between md:items-center">
            <p className="text-gray-400 text-xs">
              © {new Date().getFullYear()} La Mentoría. Todos los derechos reservados.
            </p>
            <p className="text-gray-400 text-xs mt-2 md:mt-0">
              Valencia, España · hola@lamentoria.info
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
