import Gallery, { GalleryImageProps } from 'components/Gallery'
import GameInfo, { GameInfoProps } from 'components/GameInfo'
import MediaMatch from 'components/MediaMatch'
import TextContent, { TextContentProps } from 'components/TextContent'
import Base from 'templates/Base'
import * as S from './styles'

export type GameTamPlateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps
  description: TextContentProps
}

const Game = ({ cover, gameInfo, gallery, description }: GameTamPlateProps) => (
  <Base>
    <S.Cover src={cover} aria-lavel="cover" />
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
    </S.Main>
  </Base>
)

export default Game
