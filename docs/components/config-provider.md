# ConfigProvider 全局配置

为组件提供统一的全局化配置，对齐 Ant Design ConfigProvider。

## 示例

<LivePlayground :code="`
() => {
  return (
    <ConfigProvider locale='zh-CN' size='lg'>
      <Space>
        <Button>大尺寸按钮</Button>
        <Input placeholder='大尺寸输入框' />
      </Space>
    </ConfigProvider>
  )
}
`" />

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| locale | 语言 | `'zh-CN' \| 'en-US'` | `'zh-CN'` |
| size | 全局尺寸 | `'sm' \| 'md' \| 'lg'` | `'md'` |
| prefixCls | 样式前缀 | `string` | `'nova'` |
| componentDisabled | 全局禁用 | `boolean` | `false` |
