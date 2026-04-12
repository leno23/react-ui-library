# AvatarGroup 头像组

头像组合展示，用于展示一组用户头像。

## 示例

<LivePlayground :code="`
() => {
  return (
    <Space direction='vertical' size={12}>
      <AvatarGroup>
        <Avatar name='Alice' />
        <Avatar name='Bob' />
        <Avatar name='Charlie' />
      </AvatarGroup>
      <AvatarGroup max={3}>
        <Avatar name='A' />
        <Avatar name='B' />
        <Avatar name='C' />
        <Avatar name='D' />
        <Avatar name='E' />
      </AvatarGroup>
    </Space>
  )
}
`" />

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| max | 最大显示数，超出显示 +N | `number` | - |
| size | 头像尺寸 | `'sm' \| 'md' \| 'lg'` | `'md'` |
