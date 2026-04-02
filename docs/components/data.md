# 数据组件

<LivePlayground :code="`
() => {
  return (
    <Space direction='vertical' size={12}>
      <Card title='Card Title'>Card content</Card>
      <Table
        columns={[
          {
            key: 'name',
            title: 'Name',
            sorter: (a, b) => String(a.name).localeCompare(String(b.name)),
          },
          {
            key: 'role',
            title: 'Role',
            filters: [{ text: 'Admin', value: 'Admin' }, { text: 'Editor', value: 'Editor' }],
          },
        ]}
        dataSource={[{name:'Alice',role:'Admin'},{name:'Bob',role:'Editor'}]}
        title='User Table'
        searchable
        columnConfigurable
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
      <QRCode value='https://leno23.github.io/react-ui-library/' />
      <ImagePreview src='https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600' />
      <VirtualList
        items={Array.from({ length: 120 }, (_, i) => 'Item ' + (i + 1))}
        renderItem={(item) => item}
      />
    </Space>
  )
}
`" />

## API

| 组件 | 关键属性 |
| --- | --- |
| Table | `columns(sorter/filters/width/render)`, `dataSource`, `rowKey`, `emptyText`, `title`, `searchable`, `columnConfigurable` |
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
| QRCode | `value`, `size` |
| ImagePreview | `src`, `alt`, `width`, `height` |
| VirtualList | `items`, `itemHeight`, `height`, `renderItem` |
