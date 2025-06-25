// src/hooks/useThemeMode.ts
import { useState, useEffect } from 'react';

export const useThemeMode = () => {
    const [isDarkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const mode = localStorage.getItem('theme');
        setDarkMode(mode === 'dark');
    }, []);

    const toggleTheme = () => {
        setDarkMode((prev) => {
        const next = !prev;
        localStorage.setItem('theme', next ? 'dark' : 'light');
        return next;
        });
    };

    return { isDarkMode, toggleTheme };
};
// This hook manages the theme mode (light/dark) and persists the preference in localStorage.
// It initializes the theme based on localStorage value and provides a function to toggle the theme.