import { menuItems } from 'src/Routes'

const sideBarMap = (() => {
  const map = new Map()
  menuItems.forEach(({ path, withSideBar }) => {
    map.set(path, withSideBar)
  })

  return map
})()

export const pathWithSideBar = (pathname: string) =>
  sideBarMap.has(pathname) ? sideBarMap.get(pathname) : { withSideBar: false }
