import React from 'react'
import { create } from 'react-test-renderer'
import { Slider } from 'src/components'

describe('Slider', () => {
  const props = {
    setValue: jest.fn(),
    value: 3,
    layout: 'desktop',
  }

  test('should render well under desktop layout', () => {
    const testRenderer = create(<Slider {...props} />)
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })

  test.skip('should render well under mobile layout', () => {
    props.layout = 'mobile'
    const testRenderer = create(<Slider {...props} />)
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })
})
