
import React, { useEffect, useState } from 'react';
import { Search, Heart, Star } from 'lucide-react';

const HowItWorksSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    const section = document.getElementById('how-it-works');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: Search,
      title: "AI Matches You",
      description: "Our magical AI discovers perfect volunteer opportunities based on your unique skills and passion.",
      color: "from-blue-400 to-teal-500"
    },
    {
      icon: Heart,
      title: "Make Impact",
      description: "Connect with NGOs on meaningful tasks that create real change in your community.",
      color: "from-teal-400 to-green-500"
    },
    {
      icon: Star,
      title: "Earn Recognition",
      description: "Gain XP, unlock badges, and climb the leaderboard while building your impact story.",
      color: "from-coral-400 to-yellow-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            How SkillSync Works
          </h2>
          <p className={`text-xl text-blue-200 max-w-3xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Three simple steps to transform your skills into meaningful impact
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`group text-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                {/* Icon */}
                <div className="relative mb-6 flex justify-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-300 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-blue-200 leading-relaxed">
                  {step.description}
                </p>

                {/* Connecting Line (except last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-teal-400 to-transparent opacity-30" 
                       style={{ transform: 'translateX(-50%)' }} />
                )}
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-700 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button className="bg-gradient-to-r from-coral-500 to-yellow-500 text-slate-900 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-coral-500/25 transform hover:scale-105 transition-all duration-300">
            Begin Your Impact Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
