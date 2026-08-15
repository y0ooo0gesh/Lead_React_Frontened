import React from 'react';

const Spinner = ({ 
  size = 'md', 
  color = 'text-indigo-600', 
  className = '' 
}) => {
  // 1. Map size props to Tailwind CSS sizing classes
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  };

  // Fallback to 'md' if an invalid size is provided
  const appliedSize = sizeClasses[size] || sizeClasses.md;

  return (
    <div role="status" className={`flex justify-center items-center ${className}`}>
      {/* 2. SVG Spinner element */}
      <svg
        className={`animate-spin ${appliedSize} ${color}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      {/* 3. Screen reader text for accessibility */}
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;