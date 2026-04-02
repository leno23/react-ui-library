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
      <Form
        initialValues={{ username: '' }}
        onSubmit={(values) => alert(JSON.stringify(values))}
      >
        <FormItem name='username' label='Username' rules={[{ required: true, message: 'Required' }]}>
          <Input placeholder='Input username' />
        </FormItem>
        <Button type='submit'>Submit Form</Button>
      </Form>
      <Upload onChange={(files) => console.log(files)} />
      <Slider defaultValue={30} />
      <Rate defaultValue={3} />
      <Calendar />
      <Transfer
        dataSource={[
          { key: '1', title: 'Option A' },
          { key: '2', title: 'Option B' },
        ]}
      />
      <Cascader
        options={[
          { value: 'zj', label: 'Zhejiang', children: [{ value: 'hz', label: 'Hangzhou' }] },
        ]}
      />
      <TreeSelect
        data={[
          { key: 'root', title: 'Root', children: [{ key: 'child', title: 'Child Node' }] },
        ]}
      />
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
| Form / FormItem | `initialValues`, `rules`, `onSubmit` |
| Upload | `accept`, `multiple`, `fileList`, `onChange` |
| Slider | `min/max/step`, `value/defaultValue`, `onChange` |
| Rate | `count`, `value/defaultValue`, `allowClear`, `onChange` |
| Calendar | `year/month`, `value`, `onChange` |
| Transfer | `dataSource`, `targetKeys/defaultTargetKeys`, `onChange` |
| Cascader | `options`, `value/defaultValue`, `onChange` |
| TreeSelect | `data`, `value/defaultValue`, `onChange` |
