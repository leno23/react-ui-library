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
        <SplitPane
          ratio='1fr 2fr'
          left={<div style={{background:'#eef2ff',padding:'8px'}}>Left Pane</div>}
          right={<div style={{background:'#e0f2fe',padding:'8px'}}>Right Pane</div>}
        />
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
| SplitPane | `left`, `right`, `ratio` |
