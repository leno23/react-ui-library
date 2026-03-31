# 基础组件

<LivePlayground :code="`
() => {
  return (
    <Space>
      <Button>Primary</Button>
      <Button variant='outline'>Outline</Button>
      <Button variant='ghost' loading>Loading</Button>
      <Title level={3}>Title</Title>
      <Text>Text</Text>
    </Space>
  )
}
`" />

## API

| 组件 | 关键属性 |
| --- | --- |
| Button | `variant`, `size`, `loading`, `color`, `disabled` |
| Icon | `name`, `size` |
| Title/Text/Paragraph | `className`, `children` |
