import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react'

interface ScrollValue {
  innerWidth: number
}

export const SizeContext = React.createContext<ScrollValue>({
  innerWidth: 0,
})

const SizeObserver: React.FC<PropsWithChildren> = ({ children }) => {
  const [innerWidth, setInnerWidth] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth : 0,
  )
  const handleResize = useCallback(() => {
    setInnerWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleResize, { passive: true })

    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])

  return (
    <SizeContext.Provider value={{ innerWidth }}>
      {children}
    </SizeContext.Provider>
  )
}

export default SizeObserver
