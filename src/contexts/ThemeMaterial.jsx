import React, { createContext, useMemo, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import useLocalState from '../hooks/localState';

export const ColorModeContext = createContext({
  toggleMode: () => {},
  mode: 'light',
});

const themeObj = {
  dark: {
    background: {
      default: '#1c2438',
      primary: '#1c2438',
    },
  },
};
const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      ...(mode === 'dark' && {
        main: '#6366f1',
      }),
      ...(mode === 'light' && {
        main: '#6366f1',
      }),
    },
    ...(mode === 'dark' && {
      background: {
        default: '#1c2438',
        paper: '#1c2438',
      },
    }),
    ...(mode === 'light' && {
      background: {
        default: '#fff',
        paper: '#fff',
      },
    }),
    text: {
      ...(mode === 'dark'
        ? {
          primary: '#d11414',
          secondary: '#d11414',
        }
        : {
          primary: '#d11414',
          secondary: '#d11414',
        }),
      ...(mode === 'light'
        ? {
          primary: '#8f8d8d',
          secondary: '#8f8d8d',
        }
        : {
          primary: '#8f8d8d',
          secondary: '#8f8d8d',
        }),
    },
  },
});

export function ColorContextProvider({ children }) {
  const [mode, setMode] = useLocalState('theme', 'light');
  const colorMode = useMemo(
    () => ({
      toggleMode: () => setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light')),
      mode,
    }),
    [mode],
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
