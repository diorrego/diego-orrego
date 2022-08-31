import React from 'react';

//This component has 6 font variants for the system (title, subtitle, highlight, description, paragraph and body).
//The variant not specified in the variants function is body.

const Title = ({ className, children }) => {
  return (
    <h1 className={`text-3xl font-bold leading-relaxed ${className}`}>
      {children}
    </h1>
  );
};

const Subtitle = ({ className, children }) => {
  return (
    <h2 className={`text-xl font-semibold leading-normal ${className}`}>
      {children}
    </h2>
  );
};

const Highlight = ({ className, children }) => {
  return (
    <h3 className={`text-lg font-semibold leading-normal ${className}`}>
      {children}
    </h3>
  );
};

const Description = ({ className, children }) => {
  return (
    <p className={`text-base font-medium leading-normal ${className}`}>
      {children}
    </p>
  );
};

const Paragraph = ({ className, children }) => {
  return (
    <p className={`text-base font-normal leading-normal ${className}`}>
      {children}
    </p>
  );
};

const Body = ({ className, children }) => {
  return (
    <div className={`text-sm font-normal leading-normal ${className}`}>
      {children}
    </div>
  );
};

const Text = ({ variant = 'body', className, children }) => {
  const variants = {
    title: Title,
    subtitle: Subtitle,
    highlight: Highlight,
    description: Description,
    paragraph: Paragraph,
    body: Body,
  };

  const Variant = variants[variant] || variants.body;

  return <Variant className={className}>{children}</Variant>;
};

export default Text;
