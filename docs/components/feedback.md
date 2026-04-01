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

<LivePlayground :code="`
() => {
  return (
    <Space direction='vertical' size={10}>
      <Notification type='success' title='Publish Success' description='Package has been published.' />
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
| Notification | `type`, `title`, `description`, `open`, `onClose` |
