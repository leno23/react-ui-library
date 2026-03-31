import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../utils/cn'
import type { ComponentSize, ComponentVariant } from '../../types/common'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ComponentSize
  variant?: ComponentVariant
  color?: 'primary' | 'neutral' | 'danger'
  loading?: boolean
  icon?: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    className,
    size = 'md',
    variant = 'solid',
    color = 'primary',
    loading = false,
    icon,
    disabled,
    children,
    ...props
  },
  ref,
) {
  const isDisabled = disabled || loading

  return (
    <button
      ref={ref}
      className={cn(
        'nova-focus-ring inline-flex items-center justify-center gap-2 rounded-md border font-medium transition disabled:cursor-not-allowed disabled:opacity-60',
        {
          'h-8 px-3 text-sm': size === 'sm',
          'h-10 px-4 text-sm': size === 'md',
          'h-11 px-5 text-base': size === 'lg',
          'border-transparent bg-brand-500 text-white hover:bg-brand-600': variant === 'solid' && color === 'primary',
          'border-slate-300 bg-white text-slate-800 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800':
            variant === 'solid' && color === 'neutral',
          'border-transparent bg-red-600 text-white hover:bg-red-700': variant === 'solid' && color === 'danger',
          'border-brand-500 text-brand-600 hover:bg-brand-50 dark:hover:bg-brand-950/30': variant === 'outline' && color === 'primary',
          'border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800':
            variant === 'outline' && color === 'neutral',
          'border-red-500 text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30': variant === 'outline' && color === 'danger',
          'border-transparent bg-transparent text-brand-600 hover:bg-brand-50 dark:hover:bg-brand-950/30':
            variant === 'ghost' && color === 'primary',
          'border-transparent bg-transparent text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800':
            variant === 'ghost' && color === 'neutral',
          'border-transparent bg-transparent text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30':
            variant === 'ghost' && color === 'danger',
        },
        className,
      )}
      disabled={isDisabled}
      aria-busy={loading}
      {...props}
    >
      {loading ? <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent" /> : icon}
      {children}
    </button>
  )
})
