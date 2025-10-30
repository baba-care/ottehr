import * as defaults from '@ehrDefaultTheme/index';
import * as customTheme from '@ehrTheme/index';
import { createTheme, ThemeProvider } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import React from 'react';

const textFonts = ['Rubik', 'sans-serif'];
const headerFonts = ['Rubik', 'sans-serif'];

const typography: TypographyOptions = {
  fontFamily: textFonts.join(','),
  fontWeightMedium: 500,
  // Headers. Gotta have the "!important" in the fontWeight.
  h1: {
    fontSize: 42,
    fontWeight: '500 !important',
    fontFamily: headerFonts.join(','),
    lineHeight: '140%',
  },
  h2: {
    fontSize: 36,
    fontWeight: '500 !important',
    fontFamily: headerFonts.join(','),
    lineHeight: '140%',
  },
  h3: {
    fontSize: 32,
    fontWeight: '600 !important',
    fontFamily: headerFonts.join(','),
    lineHeight: '140%',
  },
  h4: {
    fontSize: 24,
    fontWeight: '600 !important',
    fontFamily: headerFonts.join(','),
    lineHeight: '140%',
  },
  h5: {
    fontSize: 18,
    fontWeight: '600 !important',
    fontFamily: headerFonts.join(','),
    lineHeight: '140%',
  },
  h6: {
    fontSize: 16,
    fontWeight: '600 !important',
    fontFamily: headerFonts.join(','),
    lineHeight: '140%',
  },
  // Other
  subtitle1: {
    fontSize: 20,
    fontWeight: 500,
    fontFamily: textFonts.join(','),
    lineHeight: '140%',
  },
  subtitle2: {
    fontSize: 12,
    fontWeight: 500,
    fontFamily: textFonts.join(','),
    lineHeight: '140%',
  },
  body1: {
    fontSize: 16,
    fontWeight: 400,
    fontFamily: textFonts.join(','),
    lineHeight: '140%',
  },
  body2: {
    fontSize: 14,
    fontWeight: 400,
    fontFamily: textFonts.join(','),
    lineHeight: '140%',
  },
  caption: {
    fontSize: 12,
    fontWeight: 400,
    fontFamily: textFonts.join(','),
    lineHeight: '140%',
  },
  overline: {
    fontSize: 12,
    fontWeight: 400,
    fontFamily: textFonts.join(','),
    lineHeight: '140%',
  },
  button: {
    fontSize: 14,
    fontWeight: 500,
    fontFamily: textFonts.join(','),
    lineHeight: '140%',
  },
};

const theme = createTheme({
  palette: {
    ...defaults.palette,
    ...customTheme.palette,
  },
  typography: typography,
  shape: {
    borderRadius: 12, // More rounded corners like advocate dashboard
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          textTransform: 'none',
          fontWeight: 600,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        contained: {
          backgroundColor: '#1a1a1a',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#333333',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
          border: '1px solid #e5e7eb',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 10,
          '&.Mui-selected': {
            fontWeight: 700,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 10,
            '& fieldset': {
              borderColor: '#e5e7eb',
            },
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
          },
        },
      },
    },
  },
});

export const CustomThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
