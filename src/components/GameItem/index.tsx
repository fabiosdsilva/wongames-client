import * as S from './styles'

import { Download } from '@styled-icons/heroicons-solid/Download'

export type PaymentInfoProps = {
  img: string
  flag: string
  number: string
  published: string
}

export type GameItemProps = {
  img: string
  title: string
  price: string
  downloadLink?: string
  paymentInfo?: PaymentInfoProps
}

const GameItem = ({
  img,
  title,
  price,
  downloadLink,
  paymentInfo
}: GameItemProps) => (
  <S.Wrapper>
    <S.ImageBox>
      <img src={img} alt={title} />
    </S.ImageBox>

    <S.Content>
      <S.Title>
        {title}
        {!!downloadLink && (
          <S.DownloadLink
            href={downloadLink}
            target="_blank"
            aria-label={`Get ${title} here`}
          >
            <Download size={22} />
          </S.DownloadLink>
        )}
      </S.Title>
      <S.Price>{price}</S.Price>
    </S.Content>
    {paymentInfo && (
      <S.PaymentContent>
        <p>{paymentInfo.published}</p>
        <S.CardInfo>
          <span>{paymentInfo.number}</span>
          <img src={paymentInfo.img} alt={paymentInfo.flag} />
        </S.CardInfo>
      </S.PaymentContent>
    )}
  </S.Wrapper>
)

export default GameItem
