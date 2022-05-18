import * as S from './styles'

import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'
import Button from 'components/Button'

import {
  FavoriteBorder,
  AddShoppingCart,
  Favorite
} from '@styled-icons/material-outlined'

const GameInfo = () => (
  <S.Wrapper>
    <Heading color="black" lineBottom lineColor="primary">
      Borderlands 3
    </Heading>
    <S.Description>
      Experience the epic space strategy games that redefined the RTS genre.
      Control your fleet and build an armada across more than 30 single-player
      missions.
    </S.Description>
    <Ribbon color="secondary">$215,00</Ribbon>

    <Button icon={<FavoriteBorder />} minimal>
      Wishlist
    </Button>

    <Button icon={<AddShoppingCart />}>Add to cart</Button>
  </S.Wrapper>
)

export default GameInfo
