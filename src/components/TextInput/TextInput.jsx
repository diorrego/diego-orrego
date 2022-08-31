import React from 'react';

const TextInput = ({ className, type = 'text', ...props }) => {
  const classes = `
    rounded 
    bg-container-800
    p-4  
    border
    border-container-800
    outline-none
    hover:border-primary-200
    focus:border-primary-200
    placeholder:text-container-400
    focus:bg-input
    focus:text-secondary-50
    focus:placeholder:text-container-400
    transition duration-300
  `;

  return <input type={type} className={`${classes} ${className}`} {...props} />;
};

export default TextInput;
