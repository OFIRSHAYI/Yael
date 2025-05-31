import { createContext } from 'react';

export type ThemeMode = 'light';

export interface ThemeContextType {
  mode: ThemeMode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default ThemeContext;
