import Heading from 'components/Heading'
import * as S from './styles'

import { Windows, Linux, Apple } from '@styled-icons/fa-brands'

type Platforms = 'windows' | 'linux' | 'mac'

export type GameDatailsProps = {
  platforms: Platforms[]
}

const platformsIcons = {
  windows: <Windows size={18} title="Windows" color="white"></Windows>,
  linux: <Linux size={18} title="Linux" color="white"></Linux>,
  mac: <Apple size={18} title="Mac" color="white"></Apple>
}

const GameDatails = ({ platforms }: GameDatailsProps) => (
  <S.Wrapper>
    <Heading lineLeft lineColor="secondary">
      Game Details
    </Heading>
    <S.Content>
      <S.Block>
        <S.Title>Developer</S.Title>
        <S.Description>Gearbox Software</S.Description>
      </S.Block>

      <S.Block>
        <S.Title>Release date</S.Title>
        <S.Description>November 16, 2019</S.Description>
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
        <S.Description>2k</S.Description>
      </S.Block>

      <S.Block>
        <S.Title>Rating</S.Title>
        <S.Description>18+</S.Description>
      </S.Block>

      <S.Block>
        <S.Title>Genre</S.Title>
        <S.Description>Action / Adventure</S.Description>
      </S.Block>
    </S.Content>
  </S.Wrapper>
)

export default GameDatails
