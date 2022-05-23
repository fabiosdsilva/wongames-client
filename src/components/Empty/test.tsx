import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Empty, { EmptyProps } from '.'

const props: EmptyProps = {
  title: 'A simple title',
  description: 'A simple description'
}

describe('<Empty />', () => {
  it('verificar se está renderizando a imagem, title e descrição', () => {
    renderWithTheme(<Empty {...props} />)

    expect(
      screen.getByRole('img', { name: /a gamer in couch playing videogamer/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /a simple title/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/a simple description/i)).toBeInTheDocument()
  })

  it('verificar se está o link', () => {
    renderWithTheme(<Empty {...props} hasLink />)

    expect(
      screen.getByRole('link', { name: /go to back home/i })
    ).toHaveAttribute('href', '/')
  })

  it('verificar se está o link está destivado', () => {
    renderWithTheme(<Empty {...props} />)

    expect(
      screen.queryByRole('link', { name: /go to back home/i })
    ).not.toBeInTheDocument()
  })
})
