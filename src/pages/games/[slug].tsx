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
      cover:
        'https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg?t=1649065890',
      gameInfo: {
        title: 'Cyberpunk 2077',
        description:
          'Cyberpunk 2077 é um RPG de ação e aventura em mundo aberto que se passa em Night City, uma megalópole perigosa onde todos são obcecados por poder, glamour e alterações corporais.',
        price: '199,90'
      }
    }
  }
}
