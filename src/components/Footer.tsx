import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#121212] text-[#f9f8f7] py-6 dark:bg-black dark:text-white/80 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <a href="/" className="inline-block">
              <img 
                src="/logo.png" 
                alt="EVENTA" 
                draggable={false}
                className="h-8 w-auto object-contain no-drag select-none pointer-events-none" 
                onDragStart={(e) => e.preventDefault()}
                onContextMenu={(e) => e.preventDefault()}
                style={{ 
                  WebkitUserSelect: 'none', 
                  MozUserSelect: 'none', 
                  msUserSelect: 'none', 
                  userSelect: 'none',
                  WebkitUserDrag: 'none',
                  pointerEvents: 'none',
                  touchAction: 'none'
                }as React.CSSProperties}
              />
            </a>
            <p className="text-xs opacity-50 hidden md:block">© 2026 EVENTA. All rights reserved.</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4">
            <h4 className="font-bold text-secondary text-sm">{t('nav.social_media')}</h4>
            <div className="flex items-center gap-3">
              <a 
                href="https://www.linkedin.com/company/eventa-az/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-secondary/10 text-secondary p-2 rounded-full hover:bg-secondary hover:text-black transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-secondary/10 text-secondary p-2 rounded-full hover:bg-secondary hover:text-black transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-secondary/10 text-secondary p-2 rounded-full hover:bg-secondary hover:text-black transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        <p className="text-xs opacity-50 text-center mt-4 md:hidden">© 2026 EVENTA. All rights reserved.</p>
      </div>
    </footer>
  );
};
