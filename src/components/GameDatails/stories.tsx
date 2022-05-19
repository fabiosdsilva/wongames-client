import { Story, Meta } from '@storybook/react'
import GameDatails, { GameDatailsProps } from '.'

export default {
  title: 'Game/GameDatails',
  component: GameDatails,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    platforms: ['windows', 'linux', 'mac']
  },
  argTypes: {
    platforms: {
      control: {
        type: 'inline-check',
        options: ['windows', 'linux', 'mac']
      }
    }
  }
} as Meta

export const Default: Story<GameDatailsProps> = (args) => (
  <div style={{ maxWidth: '100rem', margin: 'auto' }}>
    <GameDatails {...args} />
  </div>
)
