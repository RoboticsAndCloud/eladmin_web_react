import { Button, Form, Input, Select, Space } from 'antd';
import { AccountSearchType } from '../../../store/types/accountType';
import { DeleteOutlined, EditOutlined, PlusOutlined, VerticalAlignBottomOutlined } from '@ant-design/icons';

interface AccountSearchUIProps {
  searchChangeCallback: (values: AccountSearchType) => void;
  searchResetCallback: () => void;
  addClickCallback: () => void;
}

/**
 * 账号搜索 UI 组件
 * @param props 账号搜索 UI 组件依赖 props
 * @returns UI 组件
 */
const AccountAddModifyUI = (props: AccountSearchUIProps) => {
  const [form] = Form.useForm();

  return (
    <div className="panel-body pdr0">
      {/* <Space direction="horizontal" style={{width: '100%', justifyContent: 'right'}}>
          <Button 
          type="primary" 
          htmlType="submit" 
          icon={<PlusOutlined />} 
          style={{ background: "blue", borderColor: "white", width:"100px" }}
          >
            新增 
          </Button>

          <Button type="primary" htmlType="submit" icon={<EditOutlined />} style={{ background: "green", borderColor: "white", width:"100px" }}>
            修改
          </Button>

      </Space> */}

      <Form
        layout={'inline'}
        style={{ justifyContent: 'end' }}
      >

        <Form.Item>
          <Button 
            type="primary" 
            htmlType="submit" 
            icon={<PlusOutlined />} 
            style={{ background: "blue", borderColor: "white", width:"100px" }}
            onClick={() => props.addClickCallback()}
           >

            新增 
          </Button>
          <Button 
            type="primary" 
            htmlType="submit" 
            icon={<EditOutlined />} 
            style={{ background: "green", 
            borderColor: "white", 
            width:"100px" }}
           >

            修改
          </Button>
          <Button 
            type="primary" 
            htmlType="submit" 
            icon={<DeleteOutlined />} 
            style={{ background: "red", borderColor: "white", width:"100px" }}
            >
            删除
          </Button>
          <Button 
            type="primary" 
            htmlType="submit" 
            icon={<VerticalAlignBottomOutlined />} 
            style={{ background: "orange", borderColor: "white", width:"100px" }}
            >
              
            导出
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AccountAddModifyUI;
