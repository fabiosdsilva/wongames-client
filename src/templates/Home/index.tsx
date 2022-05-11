import Container from 'components/Container'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import Menu from 'components/Menu'
import * as S from './styles'

const Home = () => (
  <S.Wrapper>
    <section>
      <Container>
        <Menu></Menu>
      </Container>

      <Container>
        <Heading color="black" lineLeft lineColor="secondary">
          News
        </Heading>
      </Container>

      <Container>
        <Heading color="white" lineLeft lineColor="secondary">
          Most popular
        </Heading>
      </Container>

      <Container>
        <Heading color="white" lineLeft lineColor="secondary">
          Upcoming
        </Heading>
      </Container>

      <Container>
        <Heading color="white" lineLeft lineColor="secondary">
          Free games
        </Heading>
      </Container>

      <Container>
        <Footer></Footer>
      </Container>
    </section>
  </S.Wrapper>
)

export default Home
