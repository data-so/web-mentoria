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
    /* DISEÑO DINÁMICO: Nueva paleta de color y fondo F8F7FF */
    <div className="min-h-screen bg-[#F8F7FF] text-[#1A1A2E] selection:bg-[#6C47FF]/20 selection:text-[#1A1A2E] overflow-x-hidden font-secondary">
      
      {/* NAVEGACIÓN */}
      <nav className="sticky top-0 z-50 bg-[#F8F7FF]/90 backdrop-blur-md border-b border-[#6C47FF]/10 font-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-1 cursor-pointer">
              {/* Logo */}
              <span className="font-primary font-bold text-2xl tracking-tight text-[#1A1A2E]">
                La <span className="text-[#6C47FF]">Mentoría</span>
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#equipo" className="text-sm font-semibold text-gray-500 hover:text-[#6C47FF] transition-colors">El Equipo</a>
              <a href="#servicios" className="text-sm font-semibold text-gray-500 hover:text-[#6C47FF] transition-colors">Servicios</a>
              <a href="#mentoria" className="text-sm font-semibold text-gray-500 hover:text-[#6C47FF] transition-colors">La Mentoría</a>
              <a 
                href="https://calendar.app.google/L2kNYujpQHvjAvkc8" 
                target="_blank" 
                rel="noopener noreferrer"
                /* DISEÑO DINÁMICO: Botón CTA con degradado */
                className="bg-gradient-to-r from-[#6C47FF] to-[#FF6B6B] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:scale-[1.03] hover:shadow-[0_8px_20px_rgba(108,71,255,0.3)] transition-all shadow-md"
              >
                Reservar Consultoría
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-500 hover:text-[#6C47FF] focus:outline-none p-2"
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
            className="md:hidden border-b border-[#6C47FF]/10 bg-[#F8F7FF] px-4 pt-2 pb-6 space-y-3 shadow-lg"
          >
            <a 
              href="#equipo" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-semibold text-gray-600 hover:bg-[#6C47FF]/10 hover:text-[#6C47FF] transition-colors"
            >
              El Equipo
            </a>
            <a 
              href="#servicios" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-semibold text-gray-600 hover:bg-[#6C47FF]/10 hover:text-[#6C47FF] transition-colors"
            >
              Servicios
            </a>
            <a 
              href="#mentoria" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-semibold text-gray-600 hover:bg-[#6C47FF]/10 hover:text-[#6C47FF] transition-colors"
            >
              La Mentoría
            </a>
            <div className="pt-2">
              <a 
                href="https://calendar.app.google/L2kNYujpQHvjAvkc8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-[#6C47FF] to-[#FF6B6B] text-white px-6 py-3 rounded-full text-sm font-bold hover:scale-[1.02] transition-all shadow-md"
              >
                Reservar Consultoría
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      <main>
        {/* HERO SECTION - FONDO CLARO */}
        <section className="relative pt-12 pb-16 md:pt-24 md:pb-28 overflow-hidden bg-[#F8F7FF]">
          
          {/* DISEÑO DINÁMICO: Gradiente animado difuso detrás del hero */}
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-[#6C47FF]/15 blur-[80px] animate-blob-1"></div>
            <div className="absolute top-60 right-20 w-96 h-96 rounded-full bg-[#FF6B6B]/15 blur-[100px] animate-blob-2"></div>
            <div className="absolute -bottom-10 left-1/3 w-80 h-80 rounded-full bg-[#FFD166]/15 blur-[90px] animate-blob-1"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* DISEÑO DINÁMICO: Supertítulo Badge */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6C47FF] to-[#FF6B6B] text-white px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase shadow-md">
                  <span className="w-2 h-2 rounded-full bg-[#FFD166] animate-pulse"></span>
                  Consultoría & Formación
                </div>
                
                {/* Tagline Oficial */}
                {/* DISEÑO DINÁMICO: Headline con datos en #6C47FF y resultados con subrayado decorativo #FFD166 */}
                <h1 className="font-primary text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-[#1A1A2E]">
                  Transforma tu negocio con <span className="text-[#6C47FF]">IA</span> y <span className="decorative-underline">datos</span>
                </h1>
                
                {/* Overview del Brand Book */}
                <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
                  Ayudamos a directivos de PYMEs en España y LATAM a automatizar procesos operativos, optimizar el rendimiento de sus equipos y tomar mejores decisiones mediante Inteligencia Artificial generativa y analítica de datos aplicada.
                </p>
                
                {/* DISEÑO DINÁMICO: CTAs con diferenciación visual y espaciado */}
                <div className="flex flex-col sm:flex-row gap-6 pt-4">
                  <a 
                    href="https://calendar.app.google/L2kNYujpQHvjAvkc8" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center gap-2 bg-gradient-to-r from-[#6C47FF] to-[#FF6B6B] text-white px-8 py-4 rounded-full font-bold shadow-[0_8px_30px_rgba(108,71,255,0.4)] hover:shadow-[0_12px_35px_rgba(108,71,255,0.6)] hover:scale-[1.03] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Agendar Sesión 1:1 <ArrowRight size={20} />
                  </a>
                  <a 
                    href="#mentoria" 
                    className="flex justify-center items-center gap-2 bg-transparent border-2 border-[#6C47FF] text-[#6C47FF] px-8 py-4 rounded-full font-bold hover:bg-[#6C47FF]/5 hover:scale-[1.03] transition-all duration-300"
                  >
                    Ver Mentoría
                  </a>
                </div>
              </motion.div>
              
              {/* DISEÑO DINÁMICO: Laptop con animación de flotación sutil */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative animate-float"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6C47FF]/10 to-transparent rounded-[2rem] transform translate-x-4 translate-y-4 -z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Workspace con dashboard de datos" 
                  className="rounded-[2rem] shadow-2xl object-cover w-full h-[350px] sm:h-[500px] border border-[#6C47FF]/10"
                  loading="eager"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* EL EQUIPO - FONDO OSCURO */}
        {/* DISEÑO DINÁMICO: Fondo oscuro #0F0F1A */}
        <section id="equipo" className="py-24 bg-[#0F0F1A] border-y border-white/5 relative">
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-primary text-3xl md:text-5xl font-extrabold mb-6 text-white tracking-tight">El Equipo</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
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
              {/* DISEÑO DINÁMICO: Tarjeta con fondo #1A1A2E y borde superior #6C47FF */}
              <motion.div 
                variants={itemVariants}
                className="bg-[#1A1A2E] rounded-[2rem] p-8 border border-[#6C47FF]/30 border-t-[3px] border-t-[#6C47FF] hover:shadow-[0_15px_30px_rgba(108,71,255,0.15)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full mb-6 overflow-hidden border-2 border-[#6C47FF]/20 shadow-inner flex-shrink-0">
                  <img 
                    src="https://lh3.googleusercontent.com/d/1MAnRrp1ynTFlvYC260LtT1bG91mHpECd" 
                    referrerPolicy="no-referrer"
                    alt="Sofía Aguirre" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h3 className="font-primary text-xl font-bold mb-2 text-white">Sofía Aguirre</h3>
                <p className="text-gray-300 mb-6 flex-grow text-sm leading-relaxed">
                  Especialista en IA con +5 años optimizando procesos en entornos corporativos.<br />
                  Founder de <a href="https://www.data-so.com/" target="_blank" rel="noopener noreferrer" className="text-[#6C47FF] font-semibold underline hover:text-[#FF6B6B] transition-colors">data-so.com</a>
                </p>
                {/* DISEÑO DINÁMICO: Botones de LinkedIn con brillo */}
                <a 
                  href="https://www.linkedin.com/in/sofiaaguirree/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-sm font-semibold text-[#6C47FF] bg-[#6C47FF]/10 border border-[#6C47FF]/30 px-5 py-2.5 rounded-full hover:bg-[#6C47FF]/20 hover:scale-[1.03] hover:shadow-[0_0_15px_rgba(108,71,255,0.4)] transition-all"
                >
                  <Linkedin size={16} /> Ver LinkedIn
                </a>
              </motion.div>

              {/* Perfil 2 */}
              {/* DISEÑO DINÁMICO: Tarjeta con fondo #1A1A2E y borde superior #6C47FF */}
              <motion.div 
                variants={itemVariants}
                className="bg-[#1A1A2E] rounded-[2rem] p-8 border border-[#6C47FF]/30 border-t-[3px] border-t-[#6C47FF] hover:shadow-[0_15px_30px_rgba(108,71,255,0.15)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full mb-6 overflow-hidden border-2 border-[#6C47FF]/20 shadow-inner flex-shrink-0">
                  <img 
                    src="https://lh3.googleusercontent.com/d/1AKGamcjzo-NwL-EIRYaEC2pahpODVKPj" 
                    referrerPolicy="no-referrer"
                    alt="María Virginia Ares" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h3 className="font-primary text-xl font-bold mb-2 text-white">María Virginia Ares</h3>
                <p className="text-gray-300 mb-6 flex-grow text-sm leading-relaxed">Consultora Financiera y Project Manager con experiencia en LATAM y Europa.</p>
                {/* DISEÑO DINÁMICO: Botones de LinkedIn con brillo */}
                <a 
                  href="https://www.linkedin.com/in/mar%C3%ADavirginiaares/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-sm font-semibold text-[#6C47FF] bg-[#6C47FF]/10 border border-[#6C47FF]/30 px-5 py-2.5 rounded-full hover:bg-[#6C47FF]/20 hover:scale-[1.03] hover:shadow-[0_0_15px_rgba(108,71,255,0.4)] transition-all"
                >
                  <Linkedin size={16} /> Ver LinkedIn
                </a>
              </motion.div>

              {/* Perfil 3 */}
              {/* DISEÑO DINÁMICO: Tarjeta con fondo #1A1A2E y foto real de Mariela Sanchez */}
              <motion.div 
                variants={itemVariants}
                className="bg-[#1A1A2E] rounded-[2rem] p-8 border border-[#6C47FF]/30 border-t-[3px] border-t-[#6C47FF] hover:shadow-[0_15px_30px_rgba(108,71,255,0.15)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full mb-6 overflow-hidden border-2 border-[#6C47FF]/20 shadow-inner flex-shrink-0">
                  <img 
                    src="https://drive.google.com/uc?export=view&id=1wQhCPhzmKmxtPDkSLNC53b3OHoaKR49d" 
                    referrerPolicy="no-referrer"
                    alt="Mariela Sanchez" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h3 className="font-primary text-xl font-bold mb-2 text-white">Mariela Sanchez</h3>
                <p className="text-gray-300 mb-6 flex-grow text-sm leading-relaxed">Experta en Datos y Analytics. Ha liderado transformaciones digitales en +30 empresas.</p>
                {/* DISEÑO DINÁMICO: Botones de LinkedIn con brillo */}
                <a 
                  href="https://www.linkedin.com/in/lmsdatos/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-sm font-semibold text-[#6C47FF] bg-[#6C47FF]/10 border border-[#6C47FF]/30 px-5 py-2.5 rounded-full hover:bg-[#6C47FF]/20 hover:scale-[1.03] hover:shadow-[0_0_15px_rgba(108,71,255,0.4)] transition-all"
                >
                  <Linkedin size={16} /> Ver LinkedIn
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SERVICIOS SECTION - FONDO CLARO */}
        <section id="servicios" className="py-24 bg-[#F8F7FF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-[#6C47FF] text-sm font-extrabold tracking-widest uppercase mb-4 block">Eficiencia Práctica</span>
              <h2 className="font-primary text-3xl md:text-5xl font-extrabold text-[#1A1A2E] tracking-tight">Servicios de Consultoría y Formación</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              
              {/* Card 1 - Visualización de Datos */}
              {/* DISEÑO DINÁMICO: Tarjeta con border-top #FFD166 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-[2rem] p-10 border border-gray-100 shadow-sm border-t-4 border-t-[#FFD166] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* DISEÑO DINÁMICO: Icono con gradiente suave */}
                  <div className="w-14 h-14 bg-gradient-to-br from-[#FFD166]/20 to-[#FFD166]/5 rounded-2xl flex items-center justify-center mb-8 border border-[#FFD166]/20">
                    <BarChart3 className="text-[#6C47FF]" size={28} />
                  </div>
                  <h3 className="font-primary text-2xl font-bold mb-4 text-[#1A1A2E]">Visualización de Datos</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Transformamos datos complejos en dashboards intuitivos y visuales para facilitar la toma de decisiones estratégicas.
                  </p>
                  
                  <div className="mb-6 bg-emerald-50 text-emerald-800 px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 border border-emerald-100">
                    <Zap size={16} className="text-emerald-600 flex-shrink-0" /> 
                    <span>Reduce hasta un 60% el tiempo de generación de informes.</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3 text-gray-800 font-medium"><CheckCircle2 className="text-[#6C47FF]" size={20} /> Herramientas BI</li>
                    <li className="flex items-center gap-3 text-gray-800 font-medium"><CheckCircle2 className="text-[#6C47FF]" size={20} /> Acompañamiento en la implantación</li>
                    <li className="flex items-center gap-3 text-gray-800 font-medium"><CheckCircle2 className="text-[#6C47FF]" size={20} /> Gestión del cambio</li>
                  </ul>
                </div>

                {/* DISEÑO DINÁMICO: Botón Solicitar Propuesta CTA */}
                <a 
                  href="https://calendar.app.google/L2kNYujpQHvjAvkc8" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full text-center bg-[#6C47FF] text-white py-3.5 rounded-xl font-bold hover:bg-[#6C47FF]/90 hover:scale-[1.03] transition-all hover:shadow-lg shadow-[#6C47FF]/20"
                >
                  Solicitar Propuesta
                </a>
              </motion.div>

              {/* Card 2 - Formación en IA y Productividad (HIGHLIGHTED) */}
              {/* DISEÑO DINÁMICO: Tarjeta destacada con degradado #6C47FF -> #0F0F1A */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gradient-to-b from-[#6C47FF] to-[#0F0F1A] text-white rounded-[2rem] p-10 shadow-2xl relative flex flex-col justify-between transform md:-translate-y-4 border border-[#6C47FF]/20 hover:scale-[1.03] transition-all hover:shadow-[#6C47FF]/30 duration-300"
              >
                <div className="absolute top-8 right-8 bg-[#FFD166] text-[#0F0F1A] text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                  Popular
                </div>
                <div>
                  {/* DISEÑO DINÁMICO: Icono con gradiente suave */}
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/20">
                    <BrainCircuit className="text-white" size={28} />
                  </div>
                  <h3 className="font-primary text-2xl font-bold mb-4">Formación en IA y Productividad</h3>
                  <p className="text-gray-200 mb-4 leading-relaxed">
                    Capacitación práctica para equipos en herramientas digitales de última generación para multiplicar resultados.
                  </p>

                  <div className="mb-6 bg-white/10 text-[#FFD166] px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 border border-white/10">
                    <Zap size={16} className="text-[#FFD166] flex-shrink-0" /> 
                    <span>Equipos más productivos desde la primera semana.</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3 font-medium text-gray-100"><CheckCircle2 className="text-[#FFD166]" size={20} /> IAs generativas</li>
                    <li className="flex items-center gap-3 font-medium text-gray-100"><CheckCircle2 className="text-[#FFD166]" size={20} /> Google Workspace + Gemini</li>
                    <li className="flex items-center gap-3 font-medium text-gray-100"><CheckCircle2 className="text-[#FFD166]" size={20} /> Automatizaciones con GAS</li>
                  </ul>
                </div>
                <a 
                  href="https://calendar.app.google/L2kNYujpQHvjAvkc8" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full text-center bg-[#FFD166] text-[#0F0F1A] py-3.5 rounded-xl font-bold hover:bg-[#FFD166]/90 hover:scale-[1.03] transition-all hover:shadow-lg shadow-[#FFD166]/20"
                >
                  Agendar Consultoría Gratuita
                </a>
              </motion.div>

              {/* Card 3 - Consultoría de Negocio */}
              {/* DISEÑO DINÁMICO: Tarjeta con border-top #FF6B6B */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-[2rem] p-10 border border-gray-100 shadow-sm border-t-4 border-t-[#FF6B6B] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* DISEÑO DINÁMICO: Icono con gradiente suave */}
                  <div className="w-14 h-14 bg-gradient-to-br from-[#FF6B6B]/20 to-[#FF6B6B]/5 rounded-2xl flex items-center justify-center mb-8 border border-[#FF6B6B]/20">
                    <Database className="text-[#FF6B6B]" size={28} />
                  </div>
                  <h3 className="font-primary text-2xl font-bold mb-4 text-[#1A1A2E]">Consultoría de Negocio</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Análisis exhaustivo y rediseño de procesos administrativos para lograr una gestión verdaderamente eficiente.
                  </p>

                  <div className="mb-6 bg-emerald-50 text-emerald-800 px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 border border-emerald-100">
                    <Zap size={16} className="text-emerald-600 flex-shrink-0" /> 
                    <span>Identifica ineficiencias y recupera horas de trabajo cada semana.</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3 text-gray-800 font-medium"><CheckCircle2 className="text-[#FF6B6B]" size={20} /> Control de gestión ágil</li>
                    <li className="flex items-center gap-3 text-gray-800 font-medium"><CheckCircle2 className="text-[#FF6B6B]" size={20} /> Acompañamiento en la transformación digital</li>
                    <li className="flex items-center gap-3 text-gray-800 font-medium"><CheckCircle2 className="text-[#FF6B6B]" size={20} /> Mejora de procesos</li>
                  </ul>
                </div>

                {/* DISEÑO DINÁMICO: Botón Solicitar Propuesta CTA */}
                <a 
                  href="https://calendar.app.google/L2kNYujpQHvjAvkc8" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full text-center bg-[#FF6B6B] text-white py-3.5 rounded-xl font-bold hover:bg-[#FF6B6B]/90 hover:scale-[1.03] transition-all hover:shadow-lg shadow-[#FF6B6B]/20"
                >
                  Solicitar Propuesta
                </a>
              </motion.div>

            </div>
          </div>
        </section>

        {/* MENTORÍA SECTION - FONDO OSCURO */}
        {/* DISEÑO DINÁMICO: Fondo oscuro #0F0F1A */}
        <section id="mentoria" className="py-24 bg-[#0F0F1A] border-t border-white/5 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-primary text-3xl md:text-5xl font-extrabold mb-6 text-white tracking-tight">La Mentoría</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Aprendizaje continuo y práctico. Domina la Inteligencia Artificial y optimiza tu tiempo a tu propio ritmo con nuestras mentorías personalizadas.
              </p>
            </div>

            {/* Grid 3 Cursos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              
              {/* Curso 1 */}
              {/* DISEÑO DINÁMICO: Tarjetas de curso con fondo #1A1A2E y efecto hover */}
              <div className="bg-[#1A1A2E] border border-white/10 rounded-[2rem] p-8 flex flex-col justify-between hover:shadow-[0_15px_30px_rgba(255,209,102,0.1)] hover:-translate-y-1.5 transition-all duration-300">
                <div>
                  <div className="mb-6">
                    {/* DISEÑO DINÁMICO: Tag MÁS VENDIDO dorado */}
                    <span className="inline-block bg-[#FFD166] text-[#0F0F1A] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                      Más Vendido
                    </span>
                  </div>
                  <h3 className="font-primary text-2xl font-bold mb-4 text-white">Crea presentaciones de alto impacto en minutos con IA</h3>
                  <p className="text-gray-300 mb-8 leading-relaxed text-sm">
                    Destaca profesionalmente y ahorra horas de trabajo delegando el diseño a la Inteligencia Artificial. Cautiva a tu audiencia con diapositivas irresistibles sin conocimientos previos de diseño.
                  </p>
                </div>
                {/* DISEÑO DINÁMICO: CTA del curso con dorado */}
                <a 
                  href="https://pay.hotmart.com/G106034907Y" 
                  target="_blank" rel="noopener noreferrer"
                  className="w-full bg-[#FFD166] text-[#0F0F1A] py-4 rounded-xl font-bold text-center hover:bg-[#FFD166]/90 hover:scale-[1.03] transition-all shadow-md hover:shadow-lg"
                >
                  Quiero este curso
                </a>
              </div>

              {/* Curso 2 */}
              {/* DISEÑO DINÁMICO: Tarjetas de curso con fondo #1A1A2E y efecto hover */}
              <div className="bg-[#1A1A2E] border border-white/10 rounded-[2rem] p-8 flex flex-col justify-between hover:shadow-[0_15px_30px_rgba(108,71,255,0.15)] hover:-translate-y-1.5 transition-all duration-300">
                <div>
                  <div className="mb-6">
                    {/* DISEÑO DINÁMICO: Tag PRODUCTIVIDAD EXTREMA violeta */}
                    <span className="inline-block bg-[#6C47FF] text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                      Productividad Extrema
                    </span>
                  </div>
                  <h3 className="font-primary text-2xl font-bold mb-4 text-white">Hackea tu agenda con Gemini</h3>
                  <p className="text-gray-300 mb-8 leading-relaxed text-sm">
                    Multiplica tu productividad, organiza tu vida y domina la Inteligencia Artificial de Google a tu favor. Libera tu mente de las tareas repetitivas y recupera el control total de tu tiempo.
                  </p>
                </div>
                {/* DISEÑO DINÁMICO: CTA del curso con violeta */}
                <a 
                  href="https://pay.hotmart.com/G106198119J" 
                  target="_blank" rel="noopener noreferrer"
                  className="w-full bg-[#6C47FF] text-white py-4 rounded-xl font-bold text-center hover:bg-[#6C47FF]/90 hover:scale-[1.03] transition-all shadow-md hover:shadow-lg"
                >
                  Acceder ahora
                </a>
              </div>

              {/* Curso 3 */}
              {/* DISEÑO DINÁMICO: Tarjetas de curso con fondo #1A1A2E y efecto hover */}
              <div className="bg-[#1A1A2E] border border-white/10 rounded-[2rem] p-8 flex flex-col justify-between hover:shadow-[0_15px_30px_rgba(255,107,107,0.15)] hover:-translate-y-1.5 transition-all duration-300">
                <div>
                  <div className="mb-6">
                    {/* DISEÑO DINÁMICO: Tag ORGANIZACIÓN MENTAL coral */}
                    <span className="inline-block bg-[#FF6B6B] text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                      Organización Mental
                    </span>
                  </div>
                  <h3 className="font-primary text-2xl font-bold mb-4 text-white">Crea tu segundo cerebro con NotebookLM</h3>
                  <p className="text-gray-300 mb-8 leading-relaxed text-sm">
                    Libérate de la fatiga mental y el caos de documentos. Aprende a construir una "biblioteca inteligente" privada que analiza y conecta tu información exacta sin alucinaciones.
                  </p>
                </div>
                {/* DISEÑO DINÁMICO: CTA del curso con coral */}
                <a 
                  href="https://pay.hotmart.com/H106550489L" 
                  target="_blank" rel="noopener noreferrer"
                  className="w-full bg-[#FF6B6B] text-white py-4 rounded-xl font-bold text-center hover:bg-[#FF6B6B]/90 hover:scale-[1.03] transition-all shadow-md hover:shadow-lg"
                >
                  Quiero este curso
                </a>
              </div>

            </div>

            {/* COMBO & GUIA Destacados */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Combo Box */}
              {/* DISEÑO DINÁMICO: Combo con degradado diagonal violeta-oscuro */}
              <div className="bg-gradient-to-br from-[#6C47FF] to-[#0F0F1A] text-white rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col justify-center border border-white/10 hover:scale-[1.02] transition-all duration-300">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 text-white/5">
                  <Zap size={200} />
                </div>
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6C47FF] to-[#FF6B6B] text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-6 shadow-sm">
                    <Star size={16} fill="currentColor" className="text-[#FFD166]" /> Oferta Especial
                  </div>
                  <h3 className="font-primary text-3xl font-bold mb-4">Combo Máster: Los 3 Cursos</h3>
                  <p className="text-gray-200 mb-8 text-lg leading-relaxed">
                    Lleva tu productividad al siguiente nivel. Adquiere los 3 cursos juntos por un precio especial y domina la IA en todas las áreas de tu negocio.
                  </p>
                  {/* DISEÑO DINÁMICO: Botón Combo llamativo */}
                  <a 
                    href="https://pay.hotmart.com/R106562462M" 
                    target="_blank" rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-[#FFD166] to-[#FF6B6B] text-[#0F0F1A] px-8 py-4 rounded-xl font-extrabold text-center hover:scale-[1.03] transition-all shadow-lg hover:shadow-xl"
                  >
                    Obtener el Combo Completo
                  </a>
                </div>
              </div>

              {/* Guia Low Cost */}
              {/* DISEÑO DINÁMICO: Tarjeta con fondo #1A1A2E */}
              <div className="bg-[#1A1A2E] rounded-[2rem] p-8 md:p-12 border border-white/10 flex flex-col justify-center items-start hover:scale-[1.02] transition-all duration-300">
                <div className="w-12 h-12 bg-[#6C47FF]/20 rounded-xl flex items-center justify-center mb-6 border border-[#6C47FF]/30">
                  <BookOpen className="text-[#6C47FF]" size={24} />
                </div>
                <h3 className="font-primary text-2xl font-bold mb-3 text-white">Guía Práctica Low Cost</h3>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  Empieza hoy mismo con una pequeña inversión. Una guía paso a paso esencial para dar tus primeros pasos en el desarrollo de herramientas operativas.
                </p>
                {/* DISEÑO DINÁMICO: Botón Guía con degradado */}
                <a 
                  href="https://tr.ee/InxcAV42yE" 
                  target="_blank" rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#6C47FF] to-[#FF6B6B] text-white px-8 py-4 rounded-xl font-bold text-center hover:scale-[1.03] transition-all shadow-md"
                >
                  Descargar Guía
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* BOTTOM CTA - DEGRADADO */}
        <section className="py-24 bg-[#F8F7FF]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* DISEÑO DINÁMICO: Tarjeta CTA final con degradado diagonal */}
            <div className="bg-gradient-to-br from-[#6C47FF] to-[#0F0F1A] rounded-[3rem] p-12 md:p-20 text-center shadow-2xl border border-[#6C47FF]/20 text-white relative overflow-hidden">
              <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-gradient-to-tr from-[#FF6B6B]/10 to-transparent rounded-full blur-2xl"></div>
              
              <h2 className="font-primary text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-white leading-tight relative z-10">
                ¿Tu equipo pierde horas en tareas que la IA ya puede resolver?
              </h2>
              <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed relative z-10">
                Ya sea que necesites un dashboard personalizado, formar a tu equipo o rediseñar tus procesos corporativos, estamos aquí para ayudarte a escalar.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-10 relative z-10">
                {/* DISEÑO DINÁMICO: Botón Reservar blanco/violeta */}
                <a 
                  href="https://calendar.app.google/L2kNYujpQHvjAvkc8" 
                  target="_blank" rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-white text-[#6C47FF] px-8 py-4 rounded-full font-bold hover:bg-gray-100 hover:scale-[1.03] transition-all shadow-lg shadow-black/15"
                >
                  Reservar Consultoría
                </a>
                
                {/* DISEÑO DINÁMICO: Botón WhatsApp verde */}
                <a 
                  href="https://wa.me/34666126573?text=Hola!%20Me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n." 
                  target="_blank" rel="noopener noreferrer"
                  className="w-full sm:w-auto flex justify-center items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:bg-[#25D366]/90 hover:scale-[1.03] transition-all shadow-lg shadow-black/15"
                >
                  <MessageCircle size={18} /> WhatsApp
                </a>
              </div>

              <div className="pt-8 border-t border-white/10 flex items-center justify-center gap-2 text-sm text-gray-300 font-medium relative z-10">
                <CheckCircle2 size={16} className="text-[#FFD166]" />
                Sesiones online vía Google Meet. Pagos 100% seguros.
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      {/* DISEÑO DINÁMICO: Fondo muy oscuro #0A0A12 */}
      <footer className="bg-[#0A0A12] pt-1 pb-12 font-secondary text-[#9999AA] relative">
        
        {/* DISEÑO DINÁMICO: Línea separadora con degradado */}
        <div className="h-1 bg-gradient-to-r from-[#6C47FF] to-[#FF6B6B] w-full mb-16"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/5 text-left">
            
            {/* Columna 1: Brand / Info */}
            <div className="space-y-4">
              <span className="font-primary font-bold text-2xl tracking-tight text-white block">
                La <span className="text-[#6C47FF]">Mentoría</span>
              </span>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                Consultoría & Formación en Datos e IA. Transformamos el potencial de tu negocio con tecnología y automatización con propósito.
              </p>
              <p className="text-gray-300 text-sm font-semibold">
                Valencia, España · <a href="mailto:hola@lamentoria.info" className="hover:text-[#6C47FF] transition-colors">hola@lamentoria.info</a>
              </p>
            </div>

            {/* Columna 2: Navegación Rápida */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Navegación</h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="#equipo" className="text-gray-400 hover:text-[#6C47FF] transition-colors">El Equipo</a>
                </li>
                <li>
                  <a href="#servicios" className="text-gray-400 hover:text-[#6C47FF] transition-colors">Servicios</a>
                </li>
                <li>
                  <a href="#mentoria" className="text-gray-400 hover:text-[#6C47FF] transition-colors">La Mentoría</a>
                </li>
              </ul>
            </div>

            {/* Columna 3: Legal & Socials */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Legal y Social</h4>
              <ul className="space-y-2.5 text-sm mb-6">
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#6C47FF] transition-colors">Política de Privacidad</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#6C47FF] transition-colors">Aviso Legal</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#6C47FF] transition-colors">Política de Cookies</a>
                </li>
              </ul>
              <div className="flex gap-4">
                <a href="#" aria-label="LinkedIn" className="p-2.5 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white hover:bg-[#6C47FF] hover:border-[#6C47FF] transition-all">
                  <Linkedin size={18} />
                </a>
                <a href="#" aria-label="Instagram" className="p-2.5 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white hover:bg-[#FF6B6B] hover:border-[#FF6B6B] transition-all">
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 text-center md:flex md:justify-between md:items-center">
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} La Mentoría. Todos los derechos reservados.
            </p>
            <p className="text-gray-500 text-xs mt-2 md:mt-0">
              Valencia, España · hola@lamentoria.info
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
