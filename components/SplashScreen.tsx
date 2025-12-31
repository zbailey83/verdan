import React, { useEffect, useState } from 'react';
import { LeafIcon } from './Icons';
import { InfiniteGrid } from './ui/the-infinite-grid';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  // Auto-dismiss after a few seconds if not interacted with, for smoother UX
  useEffect(() => {
    const timer = setTimeout(() => {
      // setIsVisible(false);
      // onComplete();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  const handleStart = () => {
    setIsVisible(false);
    setTimeout(onComplete, 500); // Allow exit animation
  };

  return (
    <InfiniteGrid
      className={`fixed inset-0 z-50 transition-opacity duration-500 bg-emerald-50 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
    >
      <div className="flex flex-col items-center justify-center h-full w-full">
        <div className="relative mb-8">
          {/* Animated Background Blob */}
          <div className="absolute inset-0 bg-emerald-400 opacity-20 blur-3xl rounded-full animate-pulse transform scale-150"></div>

          {/* Clay Icon Container */}
          <div className="relative w-32 h-32 clay-card rounded-full flex items-center justify-center animate-[float_4s_ease-in-out_infinite]">
            <LeafIcon className="w-16 h-16 text-emerald-600" />
          </div>
        </div>

        <div className="text-center space-y-2 mb-12">
          <h1 className="text-5xl font-bold text-slate-800 tracking-tight drop-shadow-sm font-quicksand">Verdant</h1>
          <p className="text-slate-500 font-medium text-lg tracking-wide">Your AI Botanist</p>
        </div>

        <div className="flex flex-col items-center gap-4 pointer-events-auto">
          <button
            onClick={handleStart}
            className="clay-btn-primary px-10 py-4 text-xl font-bold tracking-wide animate-[bounce_2s_infinite]"
          >
            Enter Garden
          </button>
        </div>

        <div className="absolute bottom-8 text-slate-400 text-sm font-medium">
          v1.0.0
        </div>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </InfiniteGrid>
  );
};