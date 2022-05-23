import { Story, Meta } from '@storybook/react'
import Empty, { EmptyProps } from '.'

export default {
  title: 'Empty',
  component: Empty,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    title: 'A simple title',
    description: 'a simple description',
    hasLink: true
  }
} as Meta

export const Default: Story<EmptyProps> = (args) => <Empty {...args} />
