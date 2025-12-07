'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect, useMemo, useCallback } from 'react';
import Image from 'next/image';

// Types for better type safety
interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  tech: string[];
  category: string;
  github: string;
  demo: string;
  image: string;
  status: string;
  year: string;
  impact: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  color: 'emerald' | 'blue' | 'orange' | 'purple';
}

// Animation variants moved outside component to prevent re-creation
const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const leftSidebarRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedProject, setSelectedProject] = useState(0);

  // Function to get tech icon path
  const getTechIcon = useCallback((tech: string): string | null => {
    const techIconMap: { [key: string]: string } = {
      'React': '/icons/react.svg',
      'Node.js': '/icons/nodejs.svg',
      'Next.js': '/icons/Next.js.svg',
      'TensorFlow': '/icons/TensorFlow.svg',
      'IoT Sensors': '/icons/javascript.svg', // Generic tech icon
      'MongoDB': '/icons/mongodb.svg',
      'Three.js': '/icons/Three.js.svg',
      'WebGL': '/icons/javascript.svg',
      'Firebase': '/icons/firebase.svg',
      'Tailwind CSS': '/icons/tailwind.svg',
      'Tailwind': '/icons/tailwind.svg',
      'Chart.js': '/icons/javascript.svg',
      'Express': '/icons/express.svg',
      'TypeScript': '/icons/javascript.svg', // Using JS icon for TypeScript
      'Framer Motion': '/icons/react.svg',
      'Vue.js': '/icons/javascript.svg',
      'Laravel': '/icons/php.svg',
      'MySQL': '/icons/sql.svg',
      'Vercel': '/icons/javascript.svg',
      'CSS': '/icons/css3.svg',
      'CSS3': '/icons/css3.svg',
      'HTML': '/icons/html5.svg',
      'HTML5': '/icons/html5.svg',
      'JavaScript': '/icons/javascript.svg',
      'JS': '/icons/javascript.svg',
      'Python': '/icons/python.svg',
      'PHP': '/icons/php.svg',
      'Java': '/icons/java.svg',
      'Git': '/icons/git.svg',
      'Docker': '/icons/docker.svg',
      'AWS': '/icons/aws.svg',
      'Azure': '/icons/azure.svg',
      'VB.NET': '/icons/NET core.svg',
      '.NET': '/icons/NET core.svg',
      'Blender': '/icons/Blender.svg'
    };
    
    return techIconMap[tech] || null;
  }, []);

  // Memoized projects data to prevent re-creation on every render
  const projects: Project[] = useMemo(() => [
    {
      id: 1,
      title: 'Aquivus',
      subtitle: 'Smart Agriculture Platform',
      description: 'Revolutionary IoT system leveraging AI for precision agriculture',
      fullDescription: 'An advanced AI-powered IoT irrigation system that combines smart sensors, predictive algorithms, and machine learning to optimize agricultural processes. This comprehensive solution monitors soil moisture, weather patterns, and crop health in real-time, resulting in 37% water optimization, 22% yield increase, and 40% reduction in manual labor.',
      tech: ['React', 'JS', 'TensorFlow', 'Firebase'],
      category: 'IoT & AI',
      github: 'https://github.com/JCEnero/crop-care-system-iot-based',
      demo: 'https://aquivus.web.app/',
      image: '/projects/aquivus-project.png',
      status: 'Live',
      year: '2024',
      impact: {
        primary: '37% Water Saved',
        secondary: '22% Yield Increase',
        tertiary: '40% Less Labor'
      },
      color: 'emerald'
    },
    {
      id: 2,
      title: 'FindMe',
      subtitle: '3D Interactive Navigation Guide',
      description: 'KIOSK-based navigation system for Quezon City University Main Campus',
      fullDescription: 'A sophisticated 3D interactive navigation guide designed specifically for Quezon City University Main Campus. This KIOSK-based system provides real-time wayfinding, building information, and campus services location to help students, faculty, and visitors navigate the campus efficiently.',
      tech: ['VB.NET', 'JS', 'Three.js', 'Blender', 'HTML5', 'CSS3'],
      category: 'Navigation',
      github: 'https://github.com/JCEnero/FindMe-WebApp',
      demo: 'https://find-me-web-app.vercel.app',
      image: '/projects/findme-project.png',
      status: 'Live',
      year: '2024',
      impact: {
        primary: '3D Interactive',
        secondary: 'KIOSK Ready',
        tertiary: 'Campus Wide'
      },
      color: 'blue'
    },
    {
      id: 3,
      title: 'Budgetsy',
      subtitle: 'Smart Personal Finance Tracker',
      description: 'Personal finance tracker that helps users monitor income and expenses efficiently',
      fullDescription: 'Developed a personal finance tracker web app that helped users monitor income and expenses, leading to 25% faster financial logging compared to manual spreadsheets. Implemented data visualization charts for spending categories, enabling users to identify and reduce unnecessary expenses by an average of 15% per month. Designed a secure account management system with user authentication, ensuring 100% data privacy and improving user trust during financial tracking.',
      tech: ['React', 'Node.js', 'Chart.js', 'MongoDB', 'Express'],
      category: 'Finance',
      github: 'https://github.com/JCEnero/Budgetsy',
      demo: 'https://budgetsy-app.vercel.app',
      image: '/projects/development.png',
      status: 'Live',
      year: '2025',
      impact: {
        primary: '25% Faster Logging',
        secondary: '15% Expense Cut',
        tertiary: '100% Data Privacy'
      },
      color: 'orange'
    },
    {
      id: 4,
      title: 'Portfolio',
      subtitle: 'Personal Branding Solution',
      description: 'Modern portfolio showcasing development expertise and projects',
      fullDescription: 'A meticulously crafted personal portfolio that serves as both a showcase of technical abilities and a professional brand statement. Built with cutting-edge technologies and optimized for performance, accessibility, and user experience across all devices.',
      tech: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind'],
      category: 'Portfolio',
      github: 'https://github.com/JCEnero/Portfolio',
      demo: 'https://portfolio-website.vercel.app',
      image: '/code.jpg',
      status: 'Live',
      year: '2024',
      impact: {
        primary: '98% Performance',
        secondary: '100% Accessibility',
        tertiary: 'Mobile Optimized'
      },
      color: 'purple'
    },
  ], []);

  // Memoized color classes to prevent recalculation
  const getColorClasses = useCallback((color: Project['color']) => {
    const colorMap = {
      emerald: {
        bg: 'from-emerald-500/20 via-emerald-400/10 to-transparent',
        border: 'border-emerald-500/30',
        text: 'text-emerald-400',
        glow: 'shadow-emerald-500/20'
      },
      blue: {
        bg: 'from-blue-500/20 via-blue-400/10 to-transparent',
        border: 'border-blue-500/30',
        text: 'text-blue-400',
        glow: 'shadow-blue-500/20'
      },
      orange: {
        bg: 'from-orange-500/20 via-orange-400/10 to-transparent',
        border: 'border-orange-500/30',
        text: 'text-orange-400',
        glow: 'shadow-orange-500/20'
      },
      purple: {
        bg: 'from-purple-500/20 via-purple-400/10 to-transparent',
        border: 'border-purple-500/30',
        text: 'text-purple-400',
        glow: 'shadow-purple-500/20'
      }
    };
    return colorMap[color];
  }, []);

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const projectSections = scrollContainer.querySelectorAll('[data-project-index]');
    const containerRect = scrollContainer.getBoundingClientRect();
    const containerCenter = containerRect.height / 2;
    
    let currentProject = 0;
    projectSections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= containerCenter && rect.bottom >= containerCenter) {
        currentProject = index;
      }
    });
    
    setSelectedProject(currentProject);
  }, []);

  // Scroll to project function
  const scrollToProject = useCallback((index: number) => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const projectSection = scrollContainer.querySelector(`[data-project-index="${index}"]`);
    if (!projectSection) return;

    const containerRect = scrollContainer.getBoundingClientRect();
    const elementRect = projectSection.getBoundingClientRect();
    const scrollTop = scrollContainer.scrollTop;
    const targetScroll = scrollTop + elementRect.top - containerRect.top - (containerRect.height / 2) + (elementRect.height / 2);
    
    scrollContainer.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  }, []);

  // Optimized scroll event listener
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    scrollContainer.addEventListener('scroll', throttledScrollHandler, { passive: true });
    return () => scrollContainer.removeEventListener('scroll', throttledScrollHandler);
  }, [handleScroll]);

  // Left sidebar scroll synchronization
  useEffect(() => {
    const leftSidebar = leftSidebarRef.current;
    const rightContent = scrollRef.current;
    
    if (!leftSidebar || !rightContent) return;

    const handleLeftSidebarScroll = (e: WheelEvent) => {
      // Prevent default left sidebar scrolling
      e.preventDefault();
      
      // Apply scroll to the right content area
      rightContent.scrollTop += e.deltaY;
    };

    leftSidebar.addEventListener('wheel', handleLeftSidebarScroll, { passive: false });
    return () => leftSidebar.removeEventListener('wheel', handleLeftSidebarScroll);
  }, []);

  return (
    <section ref={ref} className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-slate-950 px-6 lg:px-12 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,69,219,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.06),transparent_80%)]" />
      
      <style jsx global>{`
        .right-edge-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        
        .right-edge-scrollbar::-webkit-scrollbar-track {
          background: rgba(39, 39, 42, 0.3);
          border-radius: 4px;
        }
        
        .right-edge-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.6);
          border-radius: 4px;
          border: 2px solid rgba(39, 39, 42, 0.3);
        }
        
        .right-edge-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #60a5fa, #a78bfa);
        }
        
        .right-edge-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #3b82f6 rgba(39, 39, 42, 0.3);
        }
        
        /* Position scrollbar at the very right edge */
        .scrollbar-container {
          position: relative;
        }
        
        .scrollbar-container::-webkit-scrollbar {
          position: absolute;
          right: 0;
        }
      `}</style>
      
      <div className="flex h-screen">
        {/* Fixed Left Sidebar - Modern Minimalist Design */}
        <div ref={leftSidebarRef} className="hidden lg:block fixed left-20 lg:left-32 xl:left-40 top-0 w-2/5 xl:w-1/3 h-full z-20">
          <div className="flex flex-col h-full pt-32 pb-12 px-8 xl:px-12">
            {/* Project Navigation - Minimalist Vertical Indicators */}
            <div className="flex-1 flex items-center">
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                className="w-full max-w-sm"
              >
                {/* Header */}
                <motion.div
                  variants={fadeInUp}
                  className="mb-12"
                >
                  <h3 className="text-sm font-light text-white/60 tracking-[0.2em] uppercase mb-4">
                    Projects
                  </h3>
                  <div className="w-8 h-px bg-gradient-to-r from-white/40 to-transparent"></div>
                </motion.div>

                {/* Project List */}
                <div className="space-y-6">
                  {projects.map((project, index) => {
                    const colors = getColorClasses(project.color);
                    const isSelected = selectedProject === index;
                    
                    return (
                      <motion.div
                        key={project.id}
                        variants={fadeInUp}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                        className="relative group"
                      >
                        {/* Active Indicator Line */}
                        <div className={`absolute -left-6 top-0 w-0.5 h-full transition-all duration-500 ${
                          isSelected 
                            ? `bg-gradient-to-b ${colors.text.replace('text-', 'from-')} to-transparent opacity-100` 
                            : 'bg-white/20 opacity-0 group-hover:opacity-30'
                        }`} />
                        
                        <motion.button
                          onClick={() => scrollToProject(index)}
                          className="w-full text-left transition-all duration-300 group/btn"
                          whileHover={{ x: 4 }}
                          aria-label={`Navigate to ${project.title}`}
                        >
                          {/* Project Number & Title Row */}
                          <div className="flex items-baseline gap-4 mb-1">
                            <span className={`text-xs font-mono transition-colors duration-300 ${
                              isSelected 
                                ? colors.text + ' opacity-100' 
                                : 'text-white/40 group-hover/btn:text-white/70'
                            }`}>
                              {String(index + 1).padStart(2, '0')}
                            </span>
                            <h4 className={`font-medium transition-all duration-300 ${
                              isSelected 
                                ? 'text-white text-lg' 
                                : 'text-white/70 text-base group-hover/btn:text-white group-hover/btn:text-lg'
                            }`}>
                              {project.title}
                            </h4>
                          </div>
                          
                          {/* Project Meta */}
                          <div className="flex items-center gap-3 ml-8">
                            <span className={`text-xs transition-colors duration-300 ${
                              isSelected 
                                ? 'text-white/80' 
                                : 'text-white/40 group-hover/btn:text-white/60'
                            }`}>
                              {project.category}
                            </span>
                            <div className={`w-1 h-1 rounded-full transition-colors duration-300 ${
                              isSelected 
                                ? 'bg-white/60' 
                                : 'bg-white/20 group-hover/btn:bg-white/40'
                            }`} />
                            <span className={`text-xs font-light transition-colors duration-300 ${
                              isSelected 
                                ? 'text-white/60' 
                                : 'text-white/30 group-hover/btn:text-white/50'
                            }`}>
                              {project.year}
                            </span>
                          </div>

                          {/* Subtle Description - Only show on hover or active */}
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ 
                              opacity: isSelected ? 1 : 0, 
                              height: isSelected ? 'auto' : 0 
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="text-xs text-white/50 leading-relaxed mt-2 ml-8 pr-4">
                              {project.subtitle}
                            </p>
                          </motion.div>
                        </motion.button>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Progress Indicator */}
                <motion.div
                  variants={fadeInUp}
                  transition={{ delay: 0.6 }}
                  className="mt-12 pt-8 border-t border-white/10"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-px bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-blue-400 to-purple-400"
                        initial={{ width: '0%' }}
                        animate={{ 
                          width: `${((selectedProject + 1) / projects.length) * 100}%` 
                        }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      />
                    </div>
                    <span className="text-xs font-mono text-white/40">
                      {selectedProject + 1}/{projects.length}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

      {/* Right Column - Scrollable Content */}
      <div className="w-full lg:ml-[calc(40%+4rem)] xl:ml-[calc(33.333333%+6rem)] lg:w-3/5 xl:w-2/3 relative">
        <div 
          ref={scrollRef}
          className="h-screen overflow-y-auto right-edge-scrollbar" 
          style={{
            marginRight: 'calc(-1 * (100vw - 100%))',
            paddingRight: 'calc(100vw - 100%)',
            width: 'calc(100% + (100vw - 100%))'
          }}
        >
          <div className="pt-32 pb-12 px-6 lg:px-8" style={{
            marginRight: '3rem',
            paddingRight: '0'
          }}>
            {/* Main Title */}
            <div className="mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-wider mb-4"
              >
                Works
              </motion.h2>
              <div className="w-12 h-px bg-white/30 mb-6"></div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg text-zinc-300 leading-relaxed max-w-2xl"
              >
                A showcase of my projects and development work. Each project represents a unique challenge and learning experience in my journey as a developer.
              </motion.p>
            </div>

            {/* Projects List */}
            <div className="space-y-20">
              {projects.map((project, index) => {
                const colors = getColorClasses(project.color);
                
                return (
                  <motion.div
                    key={project.id}
                    data-project-index={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="relative"
                  >
                    {/* Project Card */}
                    <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20">
                      {/* Project Image */}
                      <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                        
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-top transition-transform duration-700 hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 70vw"
                          priority={index < 2} // Priority loading for first 2 images
                        />

                        {/* Status Badge */}
                        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20">
                          <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/20">
                            <span className="text-xs text-gray-300">{project.category}</span>
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-6 sm:p-8 lg:p-12">
                        <div className="mb-6">
                          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
                            {project.title}
                          </h2>
                          <p className="text-lg sm:text-xl text-gray-400 font-medium">
                            {project.subtitle}
                          </p>
                        </div>

                        <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                          {project.fullDescription}
                        </p>

                        {/* Tech Stack */}
                        <div className="mb-6 sm:mb-8">
                          <div className="flex flex-wrap gap-3 sm:gap-4">
                            {project.tech.map((tech) => {
                              const iconPath = getTechIcon(tech);
                              return (
                                <div
                                  key={tech}
                                  className="group relative"
                                >
                                  {iconPath ? (
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 p-2 bg-gradient-to-r from-white/10 to-white/5 rounded-xl border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 flex items-center justify-center">
                                      <Image
                                        src={iconPath}
                                        alt={tech}
                                        width={24}
                                        height={24}
                                        className="w-full h-full object-contain"
                                      />
                                    </div>
                                  ) : (
                                    <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-white/10 to-white/5 text-white text-xs sm:text-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                                      {tech}
                                    </span>
                                  )}
                                  
                                  {/* Tooltip */}
                                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black/90 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                                    {tech}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className={`flex items-center justify-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r ${colors.bg} text-white rounded-xl sm:rounded-2xl font-semibold border ${colors.border} hover:shadow-2xl ${colors.glow} transition-all duration-300 group/btn`}
                          >
                            <span>View Live Project</span>
                            <svg 
                              className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover/btn:translate-x-1" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </motion.a>

                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center justify-center gap-3 px-6 py-3 sm:px-8 sm:py-4 border border-white/30 text-white rounded-xl sm:rounded-2xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                          >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                            </svg>
                            <span>View Source</span>
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}