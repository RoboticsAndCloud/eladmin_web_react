import { DeleteOutlined, EditOutlined, PlusOutlined, VerticalAlignBottomOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useState } from 'react';

interface RoleSearchUIProps {
  searchChangeCallback: (values: any) => void;
  searchResetCallback: () => void;
  addClickCallback: () => void;
}

/**
 * 角色搜索 UI 组件
 * @param props
 * @returns
 */
const AccountAddModifyUI = (props: RoleSearchUIProps) => {
  const [form] = Form.useForm();

  return (
    <div className="panel-body pdr0">

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