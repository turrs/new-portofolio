import React from 'react';

interface ScrollProgressProps {
  currentSection: number;
  totalSections: number;
}

const ScrollProgress: React.FC<ScrollProgressProps> = ({ currentSection, totalSections }) => {
  const progress = ((currentSection + 1) / totalSections) * 100;
  
  return (
    <div className="fixed top-1/2 right-3 sm:right-6 transform -translate-y-1/2 z-50">
      <div className="flex flex-col items-center space-y-4">
        {/* Progress Bar */}
        <div className="w-1 h-24 sm:h-32 bg-gray-300/50 dark:bg-gray-700/50 rounded-full overflow-hidden">
          <div 
            className="w-full bg-gradient-to-t from-cyan-500 to-blue-500 transition-all duration-1000 ease-out"
            style={{ height: `${progress}%` }}
          />
        </div>
        
        {/* Section Indicators */}
        <div className="flex flex-col space-y-1 sm:space-y-2">
          {Array.from({ length: totalSections }, (_, index) => (
            <div
              key={index}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSection
                  ? 'bg-cyan-500 scale-125'
                  : index < currentSection
                  ? 'bg-cyan-400/60'
                  : 'bg-gray-400/50 dark:bg-gray-600/50'
              }`}
            />
          ))}
        </div>
        
        {/* Progress Text */}
        <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          {currentSection + 1}/{totalSections}
        </div>
      </div>
    </div>
  );
};

export default ScrollProgress;