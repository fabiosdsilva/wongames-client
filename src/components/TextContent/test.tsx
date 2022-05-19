import { render, screen } from '@testing-library/react'

import TextContent from '.'

describe('<TextContent />', () => {
  it('should render the heading', () => {
    const { container } = render(<TextContent />)
  })
})
