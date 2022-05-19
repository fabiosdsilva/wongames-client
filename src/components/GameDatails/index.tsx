import Heading from 'components/Heading'
import * as S from './styles'

const GameDatails = () => (
  <S.Wrapper>
    <Heading lineLeft lineColor="secondary">
      Game Details
    </Heading>
    <S.Content>
      <S.Block>
        <S.Title>Developer</S.Title>
        <S.Description>Gearbox Software</S.Description>
      </S.Block>

      <S.Block>
        <S.Title>Release date</S.Title>
        <S.Description>November 16, 2019</S.Description>
      </S.Block>

      <S.Block>
        <S.Title>Platforms</S.Title>
      </S.Block>

      <S.Block>
        <S.Title>Editor</S.Title>
        <S.Description>2k</S.Description>
      </S.Block>

      <S.Block>
        <S.Title>Rating</S.Title>
        <S.Description>18+</S.Description>
      </S.Block>

      <S.Block>
        <S.Title>Genre</S.Title>
        <S.Description>Action / Adventure</S.Description>
      </S.Block>
    </S.Content>
  </S.Wrapper>
)

export default GameDatails
