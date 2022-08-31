import { render, screen } from '@testing-library/react';

import Button from './Button';

const setup = () => render(<Button>button</Button>);


it('should render a disabled button', () => {
  setup();
  const byElement = screen.getByRole('button', { name: /button/i });

  expect(byElement).toBeInTheDocument();
});
