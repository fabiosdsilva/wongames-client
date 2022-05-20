import Base from 'templates/Base'
import * as S from './styles'

export type GameTamPlateProps = {
  cover: string
}

const Game = ({ cover }: GameTamPlateProps) => (
  <Base>
    <S.Cover src={cover} aria-lavel="cover" />
  </Base>
)

export default Game
