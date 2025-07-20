import React, { useState, useEffect } from 'react';

const TechStack: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState(0);
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const technologies = [
    {
      name: 'React',
      icon: '⚛️',
      description: 'Building dynamic user interfaces with component-based architecture',
      experience: '1+ years',
      projects: '10+ projects',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      name: 'TypeScript',
      icon: '🔷',
      description: 'Type-safe JavaScript development for scalable applications',
      experience: '1+ years',
      projects: '5+ projects',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      name: 'Node.js',
      icon: '🟢',
      description: 'Server-side JavaScript for robust backend solutions',
      experience: '1+ years',
      projects: '3+ projects',
      color: 'from-green-400 to-emerald-500'
    },
    {
      name: 'Python',
      icon: '🐍',
      description: 'Data science, automation, and backend development',
      experience: '1+ years',
      projects: '3+ projects',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      name: 'Next.js',
      icon: '▲',
      description: 'Full-stack React framework for production applications',
      experience: '2+ years',
      projects: '3+ projects',
      color: 'from-gray-400 to-gray-600'
    },
    {
      name: 'Web3',
      icon: '💰',
      description: 'Web3 development and blockchain technology',
      experience: '2+ years',
      projects: '5+ projects',
      color: 'from-orange-400 to-red-500'
    }
  ];

  // Auto-rotate through technologies
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedTech((prev) => (prev + 1) % technologies.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleTechClick = (index: number, event: React.MouseEvent) => {
    setSelectedTech(index);
    
    // Create particle effect
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const newParticle = {
      id: Date.now(),
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    };
    
    setParticles(prev => [...prev, newParticle]);
    
    setTimeout(() => {
      setParticles(prev => prev.filter(p => p.id !== newParticle.id));
    }, 1000);
  };

  return (
    <section className="w-screen h-screen flex items-center justify-center relative overflow-hidden flex-shrink-0 pt-20 overflow-y-auto sm:overflow-y-visible">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900" />

      {/* Particle Effects */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed w-4 h-4 bg-cyan-400 rounded-full animate-ping pointer-events-none z-30"
          style={{ left: particle.x - 8, top: particle.y - 8 }}
        />
      ))}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Technologies I Use
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Click on any technology to learn more about my experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Technology Grid */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
              {technologies.map((tech, index) => (
                <div
                  key={tech.name}
                  className={`group relative p-4 sm:p-6 rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                    selectedTech === index
                      ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500/50 shadow-xl shadow-cyan-500/25'
                      : 'bg-white/80 dark:bg-gray-800/80 border-2 border-gray-200/50 dark:border-gray-700/50 hover:border-cyan-500/30'
                  }`}
                  onClick={(e) => handleTechClick(index, e)}
                  onMouseEnter={() => setHoveredTech(index)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  {/* Tech Icon */}
                  <div className="text-center">
                    <div className={`text-3xl sm:text-4xl mb-3 transition-all duration-300 ${
                      selectedTech === index ? 'scale-125 animate-bounce' : 'group-hover:scale-110'
                    }`}>
                      {tech.icon}
                    </div>
                    <h3 className={`text-sm sm:text-base font-semibold transition-colors ${
                      selectedTech === index 
                        ? 'text-cyan-600 dark:text-cyan-400' 
                        : 'text-gray-800 dark:text-white group-hover:text-cyan-500'
                    }`}>
                      {tech.name}
                    </h3>
                  </div>

                  {/* Selection Indicator */}
                  {selectedTech === index && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl animate-pulse" />
                  )}

                  {/* Hover Effect */}
                  {hoveredTech === index && selectedTech !== index && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl" />
                  )}
                </div>
              ))}
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {technologies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTech(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    selectedTech === index ? 'bg-cyan-500 scale-125' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Selected Technology Details */}
          <div className="order-1 lg:order-2">
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
              {/* Large Icon */}
              <div className="text-center mb-6">
                <div className="text-6xl sm:text-8xl mb-4 animate-pulse">
                  {technologies[selectedTech].icon}
                </div>
                <div className={`w-20 h-1 mx-auto rounded-full bg-gradient-to-r ${technologies[selectedTech].color}`} />
              </div>

              {/* Technology Info */}
              <div className="text-center space-y-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
                  {technologies[selectedTech].name}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  {technologies[selectedTech].description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-3 sm:p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                    <div className="text-lg sm:text-xl font-bold text-cyan-600 dark:text-cyan-400">
                      {technologies[selectedTech].experience}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      Experience
                    </div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                    <div className="text-lg sm:text-xl font-bold text-cyan-600 dark:text-cyan-400">
                      {technologies[selectedTech].projects}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      Projects
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <button className="mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  View Projects
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="inline-flex items-center space-x-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200/50 dark:border-gray-700/50">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Always Learning</span>
            </div>
            <div className="w-px h-4 bg-gray-300 dark:bg-gray-600" />
            <div className="text-sm">
              <span className="text-gray-600 dark:text-gray-400">Focus: </span>
              <span className="text-cyan-500 font-semibold">AI & Web3</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;