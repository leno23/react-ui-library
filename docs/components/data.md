# 数据组件

<LivePlayground :code="`
() => {
  return (
    <Space direction='vertical' size={12}>
      <Card title='Card Title'>Card content</Card>
      <Table
        columns={[{key:'name',title:'Name'},{key:'role',title:'Role'}]}
        dataSource={[{name:'Alice',role:'Admin'},{name:'Bob',role:'Editor'}]}
      />
      <Space>
        <Tag color='success'>Online</Tag>
        <Badge count={3}><Avatar name='Nova' /></Badge>
      </Space>
      <Pagination total={42} />
    </Space>
  )
}
`" />

## API

| 组件 | 关键属性 |
| --- | --- |
| Table | `columns`, `dataSource`, `rowKey`, `emptyText` |
| Pagination | `current/defaultCurrent`, `total`, `pageSize`, `onChange` |
| Card | `title`, `extra` |
| Tag | `color` |
| Badge | `count`, `dot` |
| Avatar | `name`, `src`, `size` |
