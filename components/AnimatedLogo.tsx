
import React from 'react';

const AnimatedLogo: React.FC = () => {
  return (
    <svg width="150" height="150" viewBox="0 0 100 100" className="drop-shadow-lg">
      <defs>
        <clipPath id="clipPath">
          <path d="M10 0 L50 0 L90 50 L50 100 L10 100 L50 50 Z" />
        </clipPath>
      </defs>
      
      {/* The background of the logo shape */}
      <rect width="100" height="100" fill="#5A5A5A" clipPath="url(#clipPath)"/>
      
      {/* The animated white 'K' parts */}
      <g fill="#FFFFFF">
        {/* Top-left shard */}
        <path 
            d="M10,0 L50,0 L30,20 Z" 
            className="animate-fadeInUp"
            style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}
        />
        {/* Bottom-left shard */}
        <path 
            d="M10,100 L50,100 L30,80 Z" 
            className="animate-fadeInUp" 
            style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}
        />
        {/* Right shard */}
        <path 
            d="M90,50 L50,0 L50,100 Z"
            className="animate-fadeIn" 
            style={{ animationDelay: '0.6s', animationFillMode: 'backwards' }}
        />
      </g>
    </svg>
  );
};

export default AnimatedLogo;
