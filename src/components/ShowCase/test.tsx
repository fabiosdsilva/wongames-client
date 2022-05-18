import '../../../.jest/match-media-mock'
import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import ShowCase from '.'
import highlightMock from 'components/Highlight/mock'

const props = {
  title: 'Most Popular',
  highlight: highlightMock
}

describe('<ShowCase />', () => {
  it('verificar se está renderizando o heading', () => {
    renderWithTheme(<ShowCase {...props} />)

    expect(
      screen.getByRole('heading', { name: /Most Popular/i })
    ).toBeInTheDocument()

    // verificar se o highlight está sendo renderizado
    expect(screen.getByRole('heading', { name: highlightMock.title }))
  })
})
