import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Billing = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section id="billing" className="py-24 bg-background dark:bg-primary transition-colors duration-300">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-8">
            {t('sections.billing')}
          </h2>
          
          <div className="bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-2xl p-10 shadow-sm">
            <p className="text-lg text-primary/70 dark:text-white/70 mb-8 leading-relaxed">
              {t('billing.philosophy', "EVENTA operates on a transparent, event-based billing model. We do not charge per user or seat. Instead, we customize our pricing based on the scale, duration, and specific requirements of your event logistics.")}
            </p>
            
            <button 
              onClick={() => navigate('/request')}
              className="px-8 py-4 bg-primary text-primary-foreground dark:bg-secondary dark:text-secondary-foreground font-bold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mx-auto"
            >
              <Mail className="w-4 h-4" />
              {t('billing.cta', "Contact for Event Pricing")}
            </button>
            
            <p className="mt-6 text-sm text-primary/40 dark:text-white/40">
              {t('billing.note', "No public checkout. Enterprise agreements only.")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};