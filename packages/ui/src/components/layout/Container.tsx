import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  fluid?: boolean
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(function Container(
  { className, fluid = false, ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn('w-full px-4 sm:px-6 lg:px-8', fluid ? 'max-w-full' : 'mx-auto max-w-7xl', className)}
      {...props}
    />
  )
})
