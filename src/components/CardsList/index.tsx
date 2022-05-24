import * as S from './styles'

import Heading from 'components/Heading'
import { PaymentCard } from 'components/PaymentOptions'

export type CardsListProps = {
  cards?: PaymentCard[]
}

const CardsList = ({ cards }: CardsListProps) => (
  <>
    <Heading lineBottom color="black" size="small">
      My cards
    </Heading>

    {cards?.map((card) => (
      <S.Card key={card.flag}>
        <img src={card.img} alt={card.flag} />
        {card.number}
      </S.Card>
    ))}
  </>
)

export default CardsList
