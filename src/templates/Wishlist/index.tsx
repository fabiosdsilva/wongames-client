import * as S from './styles'

import Container from 'components/Container'
import Base from 'templates/Base'
import Heading from 'components/Heading'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import ShowCase from 'components/ShowCase'

export type WishListProps = {
  recommendedGames: GameCardProps[]
  recommendedHighLight: HighlightProps
}

const Wishlist = ({
  recommendedGames,
  recommendedHighLight
}: WishListProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>
    </Container>
    <ShowCase
      title="You may like these games"
      games={recommendedGames}
      highlight={recommendedHighLight}
    />
  </Base>
)

export default Wishlist
