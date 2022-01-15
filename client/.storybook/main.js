const path = require('path');
const SRC_PATH = path.resolve(__dirname, '../src');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(SRC_PATH, './components'),
      '@containers': path.resolve(SRC_PATH, './containers'),
      '@pages': path.resolve(SRC_PATH, './pages'),
      '@hooks': path.resolve(SRC_PATH, './hooks'),
      '@styles': path.resolve(SRC_PATH, './styles'),
      '@utils': path.resolve(SRC_PATH, './utils'),
    };
    return config;
  },
};
