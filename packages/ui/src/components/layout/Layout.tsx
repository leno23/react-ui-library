import { forwardRef, createContext, useContext, useState, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface LayoutContextValue {
  siderCollapsed: boolean
  setSiderCollapsed: (v: boolean) => void
}

const LayoutContext = createContext<LayoutContextValue>({ siderCollapsed: false, setSiderCollapsed: () => {} })
export const useLayout = () => useContext(LayoutContext)

export interface LayoutProps extends HTMLAttributes<HTMLElement> {
  hasSider?: boolean
}

export const Layout = forwardRef<HTMLElement, LayoutProps>(function Layout(
  { className, hasSider, children, ...props },
  ref,
) {
  const [siderCollapsed, setSiderCollapsed] = useState(false)

  return (
    <LayoutContext.Provider value={{ siderCollapsed, setSiderCollapsed }}>
      <section
        ref={ref}
        className={cn(
          'flex min-h-0',
          hasSider ? 'flex-row' : 'flex-col',
          className,
        )}
        {...props}
      >
        {children}
      </section>
    </LayoutContext.Provider>
  )
})

export type LayoutHeaderProps = HTMLAttributes<HTMLElement>

export const LayoutHeader = forwardRef<HTMLElement, LayoutHeaderProps>(function LayoutHeader(
  { className, children, ...props },
  ref,
) {
  return (
    <header
      ref={ref}
      className={cn(
        'flex h-16 shrink-0 items-center border-b border-slate-200 bg-white px-6 dark:border-slate-700 dark:bg-slate-900',
        className,
      )}
      {...props}
    >
      {children}
    </header>
  )
})

export interface LayoutSiderProps extends HTMLAttributes<HTMLElement> {
  width?: number
  collapsedWidth?: number
  collapsed?: boolean
  defaultCollapsed?: boolean
  onCollapse?: (collapsed: boolean) => void
  collapsible?: boolean
  trigger?: ReactNode
}

export const LayoutSider = forwardRef<HTMLElement, LayoutSiderProps>(function LayoutSider(
  {
    className,
    width = 200,
    collapsedWidth = 64,
    collapsed: controlledCollapsed,
    defaultCollapsed = false,
    onCollapse,
    collapsible = false,
    trigger,
    children,
    ...props
  },
  ref,
) {
  const ctx = useLayout()
  const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed)
  const isControlled = controlledCollapsed !== undefined
  const isCollapsed = isControlled ? controlledCollapsed : internalCollapsed
  const currentWidth = isCollapsed ? collapsedWidth : width

  const toggle = () => {
    const next = !isCollapsed
    if (!isControlled) setInternalCollapsed(next)
    ctx.setSiderCollapsed(next)
    onCollapse?.(next)
  }

  return (
    <aside
      ref={ref}
      className={cn(
        'relative shrink-0 overflow-hidden border-r border-slate-200 bg-slate-50 transition-all duration-300 dark:border-slate-700 dark:bg-slate-800',
        className,
      )}
      style={{ width: currentWidth }}
      {...props}
    >
      <div className="h-full overflow-y-auto">{children}</div>
      {collapsible ? (
        <button
          type="button"
          onClick={toggle}
          className="absolute bottom-0 left-0 flex w-full items-center justify-center border-t border-slate-200 bg-white py-2 text-xs text-slate-500 hover:text-brand-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400"
        >
          {trigger ?? (isCollapsed ? '›' : '‹')}
        </button>
      ) : null}
    </aside>
  )
})

export type LayoutContentProps = HTMLAttributes<HTMLElement>

export const LayoutContent = forwardRef<HTMLElement, LayoutContentProps>(function LayoutContent(
  { className, children, ...props },
  ref,
) {
  return (
    <main
      ref={ref}
      className={cn('min-h-0 flex-1 overflow-auto', className)}
      {...props}
    >
      {children}
    </main>
  )
})

export type LayoutFooterProps = HTMLAttributes<HTMLElement>

export const LayoutFooter = forwardRef<HTMLElement, LayoutFooterProps>(function LayoutFooter(
  { className, children, ...props },
  ref,
) {
  return (
    <footer
      ref={ref}
      className={cn(
        'flex shrink-0 items-center border-t border-slate-200 bg-white px-6 py-4 text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400',
        className,
      )}
      {...props}
    >
      {children}
    </footer>
  )
})
