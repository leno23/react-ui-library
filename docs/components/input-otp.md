# InputOTP 验证码输入

一次性密码/验证码输入框，适用于短信验证码、邮件验证码等场景。

## 示例

<LivePlayground :code="`
() => {
  return (
    <Space direction='vertical' size={12}>
      <InputOTP length={6} />
      <InputOTP length={4} size='lg' />
      <InputOTP length={6} mask />
    </Space>
  )
}
`" />

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| length | 输入框数量 | `number` | `6` |
| value | 当前值 | `string` | - |
| onChange | 值变化回调 | `(value: string) => void` | - |
| disabled | 禁用 | `boolean` | `false` |
| mask | 密码模式 | `boolean` | `false` |
| size | 尺寸 | `'sm' \| 'md' \| 'lg'` | `'md'` |
