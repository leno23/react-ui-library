# 布局组件

## 示例

<LivePlayground :code="`
() => {
  return (
    <Container>
      <Space direction='vertical' size={12}>
        <Row>
          <Col span={6}><div style={{background:'#dbeafe',padding:'8px'}}>Col 6</div></Col>
          <Col span={6}><div style={{background:'#bfdbfe',padding:'8px'}}>Col 6</div></Col>
        </Row>
        <Grid cols={3} gap={8}>
          <div style={{background:'#f1f5f9',padding:'8px'}}>A</div>
          <div style={{background:'#f1f5f9',padding:'8px'}}>B</div>
          <div style={{background:'#f1f5f9',padding:'8px'}}>C</div>
        </Grid>
      </Space>
    </Container>
  )
}
`" />

## API

| 组件 | 关键属性 |
| --- | --- |
| Container | `fluid` |
| Row | `gap`, `justify`, `align`, `wrap` |
| Col | `span`, `offset` |
| Grid | `cols`, `gap` |
| Space | `direction`, `size`, `wrap` |
| Divider | `orientation` |
