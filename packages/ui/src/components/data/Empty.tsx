import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../utils/cn'

export interface EmptyProps extends HTMLAttributes<HTMLDivElement> {
  description?: ReactNode
  image?: ReactNode
}

export const Empty = forwardRef<HTMLDivElement, EmptyProps>(function Empty(
  { className, description = 'No Data', image, children, ...props },
  ref,
) {
  return (
    <div ref={ref} className={cn('flex flex-col items-center justify-center rounded-lg border border-dashed border-slate-300 p-6 text-center dark:border-slate-700', className)} {...props}>
      <div className="mb-2 text-3xl">{image ?? '📭'}</div>
      <p className="text-sm text-slate-500 dark:text-slate-400">{description}</p>
      {children ? <div className="mt-3">{children}</div> : null}
    </div>
  )
})
