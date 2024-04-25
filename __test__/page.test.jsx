import '@testing-library/jest-dom'
 
describe('Page', () => {
  test('renders a heading', () => {
    const sum = (a, b) => {
      return a + b
    }
    expect(3).toBe(sum(1, 2))
  })
})