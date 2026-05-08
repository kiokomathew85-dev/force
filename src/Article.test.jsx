import { render, screen } from '@testing-library/react'
import Article from '../Article'

describe('Article', () => {
  const mockArticle = {
    id: 1,
    title: 'Test Article',
    date: '2023-05-01',
    content: 'This is the article content.'
  }

  it('renders the article title', () => {
    render(<Article article={mockArticle} />)
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(mockArticle.title)
  })

  it('renders the article date', () => {
    render(<Article article={mockArticle} />)
    expect(screen.getByText(mockArticle.date)).toBeInTheDocument()
  })

  it('renders the article content', () => {
    render(<Article article={mockArticle} />)
    expect(screen.getByText(mockArticle.content)).toBeInTheDocument()
  })
})