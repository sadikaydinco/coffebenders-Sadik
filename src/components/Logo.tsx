import React from 'react';
export const Logo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="50" fill="#1B422B" />
    <text x="50" y="50" fill="#F8FAF7" fontSize="20" textAnchor="middle" dy=".3em">CB</text>
  </svg>
);
