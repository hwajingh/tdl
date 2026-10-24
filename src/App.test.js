import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders the list UI, adds an item, and deletes it', () => {
  render(<App />);
  expect(screen.getByText(/To Do list/i)).toBeInTheDocument();
  const input = screen.getByPlaceholderText(/things to do/i);
  fireEvent.change(input, { target: { value: 'Buy milk' } });
  fireEvent.click(screen.getByRole('button', { name: /add/i }));
  expect(screen.getByText('Buy milk')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /delete it/i }));
  expect(screen.queryByText('Buy milk')).not.toBeInTheDocument();
});

test('does not add a blank item', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/things to do/i);
  fireEvent.change(input, { target: { value: '   ' } });
  fireEvent.click(screen.getByRole('button', { name: /add/i }));
  expect(screen.queryByRole('button', { name: /delete it/i })).not.toBeInTheDocument();
});
