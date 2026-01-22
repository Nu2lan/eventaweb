import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Shield, Lock, Activity } from 'lucide-react';

export const WhatIsEventa = () => {
  const { t } = useTranslation();

  return (
    <section id="what-is" className="py-24 bg-background dark:bg-primary transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary dark:text-white">
              {t('sections.what_is')}
            </h2>
            <p className="text-lg text-primary/70 dark:text-white/70 mb-8 leading-relaxed">
              {t('what_is.description', "EVENTA is not a public ride-hailing app. It is a closed, secure, operator-managed system designed specifically for high-stakes events. We provide absolute control over every vehicle and guest movement.")}
            </p>
            
            <div className="space-y-4">
              {[
                { icon: Lock, text: t('what_is.bullet_1', "Closed & Secure Ecosystem") },
                { icon: Activity, text: t('what_is.bullet_2', "Real-time Operational Control") },
                { icon: Shield, text: t('what_is.bullet_3', "Designed for High-Pressure Events") }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-black/5 dark:bg-white/5 border border-transparent hover:border-secondary/50 transition-colors">
                  <item.icon className="w-6 h-6 text-secondary" />
                  <span className="font-medium text-primary dark:text-white">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[500px] bg-white dark:bg-[#050505] rounded-3xl overflow-hidden flex items-center justify-center border border-secondary/10 dark:border-white/5 shadow-2xl transition-colors duration-300"
          >
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-30 dark:opacity-20">
              <svg className="w-full h-full" width="100%" height="100%">
                <defs>
                  <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-secondary/30 dark:text-white/20" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" />
              </svg>
            </div>

            {/* Radar Scan Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 dark:via-secondary/5 to-transparent z-0"
              animate={{ top: ['-100%', '100%'] }}
              transition={{ duration: 500, repeat: Infinity, ease: "linear" }}
            />

            {/* Central System Core */}
            <div className="relative z-10 flex flex-col items-center">
              {/* Main Circular Interface */}
              <div className="relative w-64 h-64 mb-8 flex items-center justify-center">
                
                {/* Outer Static Ring */}
                <div className="absolute inset-0 rounded-full border border-secondary/10 dark:border-white/5" />
                
                {/* Rotating Dashed Ring */}
                <motion.div
                  className="absolute inset-2 rounded-full border border-secondary/30 dark:border-secondary/20 border-dashed"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Counter-Rotating Segments */}
                <motion.div
                  className="absolute inset-8 rounded-full border-2 border-transparent border-t-secondary/40 dark:border-t-secondary/30 border-b-secondary/40 dark:border-b-secondary/30"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />

                {/* Pulsing Core Background */}
                <motion.div
                  className="absolute inset-20 rounded-full bg-secondary/10 dark:bg-secondary/5 blur-xl"
                  animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Inner Hexagon/Icon Container */}
                <div className="relative z-10 bg-white/90 dark:bg-black/40 backdrop-blur-sm p-6 rounded-full border border-secondary/20 dark:border-secondary/20 shadow-lg dark:shadow-none">
                  <Activity className="w-10 h-10 text-secondary" />
                </div>

                {/* Satellite Nodes */}
                {[0, 120, 240].map((deg, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-full h-full"
                    initial={{ rotate: deg }}
                    animate={{ rotate: deg + 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-secondary rounded-full shadow-[0_0_8px_rgba(209,168,75,0.6)]" />
                  </motion.div>
                ))}
              </div>

              {/* System Status Indicator */}
              <div className="flex flex-col items-center space-y-3">
                <div className="flex items-center gap-3 px-6 py-2.5 bg-secondary/5 dark:bg-white/5 backdrop-blur-md rounded-full border border-secondary/20 dark:border-white/10">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-secondary-foreground/80 dark:text-white/90 font-bold">
                    {t('what_is.system_active')}
                  </span>
                </div>
                
                {/* Decoding Text Effect Simulation */}
                <div className="flex gap-1 opacity-50">
                   {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-8 h-1 bg-secondary/50 dark:bg-secondary/30 rounded-full"
                      animate={{ opacity: [0.2, 1, 0.2] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Connecting Lines/Nodes (Background Decoration) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
              <motion.path
                d="M 50,250 Q 150,50 250,250 T 450,250"
                fill="none"
                stroke="url(#gradient-line)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
               <defs>
                <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="50%" stopColor="#d1a84b" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};