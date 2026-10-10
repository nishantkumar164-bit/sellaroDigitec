import React, { useRef, useState } from 'react';

const Card = ({
  children,
  className = '',
  glowColor = 'blue',
  interactive = true,
  onClick
}) => {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };

  const glowStyles = {
    blue: 'rgba(59, 130, 246, 0.15)',
    purple: 'rgba(139, 92, 246, 0.12)',
    emerald: 'rgba(16, 185, 129, 0.15)'
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`relative glass-panel overflow-hidden rounded-2xl p-6 ${
        interactive ? 'cursor-pointer hover:-translate-y-1' : ''
      } ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s, box-shadow 0.3s'
      }}
    >
      {/* Real-time Dynamic Spotlight Overlay */}
      {interactive && isHovered && (
        <div
          className="absolute pointer-events-none -inset-px rounded-2xl transition duration-300 opacity-100"
          style={{
            background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, ${glowStyles[glowColor] || glowStyles.blue}, transparent 80%)`
          }}
        />
      )}
      
      {/* Card Content Layer */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
};

export default Card;
