
import { render, screen } from '@testing-library/react'
import Page from '../src/app/page'
 
describe('Page', () => {
  test('renders a heading', () => {
    render(<Page />)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument()
  })

  test('Get text', () => {
    const { getByText } = render(<Page />)

    expect(getByText('Hello, Next.js!')).toBeInTheDocument()
  })
})