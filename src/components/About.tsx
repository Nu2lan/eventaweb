import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 bg-black/5 dark:bg-white/5 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-8">
              {t('sections.about')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold text-secondary mb-4">
                  {t('about.mission_title', "Built for Real-World Logistics")}
                </h3>
                <p className="text-primary/70 dark:text-white/70 mb-6">
                  {t('about.mission_desc', "We understand that event transportation is not just about moving people—it's about precision, security, and timing. Our platform is engineered to handle the complexities of VIP movements and large-scale summits.")}
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-secondary mb-4">
                  {t('about.origin_title', "Global Standards, Local Roots")}
                </h3>
                <p className="text-primary/70 dark:text-white/70 mb-6">
                  {t('about.origin_desc', "Proudly built in Azerbaijan, EVENTA is designed to meet international standards for security and operational excellence, scalable for events anywhere in the world.")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};