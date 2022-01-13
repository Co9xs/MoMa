import { addDecorator } from '@storybook/react';
import { MemoryRouter } from 'react-router';

import '../src/index.css';

// add decorator for rendering component using react router packages
addDecorator((story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
