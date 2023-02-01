import React from 'react'
import { create } from 'react-test-renderer'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { MobileHeader } from 'src/components'

const mockUseNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}))

describe('MobileHeader', () => {
  test('should render well', () => {
    const testRenderer = create(<MobileHeader />)
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })

  test('redirect should work well', async () => {
    render(<MobileHeader />)
    fireEvent.click(screen.getByTestId('KeyboardArrowLeftIcon'))
    await waitFor(() => {
      expect(mockUseNavigate).toBeCalled()
    })
  })
})
