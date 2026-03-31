import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical'
}

export const Divider = forwardRef<HTMLHRElement, DividerProps>(function Divider(
  { className, orientation = 'horizontal', ...props },
  ref,
) {
  return (
    <hr
      ref={ref}
      role="separator"
      aria-orientation={orientation}
      className={cn(
        'border-0 bg-slate-200 dark:bg-slate-700',
        orientation === 'horizontal' ? 'my-3 h-px w-full' : 'mx-2 h-full min-h-4 w-px',
        className,
      )}
      {...props}
    />
  )
})
