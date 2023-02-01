import React from 'react'
import { create } from 'react-test-renderer'

import AppBody from '../AppBody'

describe('AppBody', () => {
  test('should render well with required props', () => {
    const props = {
      pathname: '',
      children: <>test</>,
    }
    const testRenderer = create(<AppBody {...props} />)
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })
})
