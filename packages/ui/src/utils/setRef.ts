import type { Ref } from 'react'

/** Assigns a value to a ref object or invokes a ref callback (React 19-safe). */
export function setRef<T>(ref: Ref<T> | undefined, value: T | null): void {
  if (!ref) return
  if (typeof ref === 'function') {
    ref(value)
  } else {
    ;(ref as { current: T | null }).current = value
  }
}
