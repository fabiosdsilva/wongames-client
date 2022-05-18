import * as S from './styles'

import GameCardSlider from 'components/GameCardSlider'
import Heading from 'components/Heading'
import Highlight, { HighlightProps } from 'components/Highlight'
import { GameCardProps } from 'components/GameCard'

export type ShowCaseProps = {
  title?: string
  highlight?: HighlightProps
  games?: GameCardProps[]
}

const ShowCase = ({ title, highlight, games }: ShowCaseProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading color="white" lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}

    {!!highlight && <Highlight {...highlight} />}

    {!!games && <GameCardSlider items={games} />}
  </S.Wrapper>
)

export default ShowCase
