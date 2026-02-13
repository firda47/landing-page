
import React from 'react';

interface BrushShapeProps {
  color: string;
  className?: string;
  rotate?: number;
}

const BrushShape: React.FC<BrushShapeProps> = ({ color, className = "", rotate = 0 }) => {
  return (
    <div className={`absolute -z-10 select-none pointer-events-none ${className}`} style={{ transform: `rotate(${rotate}deg)` }}>
      <svg viewBox="0 0 500 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full opacity-80">
        <path 
          d="M10 80C50 20 120 10 250 20C380 30 450 60 490 120C450 140 380 130 250 130C120 130 50 110 10 80Z" 
          fill={color} 
        />
        <path 
          d="M30 60C80 30 150 20 250 30C350 40 420 70 470 110C420 120 350 115 250 115C150 115 80 100 30 60Z" 
          fill={color} 
          fillOpacity="0.5"
        />
      </svg>
    </div>
  );
};

export default BrushShape;
