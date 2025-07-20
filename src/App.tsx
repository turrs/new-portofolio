import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import ScrollProgress from './components/ScrollProgress';

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; speed: number; size: number }>>([]);
  const [explosions, setExplosions] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const sections = ['hero', 'about', 'tech', 'projects'];

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Falling stars for dark theme
  useEffect(() => {
    if (!isDark) {
      setStars([]);
      return;
    }

    const createStar = () => {
      const star = {
        id: Date.now() + Math.random(),
        x: Math.random() * window.innerWidth,
        y: -10,
        speed: 2 + Math.random() * 3,
        size: 1 + Math.random() * 2
      };
      setStars(prev => [...prev.slice(-20), star]);
    };

    const interval = setInterval(createStar, 2000);
    return () => clearInterval(interval);
  }, [isDark]);

  // Animate falling stars
  useEffect(() => {
    if (!isDark || stars.length === 0) return;

    const animateStars = () => {
      setStars(prev => prev
        .map(star => ({ ...star, y: star.y + star.speed }))
        .filter(star => star.y < window.innerHeight + 10)
      );
    };

    const interval = setInterval(animateStars, 50);
    return () => clearInterval(interval);
  }, [isDark, stars]);

  // Handle star click explosion
  const handleStarClick = (star: typeof stars[0], e: React.MouseEvent) => {
    e.stopPropagation();
    const explosion = { id: Date.now(), x: star.x, y: star.y };
    setExplosions(prev => [...prev, explosion]);
    setStars(prev => prev.filter(s => s.id !== star.id));
    
    setTimeout(() => {
      setExplosions(prev => prev.filter(exp => exp.id !== explosion.id));
    }, 1000);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && currentSection < sections.length - 1) {
        setCurrentSection(prev => prev + 1);
      } else if (e.key === 'ArrowLeft' && currentSection > 0) {
        setCurrentSection(prev => prev - 1);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 0 && currentSection < sections.length - 1) {
        setCurrentSection(prev => prev + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        setCurrentSection(prev => prev - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [currentSection, sections.length]);

  const navigateToSection = (index: number) => {
    setCurrentSection(index);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`${isDark ? 'dark' : ''} font-inter antialiased`}>
      <div 
        className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-500 h-screen overflow-hidden relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Interactive Mouse Follower */}
        {isHovering && !window.matchMedia('(max-width: 768px)').matches && (
          <div 
            className="fixed w-6 h-6 bg-cyan-400/30 rounded-full pointer-events-none z-30 transition-all duration-300 ease-out"
            style={{
              left: mousePosition.x - 12,
              top: mousePosition.y - 12,
              transform: 'scale(1.5)',
            }}
          />
        )}

        {/* Falling Stars for Dark Theme */}
        {isDark && (
          <div className="fixed inset-0 pointer-events-none z-20">
            {stars.map((star) => (
              <div
                key={star.id}
                className="absolute bg-white rounded-full animate-pulse cursor-pointer pointer-events-auto"
                style={{
                  left: star.x,
                  top: star.y,
                  width: star.size * 2,
                  height: star.size * 2,
                  boxShadow: `0 0 ${star.size * 4}px rgba(255, 255, 255, 0.8)`
                }}
                onClick={(e) => handleStarClick(star, e)}
              />
            ))}
            
            {/* Explosions */}
            {explosions.map((explosion) => (
              <div
                key={explosion.id}
                className="absolute pointer-events-none"
                style={{ left: explosion.x - 25, top: explosion.y - 25 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full animate-ping opacity-75" />
                <div className="absolute inset-0 w-12 h-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full animate-pulse" />
              </div>
            ))}
          </div>
        )}

        <Header 
          currentSection={currentSection}
          navigateToSection={navigateToSection}
          isDark={isDark}
          toggleTheme={toggleTheme}
        />
        
        <div 
          className="flex transition-transform duration-1000 ease-out h-screen w-[500vw]"
          style={{ transform: `translateX(-${currentSection * 100}vw)` }}
        >
          <Hero setCurrentSection={setCurrentSection} />
          <About />
          <TechStack />
          <Projects />
        </div>
        
        <ScrollProgress currentSection={currentSection} totalSections={sections.length} />
        
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
          <div className="flex items-center space-x-4 bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
            <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hidden sm:inline">Navigate with</span>
            <div className="flex space-x-2">
              <kbd className="px-1 sm:px-2 py-1 bg-white/20 dark:bg-black/30 rounded text-xs">←</kbd>
              <kbd className="px-1 sm:px-2 py-1 bg-white/20 dark:bg-black/30 rounded text-xs">→</kbd>
            </div>
            <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hidden sm:inline">or scroll</span>
            <span className="text-xs text-gray-600 dark:text-gray-400 sm:hidden">Swipe</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;