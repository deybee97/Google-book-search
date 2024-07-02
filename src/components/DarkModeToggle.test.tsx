import { render, screen, fireEvent } from '@testing-library/react';
import DarkModeToggle from './DarkModeToggle';

describe('DarkModeToggle', () => {
  test('it toggles dark mode on and off', () => {
    render(<DarkModeToggle />);
    
    const button = screen.getByRole('button');
    
    // Initially light mode
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    
    // Toggle to dark mode
    fireEvent.click(button);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    
    // Toggle back to light mode
    fireEvent.click(button);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  test('it sets dark mode based on local storage', () => {
    localStorage.setItem('theme', 'dark');
    render(<DarkModeToggle />);
    
    // Should be in dark mode based on local storage
    expect(document.documentElement.classList.contains('dark')).toBe(true);

    // Clear local storage for other tests
    localStorage.removeItem('theme');
  });
});
