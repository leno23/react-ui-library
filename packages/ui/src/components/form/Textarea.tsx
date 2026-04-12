import { forwardRef, type TextareaHTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  showCount?: boolean
  autoSize?: boolean | { minRows?: number; maxRows?: number }
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { className, label, showCount = false, autoSize = false, rows = 4, maxLength, ...props },
  ref,
) {
  const minRows = typeof autoSize === 'object' ? autoSize.minRows : undefined
  const maxRows = typeof autoSize === 'object' ? autoSize.maxRows : undefined

  return (
    <div className="w-full">
      {label ? <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">{label}</label> : null}
      <textarea
        ref={ref}
        rows={minRows ?? rows}
        maxLength={maxLength}
        className={cn(
          'w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition',
          'focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20',
          'dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100',
          'disabled:cursor-not-allowed disabled:opacity-60',
          className,
        )}
        style={maxRows ? { maxHeight: `${maxRows * 1.5}em` } : undefined}
        {...props}
      />
      {showCount && maxLength ? (
        <div className="mt-1 text-right text-xs text-slate-400">
          {(props.value as string)?.length ?? 0} / {maxLength}
        </div>
      ) : null}
    </div>
  )
})
