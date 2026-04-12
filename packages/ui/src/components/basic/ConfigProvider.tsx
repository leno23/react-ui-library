import { createContext, useContext, type ReactNode } from 'react'

export interface NovaConfig {
  locale?: 'zh-CN' | 'en-US'
  size?: 'sm' | 'md' | 'lg'
  prefixCls?: string
  componentDisabled?: boolean
}

const defaultConfig: NovaConfig = {
  locale: 'zh-CN',
  size: 'md',
  prefixCls: 'nova',
  componentDisabled: false,
}

const ConfigContext = createContext<NovaConfig>(defaultConfig)

export const useConfig = () => useContext(ConfigContext)

export interface ConfigProviderProps {
  children: ReactNode
  locale?: NovaConfig['locale']
  size?: NovaConfig['size']
  prefixCls?: string
  componentDisabled?: boolean
}

export function ConfigProvider({
  children,
  locale,
  size,
  prefixCls,
  componentDisabled,
}: ConfigProviderProps) {
  const parent = useConfig()

  const merged: NovaConfig = {
    locale: locale ?? parent.locale,
    size: size ?? parent.size,
    prefixCls: prefixCls ?? parent.prefixCls,
    componentDisabled: componentDisabled ?? parent.componentDisabled,
  }

  return <ConfigContext.Provider value={merged}>{children}</ConfigContext.Provider>
}
