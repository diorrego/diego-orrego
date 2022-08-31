import React from 'react';

type ButtonProps = {
  children: string;
}

const Button = ({children}: ButtonProps) => {
  return (
    <button>{children}</button>
  );
};

export default Button;
