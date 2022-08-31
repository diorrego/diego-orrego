import React from 'react';
import { render, screen } from '@testing-library/react';

import Button from './';

const setup = () => render(<Button disabled>disabled</Button>);

it('should render a disabled button', () => {
  setup();
  const byElement = screen.getByRole('button', { name: /disabled/i });

  expect(byElement).toBeInTheDocument();
  expect(byElement).toHaveClass('bg-gray-500');
  expect(byElement).toBeDisabled();
});
