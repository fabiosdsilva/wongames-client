import * as S from './styles'

import Container from 'components/Container'
import Base from 'templates/Base'
import Heading from 'components/Heading'
import GameCard, { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import ShowCase from 'components/ShowCase'
import { Grid } from 'components/Grid'
import { Divider } from 'components/Divider'
import Empty from 'components/Empty'

export type WishListProps = {
  recommendedGames: GameCardProps[]
  games?: GameCardProps[]
  recommendedHighLight: HighlightProps
}

const Wishlist = ({
  games,
  recommendedGames,
  recommendedHighLight
}: WishListProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>

      {games && games.length >= 1 ? (
        <Grid>
          {games?.map((game, index) => (
            <GameCard key={`wishlist-${index}`} {...game} />
          ))}
        </Grid>
      ) : (
        <Empty
          title="Your wishlist is empty"
          description="Games added to your wishlist will appear here"
          hasLink
        />
      )}

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
