'use client';

import { ReactElement } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import IBaseComponentProps from '^/types/IBaseComponentProps';

interface IProvidersProps extends IBaseComponentProps {}

const Providers = ({ children }: IProvidersProps): ReactElement => (
  <NextUIProvider>
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
    >
      {children}
    </NextThemesProvider>
  </NextUIProvider>
);

export default Providers;

