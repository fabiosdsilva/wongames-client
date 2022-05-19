import { Story, Meta } from '@storybook/react'
import GameDatails from '.'

export default {
  title: 'Game/GameDatails',
  component: GameDatails,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story = () => (
  <div style={{ maxWidth: '100rem', margin: 'auto' }}>
    <GameDatails />
  </div>
)
