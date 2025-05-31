import { useContext } from 'react';
import ThemeContext, { ThemeContextType } from './ThemeContext';

const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within ThemeProvider');
  }
  return context;
};

export default useThemeContext;