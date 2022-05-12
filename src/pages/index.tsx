import Home, { HomeTemplateProps } from '../templates/Home'

import GamesMock from 'components/GameCardSlider/mock'
import BannerMock from 'components/BannerSlider/mock'
import HighlightMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export function getStaticProps() {
  return {
    props: {
      banners: BannerMock,
      newGames: GamesMock,
      mostPopularGames: GamesMock,
      mostPopularHighlight: HighlightMock,
      upcommingGames: GamesMock,
      upcommingHighligth: HighlightMock,
      upcommingMoreGames: GamesMock,
      freeGames: GamesMock,
      freeHighligth: HighlightMock
    }
  }
}
