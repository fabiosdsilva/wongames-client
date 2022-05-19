import { Story, Meta } from '@storybook/react'
import GameDatails, { GameDatailsProps } from '.'

import gameDetailsMock from './mock'

export default {
  title: 'Game/GameDatails',
  component: GameDatails,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    ...gameDetailsMock
  },
  argTypes: {
    platforms: {
      control: {
        type: 'inline-check',
        options: ['windows', 'linux', 'mac']
      }
    },
    genres: {
      control: 'object'
    },
    releaseDate: {
      control: 'date'
    }
  }
} as Meta

export const Default: Story<GameDatailsProps> = (args) => (
  <div style={{ maxWidth: '100rem', margin: 'auto' }}>
    <GameDatails {...args} />
  </div>
)
