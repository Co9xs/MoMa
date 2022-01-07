import '../src/styles/globals.css';
// import * as nextRouter from 'next/router';
import { RouterContext } from 'next/dist/shared/lib/router-context';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};