import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 dark:bg-primary/80 backdrop-blur-md border-b border-black/5 dark:border-white/10 transition-colors duration-300">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center">
          {/* Logo image - Ensure logo.png is in the public folder */}
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
            } as React.CSSProperties}
            onError={(e) => {
              // Fallback if image fails to load
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.innerHTML = '<span class="text-2xl font-bold tracking-tighter">EVENTA</span>';
            }}
          />
        </a>
        
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};