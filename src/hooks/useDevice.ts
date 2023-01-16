import { useEffect, useCallback } from 'react'
import { threshold } from 'src/settings'

export const useDevice = ({
  setMobile,
}: {
  setMobile: (isMobile: boolean) => void
}) => {
  const handleWindowSizeChange = useCallback(() => {
    setMobile(window.innerWidth <= threshold.mobile)
  }, [setMobile])

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [handleWindowSizeChange])

  return {}
}
