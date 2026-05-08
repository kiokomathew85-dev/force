import { render, screen } from '@testing-library/react'
import About from '../About'

describe('About', () => {
  it('renders the about text', () => {
    const about = 'This is about me.'
    render(<About about={about} />)
    expect(screen.getByText(about)).toBeInTheDocument()
  })

  it('renders the About heading', () => {
    const about = 'This is about me.'
    render(<About about={about} />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('About')
  })
})