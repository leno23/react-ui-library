# 表单组件

<LivePlayground :code="`
() => {
  return (
    <Space direction='vertical' size={10}>
      <Input label='Name' placeholder='Input name' />
      <Select label='Role' options={[{label:'Admin',value:'admin'},{label:'Editor',value:'editor'}]} />
      <Space>
        <Checkbox label='Remember me' />
        <Radio name='lang' label='中文' value='zh' />
        <Switch defaultChecked />
      </Space>
      <DatePicker />
    </Space>
  )
}
`" />

## API

| 组件 | 关键属性 |
| --- | --- |
| Input | `value/defaultValue`, `onValueChange`, `prefix/suffix`, `size` |
| Select | `options`, `value/defaultValue`, `onChange` |
| Checkbox | `checked/defaultChecked`, `onChange` |
| Radio | `value`, `name`, `onChange` |
| Switch | `checked/defaultChecked`, `onChange` |
| DatePicker | `value/defaultValue`, `onChange` |
