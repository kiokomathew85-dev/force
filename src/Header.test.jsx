import { render, screen } from '@testing-library/react'
import Header from '../Header'

describe('Header', () => {
  it('renders the title', () => {
    const title = 'My Blog Title'
    render(<Header title={title} />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(title)
  })
})