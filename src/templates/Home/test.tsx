import '../../../.jest/match-media-mock'

import { screen } from '@testing-library/react'
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

jest.mock('components/ShowCase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock ShowCase"></div>
    }
  }
})

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Banner Slider"></div>
    }
  }
})

describe('<Home />', () => {
  it('verificar se está redenrizando o menu', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByTestId('Mock Banner Slider')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock ShowCase')).toHaveLength(5)
  })
})
