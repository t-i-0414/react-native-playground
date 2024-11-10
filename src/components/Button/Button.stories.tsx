import { Button } from '.';
import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

const meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    text: 'Hello world',
  },
  decorators: [
    Story => (
      <View style={{ padding: 16, alignItems: 'flex-start' }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const AnotherExample: Story = {
  args: {
    text: 'Another example',
  },
};
