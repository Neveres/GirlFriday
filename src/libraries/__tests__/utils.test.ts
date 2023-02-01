import { menuItems } from 'src/Routes'
import { pathWithSideBar } from '../utils'

describe('utils testing', () => {
  test('pathWithSideBar should work well', () => {
    const expectedResult = [true, true, false]
    for (let i = 0, maxI = menuItems.length; i < maxI; i++) {
      const { path } = menuItems[i]
      expect(pathWithSideBar(path)).toBe(expectedResult[i])
    }
  })
})