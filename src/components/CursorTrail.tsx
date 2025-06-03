
import React, { useEffect, useState } from 'react';

const CursorTrail: React.FC = () => {
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    let animationId: number;
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const newPoint = {
        x: e.clientX,
        y: e.clientY,
        id: trailId++
      };

      setTrail(prevTrail => {
        const newTrail = [newPoint, ...prevTrail.slice(0, 8)];
        return newTrail;
      });
    };

    const fadeTrail = () => {
      setTrail(prevTrail => 
        prevTrail.filter((_, index) => index < 9)
      );
      animationId = requestAnimationFrame(fadeTrail);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animationId = requestAnimationFrame(fadeTrail);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="absolute w-3 h-3 rounded-full pointer-events-none transition-all duration-150"
          style={{
            left: point.x - 6,
            top: point.y - 6,
            background: `radial-gradient(circle, rgba(255, 215, 0, ${1 - index * 0.12}) 0%, rgba(255, 165, 0, ${0.8 - index * 0.1}) 50%, transparent 70%)`,
            transform: `scale(${1 - index * 0.1})`,
            filter: `blur(${index * 0.5}px)`,
            boxShadow: `0 0 ${8 - index}px rgba(255, 215, 0, ${0.6 - index * 0.08})`
          }}
        />
      ))}
    </div>
  );
};

export default CursorTrail;
