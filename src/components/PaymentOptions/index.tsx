import * as S from './styles'

import Heading from 'components/Heading'
import Radio from 'components/Radio'
import { Add, ShoppingCart } from 'styled-icons/material-outlined'
import Button from 'components/Button'

export type PaymentCard = {
  img: string
  flag: string
  number: string
}

export type PaymentOptionsProps = {
  cards?: PaymentCard[]
  handlePayment: () => void
}

const PaymentOptions = ({ cards, handlePayment }: PaymentOptionsProps) => (
  <S.Wrapper>
    <Heading lineBottom color="black" size="small">
      Payment
    </Heading>

    <S.Body>
      <S.CartList>
        {cards?.map((card) => (
          <S.CartItem key={card.number}>
            <S.CardInfo>
              <img src={card.img} alt={card.flag} />
              {card.number}
            </S.CardInfo>
            <Radio
              name="credit-card"
              id={card.number}
              value={card.number}
              onCheck={() => ({})}
            />
          </S.CartItem>
        ))}

        <S.AddCard role="button">
          <Add size={14} /> Add a new credit card
        </S.AddCard>
      </S.CartList>
    </S.Body>

    <S.Footer>
      <Button as="a" fullWidth minimal>
        Continue shopping
      </Button>
      <Button fullWidth icon={<ShoppingCart />} onClick={handlePayment}>
        Buy now
      </Button>
    </S.Footer>
  </S.Wrapper>
)

export default PaymentOptions
