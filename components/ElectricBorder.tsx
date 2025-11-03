"use client";

import "./ElectricBorder.css";

interface ElectricBorderProps {
  children: React.ReactNode;
  color?: string;
  speed?: number;
  chaos?: number;
  thickness?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function ElectricBorder({ 
  children, 
  className, 
  style 
}: ElectricBorderProps) {
  return (
    <div
      className={`electric-border-clean ${className ?? ''}`}
      style={style}
    >
      {children}
    </div>
  );
}
