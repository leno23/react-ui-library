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
      <Progress percent={68} />
      <Statistic title='Monthly Revenue' value={128900} prefix='¥' />
      <Descriptions
        columns={2}
        items={[
          { key: 'a', label: 'Owner', children: 'Team A' },
          { key: 'b', label: 'Status', children: 'Running' },
        ]}
      />
      <Timeline items={[{ key: '1', title: 'Created' }, { key: '2', title: 'Published', color: 'success' }]} />
      <Result status='success' title='Operation Done' subTitle='Everything looks good.' />
      <Empty description='No Records' />
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
| Progress | `percent`, `status`, `showInfo` |
| Statistic | `title`, `value`, `prefix`, `suffix` |
| Descriptions | `items`, `columns` |
| Timeline | `items` |
| Result | `status`, `title`, `subTitle`, `extra` |
| Empty | `description`, `image` |
