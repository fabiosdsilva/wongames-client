import Checkbox from 'components/Checkbox'
import Heading from 'components/Heading'
import Radio from 'components/Radio'
import * as S from './styles'

const ExploreSidebar = () => (
  <S.Wrapper>
    <Heading lineBottom lineColor="secondary" size="small">
      Price
    </Heading>
    <Checkbox name="price" label="Under $50" labelColor="white" />

    <Heading lineBottom lineColor="secondary" size="small">
      Sort by
    </Heading>
    <Radio name="high to low" label="High to low"></Radio>

    <Heading lineBottom lineColor="secondary" size="small">
      System
    </Heading>
    <Checkbox name="system" label="Windwos" labelColor="white" />

    <Heading lineBottom lineColor="secondary" size="small">
      Genre
    </Heading>
    <Checkbox name="genre" label="Action" labelColor="white" />
  </S.Wrapper>
)

export default ExploreSidebar
