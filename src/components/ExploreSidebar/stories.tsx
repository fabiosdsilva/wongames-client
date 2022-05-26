import { Story, Meta } from '@storybook/react'
import ExploreSidebar, { ExploreSidebarProps } from '.'

import itemsMock from './mock'

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  args: {
    items: itemsMock
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<ExploreSidebarProps> = (args) => (
  <ExploreSidebar {...args} />
)

export const WithInitialValue: Story<ExploreSidebarProps> = (args) => (
  <ExploreSidebar
    {...args}
    initialValues={{ windows: true, sort_by: 'low-to-high' }}
  />
)
