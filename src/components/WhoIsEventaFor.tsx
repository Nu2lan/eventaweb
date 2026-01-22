import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Ticket, Building2, Briefcase, Globe2 } from 'lucide-react';

export const WhoIsEventaFor = () => {
  const { t } = useTranslation();

  const cards = [
    { 
      icon: Ticket, 
      title: t('who_is.vip_title', "VIP Event Transportation"), 
      desc: t('who_is.vip_desc', "Concerts, galas, and high-profile guest movements.") 
    },
    { 
      icon: Building2, 
      title: t('who_is.gov_title', "Government & Protocol"), 
      desc: t('who_is.gov_desc', "Secure transport for official delegations and summits.") 
    },
    { 
      icon: Briefcase, 
      title: t('who_is.corp_title', "Enterprise Events"), 
      desc: t('who_is.corp_desc', "Seamless logistics for corporate conferences and retreats.") 
    },
    { 
      icon: Globe2, 
      title: t('who_is.intl_title', "International Summits"), 
      desc: t('who_is.intl_desc', "Large-scale coordination like COP-level events.") 
    },
  ];

  return (
    <section className="py-24 bg-background dark:bg-primary transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white">
            {t('sections.who_is_for')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 bg-white dark:bg-white/5 rounded-xl border border-black/5 dark:border-white/5 hover:border-secondary/50 transition-colors cursor-default"
            >
              <card.icon className="w-10 h-10 text-secondary mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-primary dark:text-white mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-primary/70 dark:text-white/60">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};