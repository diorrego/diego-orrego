import React from 'react';
import { motion } from 'framer-motion';
import Text from '../Text';

const Button = ({
  variant = 'contained',
  className,
  children,
  disabled,
  textVariant,
  disabledStyle = 'bg-gray-500',
  type = 'button',
  ...props
}) => {
  const classes = {
    base: `      
      px-3
      py-2
      transition
      duration-100
    `,
    contained: `
      rounded-md
      bg-secondary-50
      shadow-md
      text-background
    `,
    outline: `
      border
    `,
  };

  return (
    <motion.button
      className={`${classes.base} ${variant !== 'text' && classes[variant]} ${
        disabled && disabledStyle
      } ${className}`}
      disabled={disabled}
      whileHover={
        !disabled && {
          scale: 1.025,
        }
      }
      whileTap={
        !disabled && {
          scale: 0.975,
        }
      }
      type={type}
      {...props}
    >
      <Text variant={textVariant}>{children}</Text>
    </motion.button>
  );
};

export default Button;
