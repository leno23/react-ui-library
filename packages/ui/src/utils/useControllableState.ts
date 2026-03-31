import { useCallback, useState } from 'react'

export interface UseControllableStateOptions<T> {
  value?: T
  defaultValue: T
  onChange?: (value: T) => void
}

export function useControllableState<T>(options: UseControllableStateOptions<T>) {
  const { value, defaultValue, onChange } = options
  const [internalValue, setInternalValue] = useState<T>(defaultValue)

  const isControlled = value !== undefined
  const state = isControlled ? (value as T) : internalValue

  const setState = useCallback(
    (nextValue: T) => {
      if (!isControlled) {
        setInternalValue(nextValue)
      }
      onChange?.(nextValue)
    },
    [isControlled, onChange],
  )

  return [state, setState] as const
}
