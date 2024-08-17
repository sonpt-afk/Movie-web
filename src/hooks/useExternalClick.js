import { MutableRefObject, useEffect } from 'react'

export default function useExternalClick(ref, callback) {
  const onClick = (event) => {
    if (!ref?.current?.contains(event.target)) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  })
}
