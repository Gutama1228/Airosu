// src/app/providers/ThemeProvider.tsx
import { createContext, useContext } from 'react';

const ThemeContext = createContext({ dark: false });

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={{ dark: false }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
