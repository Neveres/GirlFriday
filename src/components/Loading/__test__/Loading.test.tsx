import React from 'react'
import { create } from 'react-test-renderer'
import { Loading } from 'src/components'

describe('Loading', () => {
  test('should render well', () => {
    const testRenderer = create(<Loading />)
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })
})
