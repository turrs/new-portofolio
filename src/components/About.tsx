import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Award, Code, Coffee, Zap } from 'lucide-react';
import activity1 from '../assets/activity1.jpeg';
import activity2 from '../assets/activity2.jpeg';
import activity3 from '../assets/activity3.jpeg';
import activity4 from '../assets/activity4.jpeg';
import activity5 from '../assets/activity5.jpeg';


const About: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [lockedSkill, setLockedSkill] = useState<string | null>(null);
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
    coffee: 0
  });

  const skills = [
    { name: 'React/Next.js', icon: '⚛️', level: 95, color: 'from-cyan-500 to-blue-500', description: '1+ years of experience' },
    { name: 'TypeScript', icon: '🔷', level: 90, color: 'from-blue-500 to-indigo-500', description: 'Advanced level' },
    { name: 'Node.js', icon: '🟢', level: 85, color: 'from-green-500 to-emerald-500', description: '1+ years of backend development' },
    { name: 'Python', icon: '🐍', level: 80, color: 'from-yellow-500 to-orange-500', description: 'Data science & automation' },
  ];

  const floatingSkills = [
    { icon: '⚛️', name: 'React', position: { top: '10%', left: '15%' } },
    { icon: '🔷', name: 'TypeScript', position: { top: '20%', right: '20%' } },
    { icon: '🟢', name: 'Node.js', position: { top: '60%', left: '10%' } },
    { icon: '🚀', name: 'Performance', position: { bottom: '40%', left: '20%' } },
    { icon: '💰', name: 'Web3', position: { bottom: '40%', left: '20%' } },
  ];

  const stats = [
    { icon: Calendar, label: 'Years Experience', value: 5, suffix: '+' },
    { icon: Code, label: 'Projects Completed', value: 120, suffix: '+' },
    { icon: Award, label: 'Happy Clients', value: 50, suffix: '+' },
    { icon: Coffee, label: 'Cups of Coffee', value: 999, suffix: '+' },
  ];

  useEffect(() => {
    const animateCounters = () => {
      stats.forEach((stat, index) => {
        let start = 0;
        const end = stat.value;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start > end) {
            start = end;
            clearInterval(timer);
          }
          
          setCounters(prev => ({
            ...prev,
            [stat.label.toLowerCase().replace(' ', '')]: Math.floor(start)
          }));
        }, 16);
      });
    };

    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  const activityPhotos = [
    activity1,
    activity2,
    activity3,
    activity4,
    activity5
  ];
  const [activePhoto, setActivePhoto] = useState(0);

  return (
    <section className="w-screen h-screen flex items-center justify-center relative overflow-hidden flex-shrink-0 md:pt-20 overflow-y-auto  pt-60 sm:overflow-y-visible">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-cyan-500/10 dark:from-gray-800 dark:via-gray-900 dark:to-black" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column - Profile & Photos */}
        <div className="space-y-6 sm:space-y-8">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-sm sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4 sm:mb-6 px-4 lg:px-0">
              I am a health technology professional with a strong background in implementing digital health solutions and system interoperability in hospitals and health centers.
            </p>
          </div>

          {/* Profile Photo with Floating Skills */}
          <div className="relative">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto lg:mx-0">
              {/* Main Profile Photo */}
              <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 p-1">
                <img
                  src= "https://media.licdn.com/dms/image/v2/D5603AQFeyXu_62hHFQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721987007684?e=1755734400&v=beta&t=8_2snmshjQU0BsY4BdQ7gg9zE8oDAZg4bVDwy4Um4ys"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>

              {/* Floating Skill Icons */}
              {floatingSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="absolute w-8 h-8 sm:w-12 sm:h-12 bg-white/20 dark:bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-sm sm:text-xl animate-float hover:scale-110 transition-transform cursor-pointer"
                  style={{
                    ...skill.position,
                    animationDelay: `${index * 0.5}s`,
                    animationDuration: `${3 + index * 0.3}s`
                  }}
                  title={skill.name}
                >
                  {skill.icon}
                </div>
              ))}
            </div>
          </div>

          {/* Activity Photos */}
          {activityPhotos.length <= 3 ? (
            <div className="grid grid-cols-3 gap-2 sm:gap-4 px-4 lg:px-0">
              {activityPhotos.map((url, idx) => (
                <img
                  key={idx}
                  src={url}
                  alt={`Activity ${idx + 1}`}
                  className="rounded-lg h-24 w-full object-cover hover:scale-105 transition-transform"
                />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-2 px-4 lg:px-0">
              <button
                onClick={() => setActivePhoto((prev) => (prev === 0 ? activityPhotos.length - 3 : prev - 1))}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                aria-label="Previous"
              >
                &#8592;
              </button>
              {activityPhotos.slice(activePhoto, activePhoto + 3).map((url, idx) => (
                <img
                  key={activePhoto + idx}
                  src={url}
                  alt={`Activity ${activePhoto + idx + 1}`}
                  className="rounded-lg h-24 w-40 object-cover transition-all duration-300"
                />
              ))}
              <button
                onClick={() => setActivePhoto((prev) => (prev + 1 > activityPhotos.length - 3 ? 0 : prev + 1))}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                aria-label="Next"
              >
                &#8594;
              </button>
            </div>
          )}

          {/* Quick Info */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-cyan-500" />
              <span>San Francisco, CA</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-cyan-500" />
              <span>Available for work</span>
            </div>
          </div>
        </div>
          
        {/* Right Column - Skills & History Education */}
        <div className="space-y-6 lg:space-y-8">     
          <section className="mt-0 md:mt-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Professional Experience
              </span>
            </h2>
            <ul className="list-disc pl-6 text-sm sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4 sm:mb-6 px-4 lg:px-0">
              <li className="mb-4">
                <strong>System Implementor at Dhealth</strong> <span className="text-gray-500">- February 2023 – March 2025</span>
                <ul className="list-disc pl-6 mt-1">
                  <li>Successfully implemented the dHealth solution in 3 hospitals, contributing to the advancement of healthcare technology.</li>
                  <li>Collaborated with cross-functional teams to ensure seamless integration between the dHealth solution and hospital requirements.</li>
                  <li>Conducted training sessions for hospital staff to effectively utilize the dHealth solution.</li>
                  <li>Ensured smooth system operations, addressed issues, and provided post-implementation support.</li>
                </ul>
              </li>
              <li>
                <strong>Interoperability Specialist at Digital Castelum Indonesia</strong> <span className="text-gray-500">- August 2024 – February 2025</span>
                <ul className="list-disc pl-6 mt-1">
                  <li>Implemented SATUSEHAT standards in health centers and hospitals in Makassar & Maros.</li>
                  <li>Strengthened the system at the subnational level for interoperability with SATUSEHAT using developed standards.</li>
                  <li>Guided health centers and hospitals on TB interoperability mediator and SATUSEHAT implementation.</li>
                  <li>Coordinated with stakeholders from city, district, and provincial health offices to ensure successful implementation.</li>
                </ul>
              </li>
            </ul>
          </section>
          {/* Skills Section */}
          <section className="mt-2">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill) => {
                const isActive = activeSkill === skill.name || lockedSkill === skill.name;
                return (
                  <div
                    key={skill.name}
                    className={`relative px-4 py-2 rounded-lg shadow-md cursor-pointer bg-gradient-to-r ${skill.color} text-white font-semibold transition-all duration-200 transform hover:scale-110 hover:shadow-2xl ${isActive ? 'ring-4 ring-cyan-300 z-10 scale-110 shadow-2xl' : ''}`}
                    onMouseEnter={() => !lockedSkill && setActiveSkill(skill.name)}
                    onMouseLeave={() => !lockedSkill && setActiveSkill(null)}
                    onClick={() => setLockedSkill(lockedSkill === skill.name ? null : skill.name)}
                  >
                    <span className="mr-2">{skill.icon}</span>
                    {skill.name}
                    <div className="absolute left-1/2 top-full mt-2 w-max min-w-[160px] -translate-x-1/2 pointer-events-none">
                      <div className={`transition-all duration-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'} bg-white text-gray-800 text-sm rounded-lg shadow-lg px-4 py-2 z-20 border border-cyan-200 dark:bg-gray-900 dark:text-white dark:border-gray-700`}>
                        {skill.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {lockedSkill && (
              <div className="mt-4 text-center">
                <button
                  className="px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition"
                  onClick={() => setLockedSkill(null)}
                >
                  Unlock Skill
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
    </section>
  );
};

export default About;