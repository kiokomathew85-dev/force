import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('renders the Header with title', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('My Awesome Blog')
  })

  it('renders the About section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('About')
  })

  it('renders the Articles section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Articles')
  })

  it('renders all articles', () => {
    render(<App />)
    expect(screen.getByText('Getting Started with React')).toBeInTheDocument()
    expect(screen.getByText('The Future of Web Development')).toBeInTheDocument()
    expect(screen.getByText('Building Responsive Designs')).toBeInTheDocument()
  })
})