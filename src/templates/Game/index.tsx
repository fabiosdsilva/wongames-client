import Gallery, { GalleryImageProps } from 'components/Gallery'
import { GameCardProps } from 'components/GameCard'
import GameDatails, { GameDatailsProps } from 'components/GameDatails'
import GameInfo, { GameInfoProps } from 'components/GameInfo'
import { HighlightProps } from 'components/Highlight'
import MediaMatch from 'components/MediaMatch'
import ShowCase from 'components/ShowCase'
import TextContent, { TextContentProps } from 'components/TextContent'
import Base from 'templates/Base'
import * as S from './styles'

export type GameTamPlateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: TextContentProps
  details: GameDatailsProps
  upcommingGames: GameCardProps[]
  upcommingHighlight: HighlightProps
  recommendedGames: GameCardProps[]
}

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcommingGames,
  upcommingHighlight,
  recommendedGames
}: GameTamPlateProps) => (
  <Base>
    <S.Cover src={cover} aria-label="cover" />
    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>

      <S.SectionGallery>
        {!!gallery && (
          <MediaMatch greaterThan="medium">
            <Gallery items={gallery} />
          </MediaMatch>
        )}
      </S.SectionGallery>

      <S.SectionDescription>
        <TextContent title="Description" content={description} />
      </S.SectionDescription>

      <S.SectionGameDetails>
        <GameDatails {...details} />
      </S.SectionGameDetails>

      <ShowCase
        title="Upcomming"
        games={upcommingGames}
        highlight={upcommingHighlight}
      />

      <ShowCase title="You may like these games" games={recommendedGames} />
    </S.Main>
  </Base>
)

export default Game
