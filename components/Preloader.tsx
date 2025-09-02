import React from 'react';
import AnimatedLogo from './AnimatedLogo';

interface PreloaderProps {
  isLoading: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ isLoading }) => {
  return (
    <div 
      className={`fixed inset-0 bg-neutral-800 flex justify-center items-center z-[100] transition-opacity duration-700 ease-in-out ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <div className="flex flex-col items-center">
        <AnimatedLogo />
        <h1 
          className="font-serif text-4xl text-white tracking-widest mt-6 animate-fadeInUp"
          style={{ animationDelay: '0.8s', animationFillMode: 'backwards' }}
        >
          KREATION
        </h1>
      </div>
    </div>
  );
};

export default Preloader;