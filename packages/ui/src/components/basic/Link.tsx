import { forwardRef, type AnchorHTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  disabled?: boolean
  underline?: boolean
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { className, disabled = false, underline = true, children, onClick, ...props },
  ref,
) {
  return (
    <a
      ref={ref}
      className={cn(
        'inline-flex items-center gap-1 text-sm text-brand-500 transition hover:text-brand-600 dark:text-brand-400 dark:hover:text-brand-300',
        underline && 'hover:underline',
        disabled && 'pointer-events-none cursor-not-allowed opacity-50',
        className,
      )}
      onClick={disabled ? (e) => e.preventDefault() : onClick}
      aria-disabled={disabled || undefined}
      {...props}
    >
      {children}
    </a>
  )
})
