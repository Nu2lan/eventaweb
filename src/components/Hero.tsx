import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ChevronRight, Shield, Globe, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TransportBackground = () => {
  // Routes defined for a 1440x900 viewport concept, scalable via viewBox
  const routes = [
    // Main cross-city arteries
    { path: "M-100,450 C300,450 500,200 720,450 S1140,700 1540,450", duration: 20, delay: 0 },
    { path: "M-100,200 Q720,900 1540,200", duration: 25, delay: 5 },
    
    // Vertical/Diagonal connectors
    { path: "M360,-100 C360,300 100,600 360,1000", duration: 18, delay: 2 },
    { path: "M1080,-100 C1080,300 1340,600 1080,1000", duration: 22, delay: 4 },
    
    // Inner loops/connectors
    { path: "M500,350 Q720,150 940,350", duration: 12, delay: 1 },
    { path: "M500,550 Q720,750 940,550", duration: 12, delay: 7 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-[#0b0b0b] transition-colors duration-300">
      <svg 
        className="w-full h-full opacity-50 dark:opacity-50" 
        viewBox="0 0 1440 900" 
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(209, 168, 75, 0)" />
            <stop offset="50%" stopColor="rgba(209, 168, 75, 0.6)" />
            <stop offset="100%" stopColor="rgba(209, 168, 75, 0)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Render Routes */}
        {routes.map((route, i) => (
          <g key={i}>
            {/* Static Base Path (Subtle) */}
            <path 
              d={route.path} 
              fill="none" 
              stroke="#d1a84b" 
              strokeWidth="1" 
              strokeOpacity="0.2" // Increased opacity for light mode visibility
              strokeDasharray="4 6"
              className="stroke-[#d1a84b] dark:stroke-[#d1a84b]"
            />
            
            {/* Moving Particle (Vehicle) */}
            <circle r="3" fill="#000" className="fill-black dark:fill-[#f9f8f7]" filter="url(#glow)">
              <animateMotion 
                dur={`${route.duration}s`} 
                repeatCount="indefinite" 
                path={route.path}
                rotate="auto"
                begin={`${route.delay}s`}
              />
            </circle>

            {/* Trail Effect (Fading line following the particle) - Simulated via separate pulsing path */}
             <motion.path
              d={route.path}
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 0.3, 0], opacity: [0, 0.5, 0], strokeDashoffset: [0, -200] }}
              transition={{ 
                duration: route.duration, 
                repeat: Infinity, 
                ease: "linear",
                delay: route.delay,
                times: [0, 0.5, 1]
              }}
            />
          </g>
        ))}

        {/* Strategic Nodes (Hubs) */}
        {[
          { cx: 720, cy: 450, r: 4 }, // Center Hub
          { cx: 360, cy: 300, r: 3 }, // Top Left
          { cx: 1080, cy: 300, r: 3 }, // Top Right
          { cx: 360, cy: 600, r: 3 }, // Bottom Left
          { cx: 1080, cy: 600, r: 3 }, // Bottom Right
        ].map((node, i) => (
          <g key={`node-${i}`}>
            <circle cx={node.cx} cy={node.cy} r={node.r} fill="#d1a84b" fillOpacity="0.8" />
            <circle cx={node.cx} cy={node.cy} r={node.r * 4} fill="none" stroke="#d1a84b" strokeWidth="1" strokeOpacity="0.15">
              <animate attributeName="r" values={`${node.r * 2};${node.r * 6};${node.r * 2}`} dur="4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;0;0.5" dur="4s" repeatCount="indefinite" />
            </circle>
          </g>
        ))}
      </svg>
      
      {/* Radial Vignette for Depth - Adaptive for Light/Dark */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#ffffff_95%)] dark:bg-[radial-gradient(circle_at_center,transparent_20%,#0b0b0b_95%)] pointer-events-none transition-colors duration-300" />
    </div>
  );
};

export const Hero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="relative h-screen w-full overflow-hidden bg-background dark:bg-primary flex items-center justify-center transition-colors duration-300">
      
      {/* Background Container - Handles Theme Switching */}
      <div className="absolute inset-0 bg-[#0b0b0b] dark:bg-[#0b0b0b] opacity-100 dark:opacity-100 transition-opacity duration-300">
          <TransportBackground />
      </div>

      {/* Subtle HUD Elements (Localized) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute top-24 left-6 md:left-20 flex items-center gap-3 opacity-60"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 0.6, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <div className="h-px w-12 bg-gradient-to-r from-green-500/50 to-transparent" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#d1a84b]/80 font-mono">
            {t('hero_bg.live_traffic')}
          </span>
        </motion.div>

        <motion.div 
          className="absolute bottom-24 right-6 md:right-20 flex items-center gap-3 opacity-60"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 0.6, x: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#d1a84b]/80 font-mono">
            {t('hero_bg.optimized')}
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-[#d1a84b]/50 to-transparent" />
          <Activity className="w-3 h-3 text-[#d1a84b]" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 z-10 text-center relative">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 text-foreground dark:text-white"
        >
          {t('hero.title')}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-foreground/80 dark:text-white/70 mb-10 max-w-3xl mx-auto font-light"
        >
          {t('hero.subtitle')}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button 
            onClick={() => document.getElementById('what-is')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-[#d1a84b] text-black font-bold rounded-lg hover:bg-[#b08d3b] transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(209,168,75,0.2)] hover:shadow-[0_0_50px_rgba(209,168,75,0.4)]"
          >
            {t('hero.cta_primary')} <ArrowRight className="w-4 h-4" />
          </button>
          <button 
            onClick={() => navigate('/request')}
            className="px-8 py-4 border border-foreground/10 dark:border-white/10 text-foreground dark:text-white hover:bg-foreground/5 dark:hover:bg-white/5 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 backdrop-blur-sm"
          >
            {t('hero.cta_secondary')} <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
