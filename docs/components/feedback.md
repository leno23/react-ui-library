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
      <Watermark content='INTERNAL'>
        <Card title='Protected Content'>This panel is watermarked.</Card>
      </Watermark>
      <Tour
        defaultOpen
        steps={[
          { key: '1', title: 'Welcome', description: 'This is the first step.' },
          { key: '2', title: 'Done', description: 'Finish onboarding.' },
        ]}
      />
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
| Tour | `steps`, `open/defaultOpen`, `current`, `onChange`, `onClose` |
| Watermark | `content`, `children` |
