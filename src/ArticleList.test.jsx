import { render, screen } from '@testing-library/react'
import ArticleList from '../ArticleList'

describe('ArticleList', () => {
  const mockArticles = [
    {
      id: 1,
      title: 'Article 1',
      date: '2023-05-01',
      content: 'Content 1'
    },
    {
      id: 2,
      title: 'Article 2',
      date: '2023-05-02',
      content: 'Content 2'
    }
  ]

  it('renders the Articles heading', () => {
    render(<ArticleList articles={mockArticles} />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Articles')
  })

  it('renders all articles', () => {
    render(<ArticleList articles={mockArticles} />)
    expect(screen.getByText('Article 1')).toBeInTheDocument()
    expect(screen.getByText('Article 2')).toBeInTheDocument()
  })
})