'use client';

import { createTheme, MantineColorsTuple, MantineThemeOverride } from '@mantine/core';

const teal: MantineColorsTuple = [
  '#e0f7fa',
  '#b2ebf2',
  '#80deea',
  '#4dd0e1',
  '#26c6da',
  '#00bcd4',
  '#00acc1',
  '#0097a7',
  '#00838f',
  '#006064',
];

export const theme: MantineThemeOverride = createTheme({
  colors: {
    teal,
  },
  primaryColor: 'teal',
  components: {
    Button: {
      styles: {
        root: {
          '&:hover': {
            backgroundColor: teal[7], // Using a darker shade for hover
          },
        },
      },
    },
  },
});
