
import { useEffect, useState } from 'react';

interface XPBarProps {
  current: number;
  max: number;
  delay?: number;
}

export const XPBar = ({ current, max, delay = 0 }: XPBarProps) => {
  const [animated, setAnimated] = useState(false);
  const percentage = (current / max) * 100;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const getXPColor = () => {
    if (percentage === 100) return 'bg-fantasy-gold';
    if (percentage >= 80) return 'bg-fantasy-emerald';
    if (percentage >= 50) return 'bg-fantasy-amber';
    return 'bg-fantasy-crimson';
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-fantasy-gold font-semibold text-sm">XP Progress</span>
        <span className="text-fantasy-silver text-sm">{current}/{max}</span>
      </div>
      
      <div className="w-full bg-fantasy-dark/80 rounded-full h-3 border border-fantasy-gold/30 overflow-hidden">
        <div 
          className={`h-full ${getXPColor()} rounded-full transition-all duration-2000 ease-out relative overflow-hidden`}
          style={{ 
            width: animated ? `${percentage}%` : '0%',
          }}
        >
          {/* Animated shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-pulse"></div>
        </div>
      </div>
      
      {/* XP blocks visualization */}
      <div className="flex gap-1">
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={i}
            className={`
              h-2 flex-1 rounded-sm transition-all duration-300
              ${i < Math.floor(percentage / 10) 
                ? getXPColor() 
                : 'bg-fantasy-dark/60 border border-fantasy-gold/20'
              }
            `}
            style={{ 
              transitionDelay: animated ? `${i * 100}ms` : '0ms' 
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
