import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

type HeroProps = {
  setCurrentSection: React.Dispatch<React.SetStateAction<number>>;
};

const Hero: React.FC<HeroProps> = ({ setCurrentSection }) => {
  const [typedText, setTypedText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    'Healthcare System Implementor',
    'AI Tech Enthusiast',
    'Full Stack Developer',
    'WEB 3.0 Enthusiast'
  ];

  useEffect(() => {
    const currentRoleText = roles[currentRole];
    let currentIndex = 0;
    let isDeleting = false;
    
    const typeEffect = setInterval(() => {
      if (!isDeleting && currentIndex < currentRoleText.length) {
        setTypedText(currentRoleText.substring(0, currentIndex + 1));
        currentIndex++;
      } else if (!isDeleting && currentIndex === currentRoleText.length) {
        setTimeout(() => {
          isDeleting = true;
        }, 2000);
      } else if (isDeleting && currentIndex > 0) {
        setTypedText(currentRoleText.substring(0, currentIndex - 1));
        currentIndex--;
      } else if (isDeleting && currentIndex === 0) {
        isDeleting = false;
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearInterval(typeEffect);
  }, [currentRole]);
  return (
    <section className="w-screen h-screen flex items-center justify-center relative overflow-hidden flex-shrink-0 pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 dark:from-gray-800 dark:via-gray-900 dark:to-black">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23cbd5e1%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%227%22 cy=%227%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] dark:bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23374151%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%227%22 cy=%227%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-float ${
              i % 3 === 0 ? 'w-2 h-2 bg-cyan-400' : 
              i % 3 === 1 ? 'w-3 h-3 bg-blue-400' : 
              'w-1 h-1 bg-purple-400'
            }`}
            style={{
              left: `${10 + (i * 8)}%`,
              top: `${20 + Math.sin(i * 0.5) * 30}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Hi, I'm Fatur Rahman
            </span>
          </h1>
          
          <div className="text-lg sm:text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6 sm:mb-8">
            <span>I'm a </span>
            <span className="text-cyan-400 border-r-2 border-cyan-400 animate-pulse">
              {typedText}
            </span>
          </div>

          <p className="text-sm sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            Passionate about Health Technology and Web3. Let's build something amazing together!
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
          <button
            onClick={() => setCurrentSection(3)}
            className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
          >
            <span>View My Work</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <a
            href="/CV_FaturRahman2025 (1).pdf"
            download
            className="group border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 hover:shadow-xl hover:shadow-emerald-500/20"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Download CV</span>
          </a>
          
          <a href="mailto:faturrahman7qz@gmail.com" className="group border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 hover:shadow-xl hover:shadow-cyan-500/20">
            <Mail className="w-5 h-5" />
            <span>Get In Touch</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 sm:space-x-6">
          {[
            { icon: Github, href: 'https://github.com/turrs', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/faturrahman7qz/', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:faturrahman7qz@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="group p-2 sm:p-3 bg-white/20 dark:bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-cyan-500/20 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:text-cyan-400 transition-colors" />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 animate-pulse">
          <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hidden sm:block">Scroll to explore</span>
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 animate-bounce" />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;