import { Story, Meta } from '@storybook/react'
import ProfileMenu from '.'

export default {
  title: 'Profile/ProfileMenu',
  component: ProfileMenu,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story = () => <ProfileMenu />
