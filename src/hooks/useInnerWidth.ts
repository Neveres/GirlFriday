import { useEffect, useCallback } from 'react'
import { threshold } from 'src/settings'

export const useInnerWidth = ({
  setMobile,
  setSideBar,
}: {
  setMobile: (isMobile: boolean) => void
  setSideBar: (showSideBar: boolean) => void
}) => {
  const handleWindowSizeChange = useCallback(() => {
    setMobile(window.innerWidth <= threshold.mobile)
    setSideBar(window.innerWidth >= threshold.sideBar)
  }, [setMobile, setSideBar])

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [handleWindowSizeChange])
}
