# Link 链接

文字超链接组件。

## 示例

<LivePlayground :code="`
() => {
  return (
    <Space>
      <Link href='#'>默认链接</Link>
      <Link href='#' underline={false}>无下划线</Link>
      <Link disabled>禁用链接</Link>
    </Space>
  )
}
`" />

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| href | 链接地址 | `string` | - |
| disabled | 禁用 | `boolean` | `false` |
| underline | 悬停下划线 | `boolean` | `true` |
| target | 打开方式 | `string` | - |
