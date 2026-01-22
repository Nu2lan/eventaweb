import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'az', label: 'AZ' },
    { code: 'tr', label: 'TR' },
    { code: 'en', label: 'EN' },
    { code: 'ru', label: 'RU' },
  ];

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative flex items-center">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, width: 0 }}
            animate={{ opacity: 1, x: 0, width: 'auto' }}
            exit={{ opacity: 0, x: 20, width: 0 }}
            className="flex items-center gap-1 overflow-hidden mr-2 bg-secondary/10 dark:bg-secondary backdrop-blur-md rounded-full p-1"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`
                  px-3 py-1.5 rounded-full text-xs font-bold tracking-tighter transition-all duration-300
                  ${i18n.language === lang.code 
                    ? 'bg-secondary text-black shadow-sm' 
                    : 'bg-transparent text-primary dark:text-black hover:bg-black/10'}
                `}
              >
                {lang.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300
          ${isOpen 
            ? 'bg-secondary text-black' 
            : 'bg-transparent text-secondary hover:bg-secondary/10 hover:text-secondary'}
        `}
        aria-label="Change language"
      >
        <Globe className="w-5 h-5" />
      </button>
    </div>
  );
};
