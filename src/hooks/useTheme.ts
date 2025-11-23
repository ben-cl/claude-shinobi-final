"use client";

import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

const THEME_STORAGE_KEY = 'shinobi-theme';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('light');
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize theme from localStorage on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
    const initialTheme = storedTheme || 'light';

    setTheme(initialTheme);
    setIsInitialized(true);

    // Apply theme to document
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Toggle between light and dark theme
  const toggleTheme = () => {
    const newTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);

    // Update localStorage
    localStorage.setItem(THEME_STORAGE_KEY, newTheme);

    // Update document class
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Set a specific theme
  const setSpecificTheme = (newTheme: Theme) => {
    setTheme(newTheme);

    // Update localStorage
    localStorage.setItem(THEME_STORAGE_KEY, newTheme);

    // Update document class
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return {
    theme,
    isDark: theme === 'dark',
    isInitialized,
    toggleTheme,
    setTheme: setSpecificTheme,
  };
}
