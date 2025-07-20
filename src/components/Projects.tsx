import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Star, GitFork, Eye } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Twitter Yappers',
      description: 'Twitter Yappers is a web application that allows users to create and share their own Twitter threads. It is built with React, Node.js, and Supabase. It is a simple and easy to use application that allows users to create and share their own Twitter threads using AI. it integrate with Extension to backend to get the data from the extension and generate Comment from data backend hit LLM.',
      image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Fullstack',
      tech: ['React', 'Node.js', 'Supabase','FullStack','AI','Oauth Twitte'],
      stats: { stars: 1, forks: 1, views: 1 },
      featured: true,
      liveUrl: 'https://yapper-twitter.vercel.app/',
      githubUrl: 'https://github.com/turrs/Yapper-Twitter'
    },
    {
      id: 2,
      title: 'Dex in Solana Blockchain using Jupiter-Aggregator',
      description: 'A simple DEX for Solana Blockchain using Jupiter-Aggregator. It is a simple and easy to use application that allows users to swap tokens using Jupiter-Aggregator.',
      image: 'https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Full Stack',
      tech: ['React', 'TypeScript', 'Web3', 'Solana','Frontend','Supabase','FullStack','Jupiter-Aggregator'],
      stats: { stars: 1, forks: 1, views: 1 },
      featured: true,
      liveUrl: 'https://jupsuck.fun/',
      githubUrl: 'https://github.com/turrs/jup-suck'
    },
    {
      id: 3,
      title: 'Drawgor',
      description: 'Drawgor is game simple in solana blockchain, fully integrate with solana blockchain and use supabase to store the data with random function to generate the data.',
      image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Full Stack',
      tech: ['React', 'TypeScript', 'Web3', 'Solana', 'Supabase','FullStack'],
      stats: { stars: 1, forks: 1, views: 1 },
      featured: false,
      liveUrl: 'https://drawgor.netlify.app/',
      githubUrl: 'https://github.com/turrs/drawgor'
    }
  ];

  const tech = ['All', 'FullStack', 'Frontend', 'Supabase', 'Web3'];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.tech.includes(filter));
  const featuredProjects = projects.filter(p => p.featured);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % featuredProjects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [featuredProjects.length]);

  return (
    <section className="w-screen h-screen flex items-center justify-center relative overflow-hidden flex-shrink-0 pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-pink-500/10 dark:from-gray-800 dark:via-gray-900 dark:to-black" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-600 dark:text-gray-400 px-4">
            A showcase of my recent work and contributions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Featured Project Carousel */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl bg-white/10 dark:bg-black/20 backdrop-blur-sm border border-white/20">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={featuredProjects[activeProject]?.image}
                  alt={featuredProjects[activeProject]?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Project Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-2 py-1 bg-indigo-500 rounded text-xs font-semibold hidden sm:inline">
                      {featuredProjects[activeProject]?.category}
                    </span>
                    <div className="flex items-center space-x-2 sm:space-x-4 text-xs sm:text-sm">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>{featuredProjects[activeProject]?.stats.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GitFork className="w-4 h-4" />
                        <span>{featuredProjects[activeProject]?.stats.forks}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{featuredProjects[activeProject]?.stats.views}k</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg sm:text-2xl font-bold mb-2">
                    {featuredProjects[activeProject]?.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-200 mb-3 sm:mb-4 line-clamp-2">
                    {featuredProjects[activeProject]?.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0">
                    <div className="flex flex-wrap gap-2">
                      {featuredProjects[activeProject]?.tech.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-white/20 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-2">
                      <a
                        href={featuredProjects[activeProject]?.liveUrl}
                        className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        href={featuredProjects[activeProject]?.githubUrl}
                        className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeProject ? 'bg-indigo-500' : 'bg-gray-400/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="space-y-4 sm:space-y-6">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {tech.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    filter === category
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                      : 'bg-white/10 dark:bg-black/20 text-gray-600 dark:text-gray-400 hover:text-indigo-500'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Projects List */}
            <div className="space-y-2 sm:space-y-3 max-h-64 sm:max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-500">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group p-3 sm:p-4 bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-lg border border-white/20 hover:border-indigo-500/50 transition-all duration-300 cursor-pointer hover:scale-105"
                  onClick={() => {
                    const featuredIndex = featuredProjects.findIndex(p => p.id === project.id);
                    if (featuredIndex !== -1) setActiveProject(featuredIndex);
                  }}
                >
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h4 className="text-sm sm:text-base font-semibold text-gray-800 dark:text-white group-hover:text-indigo-400 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-1 sm:line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex items-center mt-1 sm:mt-2 space-x-2 sm:space-x-4 text-xs text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3" />
                          <span>{project.stats.stars}</span>
                        </div>
                        <span className="px-1 sm:px-2 py-0.5 sm:py-1 bg-indigo-500/20 text-indigo-400 rounded text-xs">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Project Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-3 sm:pt-4 border-t border-white/20">
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-bold text-indigo-400">10+</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-bold text-purple-400">3+</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-bold text-pink-400">100%</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Success</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;