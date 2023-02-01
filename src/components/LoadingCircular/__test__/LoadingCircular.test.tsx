import React from 'react'
import { create } from 'react-test-renderer'
import { LoadingCircular } from 'src/components'

describe('LoadingCircular', () => {
  test('should render well', () => {
    const testRenderer = create(<LoadingCircular />)
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })
})
