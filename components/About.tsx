
import React from 'react';
import { useInView } from '../hooks/useInView';

const About: React.FC = () => {
  // FIX: Explicitly type the useInView hook for the section element.
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.5 });
  return (
    <section id="about" ref={ref} className="py-20 lg:py-40 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="absolute inset-0 z-0 overflow-hidden">
        <svg width="100%" height="100%" className="absolute -left-1/4 top-0 h-full w-auto">
          <path 
            d="M-100,0 C200,200 200,600 -100,800 S300,1000 500,1200" 
            fill="none" 
            stroke="var(--accent)" 
            strokeWidth="2" 
            className="opacity-10 animate-shape-float"
            style={{animationDuration: '40s'}}
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <h2 
          className={`font-serif text-4xl md:text-5xl text-white mb-6 transition-[opacity,transform] duration-1000 ease-out delay-200 will-change-[opacity,transform] ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          Design with <span className="text-accent">Purpose</span>
        </h2>
        <p 
          className={`text-lg md:text-xl leading-relaxed transition-[opacity,transform] duration-1000 ease-out delay-400 will-change-[opacity,transform] ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          style={{ 
            color: 'var(--text-primary)'
          }}
        >
          At Kreation, we believe that great design is more than just aesthetics. It's about solving problems, communicating ideas, and creating meaningful connections between brands and their users. We are a collective of passionate designers and developers dedicated to pushing the boundaries of digital creativity. Our process is collaborative, our approach is strategic, and our goal is to deliver excellence in every pixel and line of code.
        </p>
      </div>
    </section>
  );
};

export default About;