import * as S from './styles'

import Button from '../Button'
import Ribbon, { RibbonColors, RibbonSizes } from '../Ribbon'

import {
  FavoriteBorder,
  AddShoppingCart,
  Favorite
} from '@styled-icons/material-outlined'

export type GameCardProps = {
  title: string
  developer: string
  price: string
  img: string
  promotionalPrice?: string
  favorite?: boolean
  onFav?: () => void
  ribbon?: RibbonColors
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
}

const GameCard = ({
  title,
  developer,
  price,
  img,
  promotionalPrice,
  favorite,
  onFav,
  ribbon,
  ribbonColor,
  ribbonSize
}: GameCardProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
    <S.Image>
      <img src={img} alt={title} />
    </S.Image>
    <S.Content>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Developer>{developer}</S.Developer>
      </S.Info>
      <S.FavIcon onClick={onFav} role="button">
        {favorite ? (
          <Favorite aria-label="Remove from Wishlist" />
        ) : (
          <FavoriteBorder aria-label="Add to Wishlist" />
        )}
      </S.FavIcon>
      <S.BuyBox>
        {!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
        <S.Price>{promotionalPrice || price}</S.Price>
        <Button size="small" icon={<AddShoppingCart />} />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default GameCard
