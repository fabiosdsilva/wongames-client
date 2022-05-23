import * as S from './styles'

export type GameItemProps = {
  img: string
  title: string
  price: string
}

const GameItem = ({ img, title, price }: GameItemProps) => (
  <S.Wrapper>
    <S.ImageBox>
      <img
        src="https://source.unsplash.com/user/willianjusten/151x70"
        alt={title}
      />
    </S.ImageBox>

    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Price>{price}</S.Price>
    </S.Content>
  </S.Wrapper>
)

export default GameItem
