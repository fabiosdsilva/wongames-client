import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import OrdersList from '.'
import mock from './mock'

jest.mock('components/Empty', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Empty" />
  }
}))

jest.mock('components/GameItem', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock GameItem">{children}</div>
  }
}))

describe('<OrdersList />', () => {
  it('verificar se está renderizando os items e heading', () => {
    const { container } = renderWithTheme(<OrdersList items={mock} />)

    expect(
      screen.getByRole('heading', { name: /my orders/i })
    ).toBeInTheDocument()

    // renderizando os cards
    expect(screen.getAllByTestId('Mock GameItem')).toHaveLength(2)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('verificar se o empty está sendo renderizando sem passar os items', () => {
    renderWithTheme(<OrdersList />)

    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument()
  })
})
