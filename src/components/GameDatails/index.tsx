import Heading from 'components/Heading'
import * as S from './styles'

import { Windows, Linux, Apple } from '@styled-icons/fa-brands'

type Platforms = 'windows' | 'linux' | 'mac'

type Rating = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18'

export type GameDatailsProps = {
  developer: string
  releaseDate: string
  editor: string
  rating: string
  genres: string[]
  platforms: Platforms[]
}

const platformsIcons = {
  windows: <Windows size={18} title="Windows"></Windows>,
  linux: <Linux size={18} title="Linux"></Linux>,
  mac: <Apple size={18} title="Mac"></Apple>
}

const GameDatails = ({
  developer,
  platforms,
  releaseDate,
  editor,
  genres,
  rating
}: GameDatailsProps) => (
  <S.Wrapper>
    <Heading lineLeft lineColor="secondary">
      Game Details
    </Heading>
    <S.Content>
      <S.Block>
        <S.Title>Developer</S.Title>
        <S.Description>{developer}</S.Description>
      </S.Block>

      <S.Block>
        <S.Title>Release date</S.Title>
        <S.Description>
          {new Intl.DateTimeFormat('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          }).format(new Date(releaseDate))}
        </S.Description>
      </S.Block>

      <S.Block>
        <S.Title>Platforms</S.Title>
        <S.IconWrapper>
          {platforms.map((icon: Platforms) => (
            <S.Icon key={icon}>{platformsIcons[icon]}</S.Icon>
          ))}
        </S.IconWrapper>
      </S.Block>

      <S.Block>
        <S.Title>Editor</S.Title>
        <S.Description>{editor}</S.Description>
      </S.Block>

      <S.Block>
        <S.Title>Rating</S.Title>
        <S.Description>
          {rating === 'BR0' ? 'FREE' : `${rating.replace('BR', '')}+`}
        </S.Description>
      </S.Block>

      <S.Block>
        <S.Title>Genre</S.Title>
        <S.Description>{genres}</S.Description>
      </S.Block>
    </S.Content>
  </S.Wrapper>
)

export default GameDatails
