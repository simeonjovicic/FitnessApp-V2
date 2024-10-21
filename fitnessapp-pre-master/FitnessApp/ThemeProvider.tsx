import React, { createContext, useState, useContext } from 'react';

// Create a context for the theme
const ThemeContext = createContext({
  isDarkMode: false, // Default is light mode
  toggleTheme: () => {}, // Function to toggle between dark and light
});

// Create a provider component
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Start with light mode

  // Toggle between dark and light modes
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme in components
export const useTheme = () => useContext(ThemeContext);
