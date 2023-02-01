import React from 'react'
import { create } from 'react-test-renderer'
import { MobileHeader } from 'src/components'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}))

describe('MobileHeader', () => {
  test('should render well', () => {
    const testRenderer = create(<MobileHeader />)
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })
})
