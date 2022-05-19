import * as S from './styles'

import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'
import Button from 'components/Button'

import {
  FavoriteBorder,
  AddShoppingCart,
  Favorite
} from '@styled-icons/material-outlined'

export type GameInfoProps = {
  title: string
  description: string
  price: string
}

const GameInfo = ({ title, description, price }: GameInfoProps) => (
  <S.Wrapper>
    <Heading color="black" lineBottom>
      {title}
    </Heading>
    <S.Description>{description}</S.Description>
    <Ribbon color="secondary">{`${price}`}</Ribbon>

    <S.ButtonWrapper>
      <Button icon={<AddShoppingCart />}>Add to cart</Button>
      <Button icon={<FavoriteBorder />} minimal>
        Wishlist
      </Button>
    </S.ButtonWrapper>
  </S.Wrapper>
)

export default GameInfo
