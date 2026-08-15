import React from 'react';

const InputField = ({
  label,
  id,
  name,
  type = 'text',
  error,
  className = '',
  ...props
}) => {
  // Use the provided ID, or fall back to the name attribute if no ID is given
  const inputId = id || name;

  return (
    <div className={className}>
      {/* 1. Render the label if provided */}
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      
      {/* 2. Input Container */}
      <div className="mt-1 relative">
        <input
          type={type}
          name={name}
          id={inputId}
          className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm transition-colors duration-200 ${
            error 
              ? 'border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500' 
              : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
          }`}
          {...props}
        />
      </div>

      {/* 3. Render validation error messages if they exist */}
      {error && (
        <p className="mt-2 text-sm text-red-600" id={`${inputId}-error`}>
          {error}
        </p>
      )}
    </div>
  );
};

export default InputField;