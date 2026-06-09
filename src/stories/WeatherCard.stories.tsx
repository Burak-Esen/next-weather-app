import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import WeatherCard from '@/components/WeatherCard';

const meta: Meta<typeof WeatherCard> = {
  title: 'Weather/WeatherCard',
  component: WeatherCard,
};

export default meta;

type Story = StoryObj<typeof WeatherCard>;

export const Sunny: Story = {
  args: {
    city: 'Breda',
    temperature: 24,
    windSpeed: 12,
  },
};

export const HotDay: Story = {
  args: {
    city: 'Rotterdam',
    temperature: 31,
    windSpeed: 8,
  },
};
