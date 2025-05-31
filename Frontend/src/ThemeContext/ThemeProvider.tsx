import { ReactNode, FC } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import ThemeContext, { ThemeMode } from './ThemeContext';
import { lightTheme } from "./Themes";
import { CssBaseline } from '@mui/material';

interface CustomThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: FC<CustomThemeProviderProps> = ({ children }) => {
  const mode: ThemeMode = 'light';

  return (
    <ThemeContext.Provider value={{ mode }}>
        <CssBaseline />
        <MuiThemeProvider theme={lightTheme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
