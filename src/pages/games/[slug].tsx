import Game, { GameTamPlateProps } from 'templates/Game'

export default function Index(props: GameTamPlateProps) {
  return <Game {...props} />
}

// cirando a rotda do jogo a partir do slug
// vou ter que fazer uma busca na api
// verificar se o jogo existe
export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'cyber' } }],
    fallback: false
  }
}

// vou pegar os dados dos jogos
// e jogar no template para renderizar
export async function getStaticProps() {
  return {
    props: {
      cover: '/img/red-dead-img.jpg'
    }
  }
}
