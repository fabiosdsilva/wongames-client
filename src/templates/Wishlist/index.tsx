import * as S from './styles'

import Container from 'components/Container'
import Base from 'templates/Base'
import Heading from 'components/Heading'
import GameCard, { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import ShowCase from 'components/ShowCase'
import { Grid } from 'components/Grid'
import { Divider } from 'components/Divider'

export type WishListProps = {
  recommendedGames: GameCardProps[]
  games?: GameCardProps[]
  recommendedHighLight: HighlightProps
}

const Wishlist = ({
  recommendedGames,
  games,
  recommendedHighLight
}: WishListProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>

      <Grid>
        {games?.map((game, index) => (
          <GameCard key={`wishlist-${index}`} {...game} />
        ))}
      </Grid>

      <Divider />
    </Container>

    <ShowCase
      title="You may like these games"
      games={recommendedGames}
      highlight={recommendedHighLight}
    />
  </Base>
)

export default Wishlist
