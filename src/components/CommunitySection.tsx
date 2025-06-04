
import React, { useEffect, useState } from 'react';
import { MessageCircle, Twitter, Linkedin, Heart, Sparkles, Crown, Shield } from 'lucide-react';

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

  const socialRealms = [
    {
      icon: MessageCircle,
      name: "Discord Sanctum",
      description: "Join the mystical fellowship of kind hearts",
      members: "2.3k+ Champions",
      color: "from-mystical-500 to-mystical-700",
      hoverColor: "hover:from-mystical-400 hover:to-mystical-600",
      symbol: "🗡️"
    },
    {
      icon: Twitter,
      name: "Scroll Network",
      description: "Follow tales of heroism and magical quests",
      members: "5.8k+ Followers",
      color: "from-ember-500 to-ember-700",
      hoverColor: "hover:from-ember-400 hover:to-ember-600",
      symbol: "📜"
    },
    {
      icon: Linkedin,
      name: "Guild Alliance",
      description: "Connect with professional realm guardians",
      members: "3.2k+ Allies",
      color: "from-forest-600 to-forest-800",
      hoverColor: "hover:from-forest-500 hover:to-forest-700",
      symbol: "⚔️"
    }
  ];

  return (
    <section id="community" className="py-20 relative overflow-hidden">
      {/* Mystical Aurora Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-mystical-800 via-ember-900 to-mystical-950" />
        <div className="absolute inset-0 bg-gradient-to-t from-mystical-950/80 to-transparent" />
        
        {/* Floating Magical Elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            >
              <Sparkles 
                className="text-mystical-400/40" 
                size={Math.random() * 20 + 10}
              />
            </div>
          ))}
        </div>

        {/* Ancient Circles */}
        <div className="absolute bottom-0 left-0 w-full h-40">
          <div className="absolute bottom-0 left-1/4 w-32 h-32 border border-mystical-400/20 rounded-full animate-pulse" />
          <div className="absolute bottom-0 right-1/3 w-24 h-24 border border-ember-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-0 right-1/4 w-16 h-16 border border-mystical-400/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Mystical Hearts */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-ember-300/30 animate-pulse"
              size={Math.random() * 15 + 8}
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
        {/* Mystical Header */}
        <div className="text-center mb-16">
          <div className={`flex justify-center mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="flex items-center space-x-4">
              <Crown className="w-8 h-8 text-mystical-400 animate-pulse" />
              <Shield className="w-10 h-10 text-ember-400 animate-pulse" />
              <Crown className="w-8 h-8 text-mystical-400 animate-pulse" />
            </div>
          </div>
          
          <h2 className={`text-4xl md:text-6xl font-fantasy text-white mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            The Fellowship of <span className="text-mystical-400">SkillSync</span>
          </h2>
          
          <p className={`text-xl text-mystical-200 max-w-3xl mx-auto font-medieval transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Unite with fellow champions of compassion in our enchanted realm where kindness flows like magic 
            and every act of service strengthens the bonds between realms
          </p>
        </div>

        {/* Mystical Community Stats */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center bg-mystical-800/30 backdrop-blur-sm rounded-2xl p-6 border border-mystical-400/20">
            <div className="text-4xl md:text-5xl font-fantasy font-bold text-mystical-400 mb-2">11.5k+</div>
            <div className="text-mystical-200 font-medieval">Fellowship Champions</div>
            <Sparkles className="w-6 h-6 text-mystical-400 mx-auto mt-2 animate-pulse" />
          </div>
          <div className="text-center bg-ember-800/30 backdrop-blur-sm rounded-2xl p-6 border border-ember-400/20">
            <div className="text-4xl md:text-5xl font-fantasy font-bold text-ember-400 mb-2">450+</div>
            <div className="text-mystical-200 font-medieval">Allied Guild Houses</div>
            <Shield className="w-6 h-6 text-ember-400 mx-auto mt-2 animate-pulse" />
          </div>
          <div className="text-center bg-mystical-800/30 backdrop-blur-sm rounded-2xl p-6 border border-mystical-400/20">
            <div className="text-4xl md:text-5xl font-fantasy font-bold text-mystical-400 mb-2">28k+</div>
            <div className="text-mystical-200 font-medieval">Souls Touched by Magic</div>
            <Heart className="w-6 h-6 text-ember-400 mx-auto mt-2 animate-pulse" />
          </div>
        </div>

        {/* Mystical Realm Portals */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {socialRealms.map((realm, index) => {
            const Icon = realm.icon;
            return (
              <div
                key={index}
                className={`group bg-mystical-900/40 backdrop-blur-sm border border-mystical-400/30 rounded-3xl p-8 text-center hover:bg-mystical-800/50 transition-all duration-300 hover:scale-105 cursor-pointer relative overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${(index + 1) * 200 + 400}ms` }}
              >
                {/* Magical Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-mystical-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${realm.color} ${realm.hoverColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="text-2xl mb-2">{realm.symbol}</div>
                  
                  <h3 className="text-2xl font-fantasy font-bold text-white mb-3 group-hover:text-mystical-300 transition-colors duration-300">
                    {realm.name}
                  </h3>
                  
                  <p className="text-mystical-200 mb-4 leading-relaxed font-medieval">
                    {realm.description}
                  </p>
                  
                  <div className="text-mystical-400 font-medieval font-semibold">
                    {realm.members}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mystical Call to Action */}
        <div className={`text-center transition-all duration-700 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-mystical-800/40 backdrop-blur-sm rounded-3xl p-8 border border-mystical-400/30 max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-6 h-6 text-mystical-400 animate-pulse" />
                <Crown className="w-8 h-8 text-ember-400 animate-pulse" />
                <Sparkles className="w-6 h-6 text-mystical-400 animate-pulse" />
              </div>
            </div>
            
            <h3 className="text-2xl font-fantasy text-white mb-4">Ready to Begin Your Quest?</h3>
            <p className="text-mystical-200 font-medieval mb-6">
              Step through the mystical gates and join the eternal fellowship of compassion
            </p>
            
            <button className="bg-gradient-to-r from-mystical-500 via-ember-500 to-mystical-600 text-white px-8 py-4 rounded-full font-medieval font-semibold text-lg hover:shadow-xl hover:shadow-mystical-400/25 transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
              <span className="relative z-10 flex items-center space-x-2">
                <Crown className="w-5 h-5" />
                <span>Enter the Fellowship</span>
                <Sparkles className="w-5 h-5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:animate-shimmer" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
