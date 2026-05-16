import { forwardRef, type HTMLAttributes, type KeyboardEvent, type ReactNode, useEffect, useId, useRef, useState } from 'react'
import { cn } from '../../utils/cn'
import { useClickOutside } from '../../hooks/useClickOutside'

export interface DropdownOption {
  key: string
  label: ReactNode
  disabled?: boolean
}

export interface DropdownProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  trigger: ReactNode
  options: DropdownOption[]
  onChange?: (key: string) => void
  open?: boolean
  defaultOpen?: boolean
  onOpen?: () => void
  onClose?: () => void
}

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(function Dropdown(
  {
    className,
    trigger,
    options,
    onChange,
    open: controlledOpen,
    defaultOpen = false,
    onOpen,
    onClose,
    ...props
  },
  ref,
) {
  const [innerOpen, setInnerOpen] = useState(defaultOpen)
  const [activeIndex, setActiveIndex] = useState(-1)
  const rootRef = useRef<HTMLDivElement | null>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const menuId = useId()
  const open = controlledOpen ?? innerOpen
  const enabledOptions = options.filter((item) => !item.disabled)

  useClickOutside(rootRef, () => setOpen(false), open)

  const setOpen = (next: boolean) => {
    if (controlledOpen === undefined) {
      setInnerOpen(next)
    }
    if (next) {
      onOpen?.()
    } else {
      onClose?.()
    }
  }

  const setCombinedRef = (node: HTMLDivElement | null) => {
    rootRef.current = node
    if (typeof ref === 'function') {
      ref(node)
      return
    }
    if (ref) {
      ;(ref as { current: HTMLDivElement | null }).current = node
    }
  }

  useEffect(() => {
    if (!open) {
      setActiveIndex(-1)
      return
    }
    setActiveIndex(0)
  }, [open])

  const handleTriggerKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      setOpen(true)
    }
  }

  const handleMenuKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    if (event.key === 'Escape') {
      setOpen(false)
      triggerRef.current?.focus()
      return
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActiveIndex((prev) => (prev + 1) % enabledOptions.length)
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActiveIndex((prev) => (prev - 1 + enabledOptions.length) % enabledOptions.length)
    }
  }

  return (
    <div ref={setCombinedRef} className={cn('relative inline-flex', className)} {...props}>
      <button ref={triggerRef} type="button" onClick={() => setOpen(!open)} onKeyDown={handleTriggerKeyDown} aria-expanded={open} aria-haspopup="menu" aria-controls={menuId} className="inline-flex">
        {trigger}
      </button>
      {open ? (
        <ul id={menuId} role="menu" onKeyDown={handleMenuKeyDown} className="absolute right-0 top-full z-40 mt-2 min-w-40 rounded-lg border border-slate-200 bg-white p-1 shadow-lg dark:border-slate-700 dark:bg-slate-900">
          {options.map((item) => (
            <li key={item.key} role="none">
              <button
                type="button"
                role="menuitem"
                tabIndex={enabledOptions[activeIndex]?.key === item.key ? 0 : -1}
                disabled={item.disabled}
                onClick={() => {
                  onChange?.(item.key)
                  setOpen(false)
                }}
                className="nova-focus-ring w-full rounded px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-100 disabled:opacity-50 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
})
