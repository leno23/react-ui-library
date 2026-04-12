# CountDown 倒计时

倒计时组件，对齐 Ant Design Statistic.Countdown。

## 示例

<LivePlayground :code="`
() => {
  const deadline = Date.now() + 1000 * 60 * 60 * 2
  return (
    <Space size={24}>
      <CountDown title='活动倒计时' value={deadline} />
      <CountDown title='精简格式' value={deadline} format='mm:ss' />
    </Space>
  )
}
`" />

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 截止时间戳（ms） | `number` | - |
| format | 格式化模板 | `string` | `'HH:mm:ss'` |
| title | 标题 | `string` | - |
| prefix | 前缀 | `string` | - |
| suffix | 后缀 | `string` | - |
| onFinish | 倒计时结束回调 | `() => void` | - |
