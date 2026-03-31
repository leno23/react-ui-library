import type { CSSProperties, ReactNode } from 'react'

export type ComponentSize = 'sm' | 'md' | 'lg'
export type ComponentVariant = 'solid' | 'outline' | 'ghost'
export type ComponentStatus = 'default' | 'success' | 'warning' | 'danger'

export interface BaseComponentProps {
  className?: string
  style?: CSSProperties
  children?: ReactNode
  unstyled?: boolean
}

export interface SlotClassNames {
  root?: string
  label?: string
  input?: string
  prefix?: string
  suffix?: string
  content?: string
  header?: string
  body?: string
  footer?: string
  overlay?: string
}

export type Key = string | number
