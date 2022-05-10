import '../../../.jest/match-media-mock'

import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import BannerSlider from '.'

const items = [
  {
    image: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death 1',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    ribbon: 'Bestselling'
  },
  {
    image: 'https://source.unsplash.com/user/willianjusten/1042x582',
    title: 'Defy death 2',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
]

describe('<BannerSlider />', () => {
  it('verificar se aparece somente 1 slide na tela', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelector('.slick-vertical')).toBeInTheDocument()

    // verificar se tem realmente 2 slide ativos
    expect(container.querySelectorAll('.slick-slide')).toHaveLength(2)

    // verificar se o slide ativo está ativo mesmo
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)

    // verificar se está renderizando o texto do primeiro item na tela
    expect(screen.getByText(/defy death 1/i)).toBeInTheDocument()
    expect(screen.getByText(/defy death 2/i)).toBeInTheDocument()
  })
})
