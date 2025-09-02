import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e: MouseEvent) => {
      if (e.target instanceof Element && e.target.closest('[data-interactive]')) {
        setIsHovering(true);
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      if (e.target instanceof Element && e.target.closest('[data-interactive]')) {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  const cursorDotStyle: React.CSSProperties = {
    transform: `translate(${position.x}px, ${position.y}px)`,
  };

  const cursorOutlineStyle: React.CSSProperties = {
    transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
    transition: 'width 0.3s, height 0.3s, border-color 0.3s',
    borderColor: isHovering ? 'var(--accent)' : 'white',
  };

  return (
    <div className="hidden lg:block pointer-events-none fixed top-0 left-0 w-full h-full z-50">
      <div
        className="cursor-dot rounded-full fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2"
        style={cursorDotStyle}
      ></div>
      <div
        className={`cursor-outline rounded-full fixed transition-transform duration-200 ease-out ${isHovering ? 'w-16 h-16' : 'w-10 h-10'}`}
        style={cursorOutlineStyle}
      ></div>
    </div>
  );
};

export default CustomCursor;