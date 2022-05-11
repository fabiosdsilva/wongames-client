import Container from 'components/Container'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import * as S from './styles'

const Home = () => (
  <S.Wrapper>
    <section>
      <Container>
        <Menu></Menu>
      </Container>

      <Container>
        <Footer></Footer>
      </Container>
    </section>
  </S.Wrapper>
)

export default Home
