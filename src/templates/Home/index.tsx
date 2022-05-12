import * as S from './styles'

import Container from 'components/Container'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import Menu from 'components/Menu'
import BannerSlider from 'components/BannerSlider'
import Highlight from 'components/Highlight'
import GameCardSlider from 'components/GameCardSlider'

import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcommingGames: GameCardProps[]
  upcommingHighligth: HighlightProps
  upcommingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighligth: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularGames,
  mostPopularHighlight,
  upcommingGames,
  upcommingHighligth,
  upcommingMoreGames,
  freeGames,
  freeHighligth
}: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />
      <S.SectionBanner>
        <BannerSlider items={banners}></BannerSlider>
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Container>
        <Heading color="black" lineLeft lineColor="secondary">
          News
        </Heading>
        <GameCardSlider items={newGames} color="black"></GameCardSlider>
      </Container>
    </S.SectionNews>

    <Container>
      <S.SectionMostPopular>
        <Heading color="white" lineLeft lineColor="secondary">
          Most popular
        </Heading>
        <Highlight {...mostPopularHighlight}></Highlight>
        <GameCardSlider items={mostPopularGames}></GameCardSlider>
      </S.SectionMostPopular>
    </Container>

    <Container>
      <S.SectionUpcoming>
        <Heading color="white" lineLeft lineColor="secondary">
          Upcoming
        </Heading>
        <GameCardSlider items={upcommingGames}></GameCardSlider>
        <Highlight {...upcommingHighligth}></Highlight>
        <GameCardSlider items={upcommingMoreGames}></GameCardSlider>
      </S.SectionUpcoming>
    </Container>

    <Container>
      <S.SectionFreeGames>
        <Heading color="white" lineLeft lineColor="secondary">
          Free games
        </Heading>
        <Highlight {...freeHighligth}></Highlight>
        <GameCardSlider items={freeGames}></GameCardSlider>
      </S.SectionFreeGames>
    </Container>

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)

export default Home
