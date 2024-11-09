import { StorybookConfig } from '@storybook/react-native';

const main: StorybookConfig = {
  stories: ['../src/**/*.stories.?(ts|tsx)'],
  addons: [
    '@storybook/addon-ondevice-controls',
    '@storybook/addon-ondevice-actions',
  ],
};

export default main;
