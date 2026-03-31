import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../utils/cn'

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: ReactNode
  extra?: ReactNode
}

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { className, title, extra, children, ...props },
  ref,
) {
  return (
    <section
      ref={ref}
      className={cn('rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900', className)}
      {...props}
    >
      {(title || extra) && (
        <header className="mb-3 flex items-center justify-between">
          <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
          {extra}
        </header>
      )}
      <div>{children}</div>
    </section>
  )
})
