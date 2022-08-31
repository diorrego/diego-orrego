import React from 'react';
import { render, screen } from '@testing-library/react';

import Text from './Text';

const setup = () => render(<Text>text</Text>);

it('should render a element with text', () => {
  setup();
  const byElement = screen.getByText(/text/i);

  expect(byElement).toBeInTheDocument();
});
