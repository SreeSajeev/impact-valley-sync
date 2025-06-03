
import React, { useEffect, useState } from 'react';
import { Discord, Twitter, Linkedin, Heart } from 'lucide-react';

const CommunitySection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    const section = document.getElementById('community');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const socialPlatforms = [
    {
      icon: Discord,
      name: "Discord",
      description: "Join our vibrant community of volunteers",
      members: "2.3k+ members",
      color: "from-indigo-500 to-purple-600",
      hoverColor: "hover:from-indigo-400 hover:to-purple-500"
    },
    {
      icon: Twitter,
      name: "Twitter",
      description: "Follow for impact stories and updates",
      members: "5.8k+ followers",
      color: "from-blue-400 to-cyan-500",
      hoverColor: "hover:from-blue-300 hover:to-cyan-400"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      description: "Connect with professional volunteers",
      members: "3.2k+ connections",
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:from-blue-500 hover:to-blue-700"
    }
  ];

  return (
    <section id="community" className="py-20 relative overflow-hidden">
      {/* Background with Sunset Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-400 via-pink-500 to-purple-900" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
        
        {/* Volunteer Silhouettes */}
        <div className="absolute bottom-0 left-0 w-full h-32">
          <div className="absolute bottom-0 left-1/4 w-16 h-24 bg-slate-900 rounded-t-full transform -skew-x-12" />
          <div className="absolute bottom-0 left-1/3 w-12 h-20 bg-slate-900 rounded-t-full" />
          <div className="absolute bottom-0 right-1/3 w-14 h-22 bg-slate-900 rounded-t-full transform skew-x-6" />
          <div className="absolute bottom-0 right-1/4 w-18 h-26 bg-slate-900 rounded-t-full" />
        </div>

        {/* Floating Hearts */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-pink-300/30 animate-pulse"
              size={Math.random() * 20 + 10}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Join the SkillSync Community
          </h2>
          <p className={`text-xl text-pink-100 max-w-3xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Connect with changemakers, share your journey, and grow together in our magical volunteer ecosystem
          </p>
        </div>

        {/* Community Stats */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-yellow-300 mb-2">11.5k+</div>
            <div className="text-pink-100">Active Community Members</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-teal-300 mb-2">450+</div>
            <div className="text-pink-100">Partner Organizations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-coral-300 mb-2">28k+</div>
            <div className="text-pink-100">Lives Impacted</div>
          </div>
        </div>

        {/* Social Platforms */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {socialPlatforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <div
                key={index}
                className={`group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${(index + 1) * 200 + 400}ms` }}
              >
                <div className="flex justify-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${platform.color} ${platform.hoverColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors duration-300">
                  {platform.name}
                </h3>
                
                <p className="text-pink-100 mb-4 leading-relaxed">
                  {platform.description}
                </p>
                
                <div className="text-yellow-300 font-semibold">
                  {platform.members}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-700 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button className="bg-gradient-to-r from-yellow-400 to-coral-500 text-slate-900 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-yellow-400/25 transform hover:scale-105 transition-all duration-300">
            Join Our Community
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
