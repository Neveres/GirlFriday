import React from 'react'
import { create } from 'react-test-renderer'
import { LoadingProgress } from 'src/components'

describe('LoadingProgress', () => {
  test('should render well', () => {
    const testRenderer = create(<LoadingProgress />)
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })
})
