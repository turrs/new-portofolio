import React from 'react';
import { Code, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  currentSection: number;
  navigateToSection: (index: number) => void;
  isDark: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentSection, navigateToSection, isDark, toggleTheme }) => {
  const navItems = [
    { name: 'Home', shortName: 'Home', index: 0 },
    { name: 'About', shortName: 'About', index: 1 },
    { name: 'Tech', shortName: 'Tech', index: 2 },
    { name: 'Projects', shortName: 'Work', index: 3 },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-500" />
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Fatur Rahman Portfolio
            </span>
          </div>

          <nav className="hidden sm:flex items-center space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => navigateToSection(item.index)}
                className={`relative px-2 lg:px-4 py-2 rounded-lg transition-all duration-300 text-sm lg:text-base ${
                  currentSection === item.index
                    ? 'text-cyan-500 bg-cyan-500/10 dark:text-cyan-400 dark:bg-cyan-500/20'
                    : 'text-gray-600 dark:text-gray-400 hover:text-cyan-500'
                }`}
              >
                <span className="hidden lg:inline">{item.name}</span>
                <span className="lg:hidden">{item.shortName}</span>
                {currentSection === item.index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg animate-pulse" />
                )}
              </button>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <nav className="flex sm:hidden items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => navigateToSection(item.index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSection === item.index
                    ? 'bg-cyan-500 scale-125'
                    : 'bg-gray-400/50'
                }`}
                title={item.name}
              />
            ))}
          </nav>

          <button
            onClick={toggleTheme}
            className="p-1.5 sm:p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
          >
            {isDark ? (
              <Sun className="w-4 h-4 sm:w-5 sm:h-5" />
            ) : (
              <Moon className="w-4 h-4 sm:w-5 sm:h-5" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;