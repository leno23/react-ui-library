# 导航组件

<LivePlayground :code="`
() => {
  return (
    <Space direction='vertical' size={12}>
      <Tabs
        items={[
          { key: 'tab1', label: 'Tab 1', content: 'Content 1' },
          { key: 'tab2', label: 'Tab 2', content: 'Content 2' },
        ]}
      />
      <Menu mode='horizontal' items={[{key:'home',label:'Home'},{key:'docs',label:'Docs'}]} />
      <Breadcrumb items={[{key:'1',label:'Home'},{key:'2',label:'Library'}]} />
      <Dropdown
        trigger={<Button variant='outline'>Dropdown</Button>}
        options={[{key:'p',label:'Profile'},{key:'s',label:'Settings'}]}
      />
    </Space>
  )
}
`" />

## API

| 组件 | 关键属性 |
| --- | --- |
| Tabs | `items`, `activeKey/defaultActiveKey`, `onChange` |
| Menu | `items`, `selectedKey`, `mode`, `onChange` |
| Breadcrumb | `items`, `separator` |
| Dropdown | `trigger`, `options`, `open/defaultOpen`, `onOpen/onClose`, `onChange` |
