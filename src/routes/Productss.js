import React from 'react';
import { Table, Form, Select } from 'antd';
const Option = Select.Option;

// 所接受数据结构
const data = [{
  key: '1',
  change: '异常变更值1', // 异常变更列的内容
  index: '指标变量1', // 指标变量列对应的内容 ...
  operator: '运算符1',
  threshold: `阀值1`,
}, {
  key: '2',
  change: '异常变更值2', // 异常变更列的内容
  index: '指标变量2', // 指标变量列对应的内容 ...
  operator: '运算符2',
  threshold: `阀值2`,
}, {
  key: '3',
  change: '异常变更值3', // 异常变更列的内容
  index: '指标变量3', // 指标变量列对应的内容 ...
  operator: '运算符3',
  threshold: `阀值3`,
}];

class Products extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  getColumns = () => {
    return [{
      title: '异常变更值',
      dataIndex: 'change', // change字段对应的那一列
    }, {
      title: '指标变量',
      dataIndex: 'index', // 指标变量
      render: (text, record) => {
        const {
          getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,
        } = this.props.form
        console.log('ssss', record) // text是内容，record是这个对应的字段的所有内容，是一个对象
        return (
          <Form.Item>
          {getFieldDecorator('gender', {
            rules: [{ required: true, message: 'Please select your gender!' }],
          })(
            <Select
              style={{ width: 200 }}
              placeholder="Select a option and change input text above"
              onChange={this.handleSelectChange}
            >
              <Option value="male">male</Option>
              <Option value="female">female</Option>
            </Select>
          )}
        </Form.Item>
        )
      }
    }, {
      title: '运算符',
      dataIndex: 'operator',
    }, {
      title: '阀门',
      dataIndex: 'threshold',
    }];
  }
  render(){
    
    return(
      <div>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <Table columns={this.getColumns()} dataSource={data} pagination = {false} />
        </Form>
      </div>
    )
  }

}

export default Form.create()(Products);
