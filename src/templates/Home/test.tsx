import '../../../.jest/match-media-mock'

import { getByLabelText, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Home from '.'

import GamesMock from 'components/GameCardSlider/mock'
import BannerMock from 'components/BannerSlider/mock'
import HighlightMock from 'components/Highlight/mock'

const props = {
  banners: [BannerMock][0],
  newGames: [GamesMock][0],
  mostPopularGames: [GamesMock][0],
  mostPopularHighlight: [HighlightMock][0],
  upcommingGames: [GamesMock][0],
  upcommingHighligth: [HighlightMock][0],
  upcommingMoreGames: [GamesMock][0],
  freeGames: [GamesMock][0],
  freeHighligth: [HighlightMock][0]
}

describe('<Home />', () => {
  it('verificar se está redenrizando o menu', () => {
    renderWithTheme(<Home {...props} />)

    // menu
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()

    // sections
    expect(screen.getAllByRole('heading', { name: /News/i })).toHaveLength(1)
    expect(
      screen.getAllByRole('heading', { name: /Most popular/i })
    ).toHaveLength(1)
    expect(screen.getAllByRole('heading', { name: /Upcoming/i })).toHaveLength(
      1
    )
    expect(
      screen.getAllByRole('heading', { name: /Free games/i })
    ).toHaveLength(1)

    expect(
      screen.getAllByRole('img', { name: /Population Zero/i })
    ).toHaveLength(21)

    // footer
    expect(
      screen.getByRole('heading', { name: /FOLLOW US/i })
    ).toBeInTheDocument()
  })
})
