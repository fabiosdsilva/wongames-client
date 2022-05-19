import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import GameInfo from '.'

const props = {
  title: 'My title',
  description: 'My description',
  price: '250'
}

describe('<GameInfo />', () => {
  it('verificar se heading está sendo renderizado', () => {
    renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('heading', { name: /my title/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/my description/i)).toBeInTheDocument()
    expect(screen.getByText(/250/)).toBeInTheDocument()
  })

  it('verificar se os botões estão sendo renderizados', () => {
    renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /wishlist/i })
    ).toBeInTheDocument()
  })
})
