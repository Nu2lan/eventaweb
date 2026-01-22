import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MapPin, Lock, Radio, LayoutDashboard, FileText } from 'lucide-react';

export const CoreCapabilities = () => {
  const { t } = useTranslation();

  const capabilities = [
    { icon: MapPin, title: t('capabilities.tracking_title', "Real-time Tracking"), desc: t('capabilities.tracking_desc', "Vehicle & guest movement") },
    { icon: Lock, title: t('capabilities.isolation_title', "Secure Isolation"), desc: t('capabilities.isolation_desc', "Private event environment") },
    { icon: Radio, title: t('capabilities.dispatch_title', "Driver Dispatch"), desc: t('capabilities.dispatch_desc', "Instant confirmation & routing") },
    { icon: LayoutDashboard, title: t('capabilities.control_title', "Operator Control"), desc: t('capabilities.control_desc', "Centralized command center") },
    { icon: FileText, title: t('capabilities.audit_title', "Audit Reporting"), desc: t('capabilities.audit_desc', "Detailed post-event logs") },
  ];

  return (
    <section id="capabilities" className="py-24 bg-black/5 dark:bg-white/5 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-16">
          {t('sections.capabilities')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 border-b border-secondary/20 hover:bg-black/5 dark:hover:bg-white/5 transition-colors group"
            >
              <div className="absolute top-0 left-0 w-0 h-[1px] bg-secondary group-hover:w-full transition-all duration-500" />
              
              <cap.icon className="w-8 h-8 text-secondary mb-4" />
              <h3 className="text-lg font-bold text-primary dark:text-white mb-2">
                {cap.title}
              </h3>
              <p className="text-sm text-primary/70 dark:text-white/60">
                {cap.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};