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
      <Steps items={[{ key:'1', title:'Create' }, { key:'2', title:'Review' }, { key:'3', title:'Done' }]} current={1} />
      <Collapse
        items={[
          { key: 'q1', title: 'What is Nova UI?', content: 'A React component library.' },
          { key: 'q2', title: 'Does it support SSR?', content: 'Yes, supports Next.js SSR.' },
        ]}
      />
      <Tree
        data={[
          { key: 'root', title: 'src', children: [{ key: 'cmp', title: 'components' }, { key: 'doc', title: 'docs' }] },
        ]}
        defaultExpandedKeys={['root']}
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
| Steps | `items`, `current` |
| Collapse | `items`, `activeKey/defaultActiveKey`, `accordion`, `onChange` |
| Tree | `data`, `expandedKeys/defaultExpandedKeys`, `onExpand` |
