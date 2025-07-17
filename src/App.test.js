import { render, screen } from '@testing-library/react';
import { useTranslation } from 'react-i18next';
import App from './App';

// Mock i18n for testing
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key, // Simple mock, replace with actual translations if needed
    i18n: { changeLanguage: jest.fn() },
  }),
}));

test('renders quiz questions in English', () => {
  render(<App />);
  const questionElement = screen.getByText(/Which tag is used to create a hyperlink in HTML?/i);
  expect(questionElement).toBeInTheDocument();
});

test('renders language selector', () => {
  render(<App />);
  const selectElement = screen.getByRole('combobox');
  expect(selectElement).toBeInTheDocument();
});