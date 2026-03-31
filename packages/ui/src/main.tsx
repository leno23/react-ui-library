import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  Card,
  Checkbox,
  Container,
  DatePicker,
  Divider,
  Drawer,
  Dropdown,
  Grid,
  Input,
  Loading,
  Menu,
  Modal,
  Pagination,
  Popover,
  Radio,
  Row,
  Select,
  Space,
  Switch,
  Table,
  Tabs,
  Tag,
  Text,
  Title,
  Tooltip,
} from './index'
import './styles/index.css'

function DemoApp() {
  return (
    <div className="min-h-screen bg-slate-50 px-6 py-10 dark:bg-slate-950">
      <Container>
        <Space direction="vertical" size={16}>
          <Title level={1}>Nova UI Demo</Title>
          <Text>Production-ready React component library.</Text>
          <Divider />
          <Row>
            <Button>Default</Button>
            <Button variant="outline">Outline</Button>
            <Button loading>Loading</Button>
            <Tag color="success">Success</Tag>
            <Badge count={5}>
              <Avatar name="Nova" />
            </Badge>
          </Row>
          <Grid cols={2}>
            <Card title="Form">
              <Space direction="vertical" size={10}>
                <Input label="Username" placeholder="Input your username" />
                <Select
                  label="Role"
                  options={[
                    { label: 'Admin', value: 'admin' },
                    { label: 'Editor', value: 'editor' },
                  ]}
                />
                <Row>
                  <Checkbox label="Remember me" />
                  <Radio name="lang" value="zh" label="中文" />
                  <Switch defaultChecked />
                </Row>
                <DatePicker />
              </Space>
            </Card>
            <Card title="Data">
              <Table
                columns={[
                  { key: 'name', title: 'Name' },
                  { key: 'role', title: 'Role' },
                ]}
                dataSource={[
                  { name: 'Alice', role: 'Admin' },
                  { name: 'Bob', role: 'Editor' },
                ]}
              />
              <div className="mt-3">
                <Pagination total={26} />
              </div>
            </Card>
          </Grid>
          <Tabs
            items={[
              { key: 'a', label: 'Components', content: 'Tabs with keyboard focus ready.' },
              { key: 'b', label: 'A11y', content: 'ARIA roles and semantic tags included.' },
            ]}
          />
          <Menu
            mode="horizontal"
            items={[
              { key: 'home', label: 'Home' },
              { key: 'docs', label: 'Docs' },
            ]}
          />
          <Breadcrumb items={[{ key: '1', label: 'Home' }, { key: '2', label: 'Library' }]} />
          <Dropdown trigger={<Button variant="outline">Dropdown</Button>} options={[{ key: '1', label: 'Profile' }, { key: '2', label: 'Logout' }]} />
          <Popover trigger={<Button variant="ghost">Popover</Button>} content="Interactive popover content" />
          <Tooltip content="Helpful tip">
            <Button variant="ghost">Hover me</Button>
          </Tooltip>
          <Loading />
          <Modal open={false} title="Modal" />
          <Drawer open={false} title="Drawer" />
        </Space>
      </Container>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DemoApp />
  </StrictMode>,
)
