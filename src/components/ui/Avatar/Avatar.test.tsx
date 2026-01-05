import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import Avatar from './Avatar'

describe('Avatar', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders with default props', () => {
    render(<Avatar name="John Doe" />)
    const avatar = screen.getByRole('img', { name: /avatar for john doe/i })
    expect(avatar).toBeInTheDocument()
    expect(avatar).toHaveClass('w-12') // default md size
    expect(avatar).toHaveClass('h-12')
  })

  it('displays the first letter of the name in uppercase', () => {
    render(<Avatar name="Alice" />)
    const avatar = screen.getByRole('img')
    expect(avatar).toHaveTextContent('A')
  })

  it('uppercases lowercase initials', () => {
    render(<Avatar name="john smith" />)
    const avatar = screen.getByRole('img')
    expect(avatar).toHaveTextContent('J')
  })

  it('renders with small size variant', () => {
    render(<Avatar name="Bob" size="sm" />)
    const avatar = screen.getByRole('img')
    expect(avatar).toHaveClass('w-8')
    expect(avatar).toHaveClass('h-8')
    expect(avatar).toHaveClass('text-xs')
  })

  it('renders with medium size variant', () => {
    render(<Avatar name="Charlie" size="md" />)
    const avatar = screen.getByRole('img')
    expect(avatar).toHaveClass('w-12')
    expect(avatar).toHaveClass('h-12')
    expect(avatar).toHaveClass('text-sm')
  })

  it('renders with large size variant', () => {
    render(<Avatar name="Diana" size="lg" />)
    const avatar = screen.getByRole('img')
    expect(avatar).toHaveClass('w-16')
    expect(avatar).toHaveClass('h-16')
    expect(avatar).toHaveClass('text-base')
  })

  it('applies custom className', () => {
    render(<Avatar name="Eve" className="custom-class" />)
    const avatar = screen.getByRole('img')
    expect(avatar).toHaveClass('custom-class')
  })

  it('has gradient background classes', () => {
    render(<Avatar name="Frank" />)
    const avatar = screen.getByRole('img')
    expect(avatar).toHaveClass('bg-gradient-to-br')
    expect(avatar).toHaveClass('from-primary')
    expect(avatar).toHaveClass('to-accent')
  })

  it('has rounded-full class for circular shape', () => {
    render(<Avatar name="Grace" />)
    const avatar = screen.getByRole('img')
    expect(avatar).toHaveClass('rounded-full')
  })

  it('has proper accessibility attributes', () => {
    render(<Avatar name="Hannah" />)
    const avatar = screen.getByRole('img', { name: /avatar for hannah/i })
    expect(avatar).toHaveAttribute('aria-label', 'Avatar for Hannah')
    expect(avatar).toHaveAttribute('role', 'img')
  })

  it('handles single character names', () => {
    render(<Avatar name="I" />)
    const avatar = screen.getByRole('img')
    expect(avatar).toHaveTextContent('I')
  })

  it('handles names with special characters', () => {
    render(<Avatar name="@Jack" />)
    const avatar = screen.getByRole('img')
    expect(avatar).toHaveTextContent('@')
  })

  it('handles names with leading/trailing spaces by trimming', () => {
    render(<Avatar name="  Karen  " />)
    const avatar = screen.getByRole('img')
    expect(avatar).toHaveTextContent('K')
  })
})
