import { useEffect, useRef, type RefObject } from 'react'

export function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T | null>,
  handler: (event: MouseEvent) => void,
  enabled = true,
) {
  const savedHandler = useRef(handler)
  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    if (!enabled || typeof document === 'undefined') {
      return
    }

    const listener = (event: MouseEvent) => {
      const target = event.target as Node | null
      if (!target || !ref.current || ref.current.contains(target)) {
        return
      }
      savedHandler.current(event)
    }

    document.addEventListener('mousedown', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
    }
  }, [enabled, ref])
}
