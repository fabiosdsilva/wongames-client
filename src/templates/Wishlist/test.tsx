import 'match-media-mock.js'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Wishlist, { WishListProps } from '.'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

const props: WishListProps = {
  recommendedHighLight: highlightMock,
  recommendedGames: gamesMock
}

jest.mock('components/ShowCase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />
  }
}))

describe('<Wishlist />', () => {
  it('verificar se está renderizando o heading e o showcase', () => {
    renderWithTheme(<Wishlist {...props} />)

    expect(
      screen.getByRole('heading', { name: /Wishlist/ })
    ).toBeInTheDocument()

    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
  })

  it('verificar se o component Empty está renderizando', () => {
    renderWithTheme(<Wishlist {...props} />)

    expect(
      screen.getByRole('heading', { name: /your wishlist is empty/i })
    ).toBeInTheDocument()
  })

  it('verificar se o component Empty não está renderizando', () => {
    renderWithTheme(<Wishlist {...props} games={gamesMock} />)

    expect(
      screen.queryByRole('heading', { name: /your wishlist is empty/i })
    ).not.toBeInTheDocument()
  })
})
