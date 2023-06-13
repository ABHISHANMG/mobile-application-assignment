import { render, screen } from '@testing-library/react';

import {BrowswerRouter} from 'react-dom'

import App from './App';

test('renders learn react link', () => {
  render(<BrowswerRouter><App /></BrowswerRouter>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
