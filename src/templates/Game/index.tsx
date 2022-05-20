import Container from 'components/Container'
import GameInfo, { GameInfoProps } from 'components/GameInfo'
import Base from 'templates/Base'
import * as S from './styles'

export type GameTamPlateProps = {
  cover: string
  gameInfo: GameInfoProps
}

const Game = ({ cover, gameInfo }: GameTamPlateProps) => (
  <Base>
    <S.Cover src={cover} aria-lavel="cover" />
    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>
    </S.Main>
  </Base>
)

export default Game
