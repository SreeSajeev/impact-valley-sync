
import React, { useEffect, useState } from 'react';
import { Star, Trophy, Heart, Zap } from 'lucide-react';

const GamificationSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    volunteers: 0,
    tasksCompleted: 0,
    impactPoints: 0,
    badges: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    const section = document.getElementById('gamification');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const targets = { volunteers: 1247, tasksCompleted: 3892, impactPoints: 15678, badges: 89 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setAnimatedStats({
          volunteers: Math.floor(targets.volunteers * progress),
          tasksCompleted: Math.floor(targets.tasksCompleted * progress),
          impactPoints: Math.floor(targets.impactPoints * progress),
          badges: Math.floor(targets.badges * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setAnimatedStats(targets);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const leaderboardData = [
    { rank: 1, name: "Alex Chen", points: 2450, badge: "🌟", avatar: "AC" },
    { rank: 2, name: "Maya Patel", points: 2380, badge: "💚", avatar: "MP" },
    { rank: 3, name: "Jordan Kim", points: 2120, badge: "🏆", avatar: "JK" },
    { rank: 4, name: "Sam Wilson", points: 1890, badge: "⚡", avatar: "SW" },
    { rank: 5, name: "Riley Torres", points: 1654, badge: "🎯", avatar: "RT" }
  ];

  const badges = [
    { icon: Heart, name: "Community Hero", description: "Completed 50+ community tasks", color: "from-pink-400 to-red-500" },
    { icon: Zap, name: "Quick Responder", description: "Accepted tasks within 1 hour", color: "from-yellow-400 to-orange-500" },
    { icon: Star, name: "Skill Master", description: "Achieved expert level in 3 skills", color: "from-blue-400 to-purple-500" },
    { icon: Trophy, name: "Impact Champion", description: "Top 10% volunteer this month", color: "from-green-400 to-teal-500" }
  ];

  return (
    <section id="gamification" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-coral-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Gamified Impact Tracking
          </h2>
          <p className={`text-xl text-blue-200 max-w-3xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Turn your volunteer journey into an epic quest with XP, badges, and community leaderboards
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Active Volunteers", value: animatedStats.volunteers, suffix: "+", color: "text-teal-400" },
            { label: "Tasks Completed", value: animatedStats.tasksCompleted, suffix: "+", color: "text-green-400" },
            { label: "Impact Points", value: animatedStats.impactPoints, suffix: "+", color: "text-coral-400" },
            { label: "Badges Earned", value: animatedStats.badges, suffix: "+", color: "text-yellow-400" }
          ].map((stat, index) => (
            <div
              key={index}
              className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 text-center hover:bg-slate-700/50 transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                {stat.value.toLocaleString()}{stat.suffix}
              </div>
              <div className="text-blue-200 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Leaderboard */}
          <div className={`transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Community Leaderboard</h3>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
              <div className="space-y-4">
                {leaderboardData.map((user, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-colors duration-200 group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                        index === 0 ? 'bg-yellow-500 text-slate-900' :
                        index === 1 ? 'bg-gray-400 text-slate-900' :
                        index === 2 ? 'bg-orange-500 text-slate-900' :
                        'bg-slate-600 text-white'
                      }`}>
                        {user.rank}
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {user.avatar}
                      </div>
                      <div>
                        <div className="text-white font-semibold">{user.name}</div>
                        <div className="text-blue-300 text-sm">{user.badge} Badge Holder</div>
                      </div>
                    </div>
                    <div className="text-coral-400 font-bold">{user.points.toLocaleString()}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Badges Collection */}
          <div className={`transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Unlock Epic Badges</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {badges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={index}
                    className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${badge.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">{badge.name}</div>
                      </div>
                    </div>
                    <p className="text-blue-200 text-sm">{badge.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamificationSection;
