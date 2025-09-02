import React from 'react';

const Hero: React.FC = () => {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center relative text-center overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="hero-video opacity-50"
      >
        <source src="https://videos.pexels.com/video-files/853875/853875-hd_1920_1080_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 hero-overlay-animated"></div>

      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice" className="absolute inset-0">
            <defs>
                <radialGradient id="shape-gradient-1" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="shape-gradient-2" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(102, 51, 153, 0.15)" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="rgba(102, 51, 153, 0.15)" stopOpacity="0" />
                </radialGradient>
            </defs>
            
            <g transform="translate(500, 500)">
                <polygon 
                    points="0,-450 450,0 0,450 -450,0" 
                    fill="none" 
                    stroke="var(--accent)" 
                    strokeWidth="1"
                    className="opacity-5 animate-shape-rotate will-change-transform"
                    style={{ animationDuration: '160s' }}
                />
            </g>

            <circle 
                cx="20vw" 
                cy="30vh" 
                r="35vmax" 
                fill="url(#shape-gradient-1)"
                className="animate-shape-float will-change-transform"
                style={{ animationDuration: '45s' }}
            />
            
            <circle 
                cx="80vw" 
                cy="70vh" 
                r="40vmax" 
                fill="url(#shape-gradient-2)"
                className="animate-shape-float will-change-transform"
                style={{ animationDelay: '5s', animationDuration: '60s' }}
            />
        </svg>
      </div>
      
      <div className="relative z-10 px-6">
        <h1 
          className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-wider uppercase text-white animate-fadeInUp"
          style={{ animationDelay: '0.5s', animationFillMode: 'backwards' }}
        >
          Weaving Digital <span className="text-accent">Dreams</span>
        </h1>
        <p 
          className="text-lg md:text-xl mt-6 max-w-3xl mx-auto animate-fadeInUp"
          style={{ color: 'var(--text-primary)', animationDelay: '0.8s', animationFillMode: 'backwards' }}
        >
          Kreation is a digital design agency where innovation meets artistry. We build bespoke web experiences that captivate and convert.
        </p>
        <button
          onClick={scrollToPortfolio}
          data-interactive
          className="mt-10 px-8 py-4 text-black font-bold rounded-full uppercase tracking-widest text-sm transition-all duration-300 transform hover:scale-105 animate-fadeInUp"
          style={{ 
            backgroundColor: 'var(--accent)', 
            animationDelay: '1.1s', 
            animationFillMode: 'backwards' 
          }}
        >
          Explore Our Work
        </button>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div 
          className="w-6 h-10 border-2 rounded-full flex justify-center items-start p-1 animate-fadeIn"
          style={{ borderColor: 'var(--accent)', animationDelay: '1.5s' }}
        >
          <div className="w-1 h-2 rounded-full animate-scroll-down" style={{ backgroundColor: 'var(--accent)'}}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;