import { Story, Meta } from '@storybook/react'
import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'King Arthur: Knight" s Tale',
    subtitle: 'A riveting dark fantasy RPG',
    buttonLabel: 'Buy now',
    buttonLink:
      'https://store.steampowered.com/app/1157390/King_Arthur_Knights_Tale/',
    backgroundImage: '/img/red-dead-img.jpg'
  }
} as Meta

export const Default: Story<HighlightProps> = (args) => <Highlight {...args} />
