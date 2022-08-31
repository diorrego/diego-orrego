import React from 'react';
import { render, screen } from '@testing-library/react';

import TextInput from './TextInput';

const setup = () => render(<TextInput placeholder="placeholder" />);

it('should render a input with placeholder', () => {
  setup();
  const placeholder = screen.getByPlaceholderText('placeholder');

  expect(placeholder).toBeInTheDocument();
});
