# Textarea 文本域

多行文本输入框。

## 示例

<LivePlayground :code="`
() => {
  return (
    <Space direction='vertical' size={8}>
      <Textarea label='描述' placeholder='请输入描述' rows={3} />
      <Textarea placeholder='带字数统计' showCount maxLength={200} />
      <Textarea placeholder='禁用' disabled />
    </Space>
  )
}
`" />

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label | 标签 | `string` | - |
| placeholder | 占位文本 | `string` | - |
| rows | 行数 | `number` | `4` |
| maxLength | 最大字符数 | `number` | - |
| showCount | 显示计数 | `boolean` | `false` |
| autoSize | 自动高度 | `boolean \| { minRows?: number; maxRows?: number }` | `false` |
| disabled | 禁用 | `boolean` | `false` |
