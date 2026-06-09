import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Navigation from '@/components/Navigation';

const meta: Meta<typeof Navigation> = {
  title: 'Weather/Navigation',
  component: Navigation,
};

export default meta;

type Story = StoryObj<typeof Navigation>;

export const Default: Story = {
  args: {},
};

// export const HotDay: Story = {
//   args: {
//     city: 'Rotterdam',
//     temperature: 31,
//     windSpeed: 8,
//   },
// };
