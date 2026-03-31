# 反馈组件

<LivePlayground :code="`
() => {
  return (
    <Space>
      <Tooltip content='Tooltip text'><Button>Tooltip</Button></Tooltip>
      <Popover trigger={<Button variant='outline'>Popover</Button>} content='Popover content' />
      <Loading text='Loading data...' />
    </Space>
  )
}
`" />

## API

| 组件 | 关键属性 |
| --- | --- |
| Modal | `open`, `onClose`, `title` |
| Drawer | `open`, `onClose`, `placement`, `title` |
| Toast/Message | `open`, `duration`, `status`, `onClose` |
| Tooltip | `content`, `disabled` |
| Popover | `trigger`, `content`, `open/defaultOpen`, `onOpen/onClose` |
| Loading | `text`, `size` |
