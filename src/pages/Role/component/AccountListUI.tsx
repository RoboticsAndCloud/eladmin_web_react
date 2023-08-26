import { Button, Popconfirm, Table, TablePaginationConfig } from 'antd';
import { AccountInfoType } from '../../../store/types/accountType';
import { CloseCircleOutlined } from '@ant-design/icons';

/**
 * 账号列表 UI 组件 props
 */
interface AccountListUIProps {
  accountList?: AccountInfoType[];
  pagination?: TablePaginationConfig;
  listChangeCallback?: (pageConfig: TablePaginationConfig, filters: any, sorter: any) => void;
  removeChangeCallback?: (accountInfo: AccountInfoType) => void;
}

/**
 * 账号列表 UI 组件
 * @param props 组件依赖数据
 */
const AccountListUI = (props: AccountListUIProps) => {
  return (
    <Table
      rowKey={'account_id'}
      bordered={true}
      dataSource={props.accountList}
      pagination={props.pagination}
      onChange={props.listChangeCallback ? props.listChangeCallback : undefined}
      footer={() => ''}
    >
      <Table.Column
        title={'账号ID'}
        dataIndex="account_id"
        width={80}
        key={'account_id'}
        align={'center'}
      />
      <Table.Column title={'账号名'} dataIndex="name" key={'name'} />
      <Table.Column title={'昵称'} dataIndex="given_name" key={'given_name'} />
      <Table.Column
        title={'创建时间'}
        dataIndex="create_time"
        key={'create_time'}
        align={'center'}
      />
      <Table.Column
        title={'修改时间'}
        dataIndex="update_time"
        key={'update_time'}
        align={'center'}
      />
      <Table.Column
        title={'操作'}
        key={'action'}
        align={'center'}
        render={(accountInfo: AccountInfoType) => (
          <span>
            <Popconfirm
              title="确定要移除吗?"
              onConfirm={() =>
                props.removeChangeCallback ? props.removeChangeCallback(accountInfo) : undefined
              }
              okText="确定"
              cancelText="取消"
            >
              <Button
                className="button-link"
                icon={<CloseCircleOutlined />}
                type="link"
                size="small"
              >
                <span className="button-text">移除</span>
              </Button>
            </Popconfirm>
          </span>
        )}
      />
    </Table>
  );
};

export default AccountListUI;
