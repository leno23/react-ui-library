# Layout 布局

协助进行页面级整体布局，对齐 Ant Design Layout，包含 `Layout`、`LayoutHeader`、`LayoutSider`、`LayoutContent`、`LayoutFooter` 五个子组件。

## 示例

<LivePlayground :code="`
() => {
  return (
    <Layout hasSider style={{height:'300px',border:'1px solid #e2e8f0',borderRadius:'8px',overflow:'hidden'}}>
      <LayoutSider width={180} collapsible>
        <div style={{padding:'16px',fontWeight:600}}>Logo</div>
        <Menu
          mode='vertical'
          items={[
            {key:'home',label:'首页'},
            {key:'users',label:'用户管理'},
            {key:'settings',label:'系统设置'},
          ]}
        />
      </LayoutSider>
      <Layout>
        <LayoutHeader>
          <Text style={{fontWeight:600}}>Nova Admin</Text>
        </LayoutHeader>
        <LayoutContent style={{padding:'16px',background:'#f8fafc'}}>
          <Card title='欢迎'>这是页面主内容区域。</Card>
        </LayoutContent>
        <LayoutFooter>Nova UI ©2024</LayoutFooter>
      </Layout>
    </Layout>
  )
}
`" />

## API

### Layout

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| hasSider | 是否包含侧边栏（改为水平布局） | `boolean` | `false` |

### LayoutHeader

通用 HTML 属性，无额外 props。

### LayoutSider

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| width | 宽度 | `number` | `200` |
| collapsedWidth | 收起宽度 | `number` | `64` |
| collapsed | 是否收起（受控） | `boolean` | - |
| defaultCollapsed | 默认收起 | `boolean` | `false` |
| collapsible | 是否可收起 | `boolean` | `false` |
| onCollapse | 收起回调 | `(collapsed: boolean) => void` | - |
| trigger | 自定义触发器 | `ReactNode` | - |

### LayoutContent

通用 HTML 属性，无额外 props。

### LayoutFooter

通用 HTML 属性，无额外 props。
