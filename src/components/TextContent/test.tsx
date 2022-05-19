import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import TextContent, { TextContentProps } from '.'

const props: TextContentProps = {
  title: 'Description',
  content: `<h1>Content</h1>`
}

describe('<TextContent />', () => {
  it('verificar se o contente e title estão sendo renderizados', () => {
    renderWithTheme(<TextContent {...props} />)

    expect(
      screen.getByRole('heading', { name: /description/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /content/i })
    ).toBeInTheDocument()
  })

  it('verificar se renderiza sem o title', () => {
    renderWithTheme(<TextContent content={props.content} />)

    expect(
      screen.queryByRole('heading', { name: /description/i })
    ).not.toBeInTheDocument()
  })

  it('renderizar title e content', () => {
    renderWithTheme(<TextContent {...props} />)

    const wrapper = screen.getByRole('heading', {
      name: /description/i
    }).parentElement

    expect(wrapper).toHaveStyle({
      color: '#FAFAFA'
    })

    expect(wrapper).toHaveStyleRule('color', '#030517', {
      media: '(min-width: 768px)'
    })
  })
})
