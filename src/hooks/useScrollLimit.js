import { useEffect, useState } from 'react'

export default function useScrollLimit(limit) {
  const [reached, setReached] = useState(false)

  useEffect(() => {
    function onScroll() {
      const scrolled = window.scrollY > limit
      setReached(scrolled)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [limit])

  return reached
}
