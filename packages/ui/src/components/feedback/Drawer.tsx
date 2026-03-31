import { forwardRef, type HTMLAttributes } from 'react'
import { Portal } from '../../utils/portal'
import { cn } from '../../utils/cn'

export interface DrawerProps extends HTMLAttributes<HTMLDivElement> {
  open?: boolean
  onClose?: () => void
  placement?: 'left' | 'right'
  title?: string
}

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(function Drawer(
  { className, open = false, onClose, placement = 'right', title, children, ...props },
  ref,
) {
  if (!open) {
    return null
  }

  return (
    <Portal>
      <div className="fixed inset-0 z-50 bg-black/40" onClick={onClose}>
        <aside
          ref={ref}
          role="dialog"
          aria-modal="true"
          className={cn(
            'absolute top-0 h-full w-80 bg-white p-5 shadow-2xl dark:bg-slate-900',
            placement === 'left' ? 'left-0' : 'right-0',
            className,
          )}
          onClick={(event) => event.stopPropagation()}
          {...props}
        >
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
            <button onClick={onClose} className="rounded p-1 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Close drawer">
              ✕
            </button>
          </div>
          {children}
        </aside>
      </div>
    </Portal>
  )
})
