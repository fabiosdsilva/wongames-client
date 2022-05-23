import { Story, Meta } from '@storybook/react'
import CartList, { CartListProps } from '.'

import cartMock from './mock'

export default {
  title: 'CartList',
  component: CartList,
  args: {
    items: cartMock,
    total: '$ 300,00'
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<CartListProps> = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} />
  </div>
)
