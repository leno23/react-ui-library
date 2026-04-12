# Splitter 可调分栏

可拖拽调整大小的分栏面板，对齐 Ant Design 5.21+ Splitter。

## 示例

<LivePlayground :code="`
() => {
  return (
    <Splitter
      panels={[
        { content: <div style={{padding:'16px'}}>面板 A</div>, defaultSize: 40, min: 20 },
        { content: <div style={{padding:'16px'}}>面板 B</div>, defaultSize: 60, min: 20 },
      ]}
      style={{height:'200px'}}
    />
  )
}
`" />

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| panels | 面板配置 | `SplitterPanel[]` | - |
| direction | 分割方向 | `'horizontal' \| 'vertical'` | `'horizontal'` |
| onResize | 尺寸变化回调 | `(sizes: number[]) => void` | - |

### SplitterPanel

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 面板内容 | `ReactNode` | - |
| defaultSize | 默认大小（百分比） | `number` | `100/n` |
| min | 最小百分比 | `number` | - |
| max | 最大百分比 | `number` | - |
