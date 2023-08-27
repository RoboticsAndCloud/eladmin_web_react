import React, { useEffect, useState } from 'react';
import AccountListUI from '../component/ListUI';
import {
  AccountDetailInfoType,
  AccountEditInfoType,
  AccountInfoType,
  AccountListType,
} from '../../../store/types/accountType';
import { AccountService } from '../../../services/Account';
import { Button, message, Modal, Popconfirm, Space, TablePaginationConfig } from 'antd';
import AccountSearchUI from '../component/SearchUI';
import AccountFormUI from '../component/FormUI';
import { initPagination } from '../../../store/states/adminState';
import { RoleInfoType } from '../../../store/types/roleType';
import AccountDetailUI from '../component/DetailUI';
import AccountAddModifyUI from '../component/AddModifyUI';
import { mockAccountDetails, mockAccountList, mockMenuList } from '../../Frame/container/HomeMockInfo';
import TreeTable from 'react-antd-treetable';
import { CloseSquareOutlined, FormOutlined } from '@ant-design/icons';

let searchValues = {};

const MenuList: React.FC = () => {
  const [accountList, setAccountList] = useState<AccountInfoType[] | any[]>([]);
  const [pagination, setPagination] = useState(initPagination);
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [editAccountInfo, setEditAccountInfo] = useState<AccountInfoType | any>();
  const [detailAccountInfo, setDetailAccountInfo] = useState<AccountDetailInfoType | any>();
  const [detailModalOpen, setDetailModalOpen] = useState<boolean>(false);
  const [roleList, setRoleList] = useState<RoleInfoType[] | any[]>([]);

  const [addModalOpen, setAddModalOpen] = useState<boolean>(false);
  const [addAccountInfo, setAddAccountInfo] = useState<AccountInfoType>();

  useEffect(() => {
    getAccountList(initPagination, {});
  }, []);

  /**
   * 请求账号列表
   * @param pageConfig 翻页信息
   * @param searchKeywords 搜索信息
   */
  const getAccountList = (pageConfig: TablePaginationConfig, searchKeywords: {}) => {
    searchValues = searchKeywords;
    AccountService.accountList(pageConfig.pageSize, pageConfig.current, searchKeywords)
      .then((res: AccountListType) => {
        setAccountList(res.list);
        setPagination({
          ...initPagination,
          current: res.page_info?.page_num,
          pageSize: res.page_info?.page_size,
          total: res.page_info?.total_num,
        });
      })
      .catch(e => {
        console.log(e);
        let res = mockAccountList
        setAccountList(res.list);
        setPagination({
          ...initPagination,
          current: res.page_info?.page_num,
          pageSize: res.page_info?.page_size,
          total: res.page_info?.total_num,
        });

      });
  };

  /**
   * 搜索查询操作
   * @param values 搜索表单数据
   */
  const searchChangeCallback = (values: {}) => {
    getAccountList(initPagination, values);
  };

  /**
   * 搜索重置操作
   */
  const searchResetCallback = () => {
    getAccountList(initPagination, {});
  };

  /**
   * 列表分页请求
   * @param pageConfig
   * @param filters
   * @param sorter
   */
  const listChangeCallback = (pageConfig: TablePaginationConfig, filters: any, sorter: any) => {
    getAccountList(pageConfig, searchValues);
  };

  /**
   * 修改点击操作
   * @param accountInfo 账号信息
   */
  const editClickCallback = (accountInfo: AccountInfoType) => {
    // 获取修改账号需要的信息
    AccountService.getEditAccountInfo(accountInfo.account_id)
      .then((editAccountInfo: AccountEditInfoType) => {
        const roleIds: string[] = [];
        editAccountInfo.account_roles.forEach((accountRole: RoleInfoType) => {
          roleIds.push(String(accountRole.role_id));
        });
        editAccountInfo.account_info.role_ids = '';
        if (roleIds.length > 0 && editAccountInfo.account_info) {
          editAccountInfo.account_info.role_ids = roleIds.toString();
        }
        setEditAccountInfo(editAccountInfo.account_info);
        setRoleList(editAccountInfo.role_list);
        setEditModalOpen(true);
      })
      .catch(e => {
        console.log('修改失败err:', e);

        let editAccountInfo = mockAccountDetails
        const roleIds: string[] = [];
        editAccountInfo.account_roles.forEach((accountRole: RoleInfoType) => {
          roleIds.push(String(accountRole.role_id));
        });
        editAccountInfo.account_info.role_ids = '';
        if (roleIds.length > 0 && editAccountInfo.account_info) {
          editAccountInfo.account_info.role_ids = roleIds.toString();
        }
        setEditAccountInfo(editAccountInfo.account_info);
        setRoleList(editAccountInfo.role_list);
        setEditModalOpen(true);

      });
  };

  /**
   * 详情点击操作
   * @param accountInfo 账号信息
   */
  const detailClickCallback = (accountInfo: AccountInfoType) => {
    // 获取账号详情信息
    AccountService.getAccountDetail(accountInfo.account_id)
      .then((accountDetailInfo: AccountDetailInfoType) => {
        setDetailAccountInfo(accountDetailInfo);
        setDetailModalOpen(true);
      })
      .catch(e => {
        console.log('修改失败err:', e);

        let accountDetailInfo = mockAccountDetails
        setDetailAccountInfo(accountDetailInfo);
        setDetailModalOpen(true);
      });
  };

  /**
   * 更新账号状态操作
   * @param accountInfo
   * @param status
   */
  const updateStatusCallback = (accountInfo: AccountInfoType, status: number) => {
    AccountService.updateAccountStatus(accountInfo.account_id, status)
      .then(() => {
        message.success('操作成功', 2, () => {
          getAccountList(pagination, searchValues);
        });
      })
      .catch(() => {
        message.error('操作失败', 2);
      });
  };

  /**
   * 修改弹框取消操作
   */
  const editModalCancelCallback = () => {
    setEditModalOpen(false);
  };

  /**
 * 新增弹框取消操作
 */
  const addModalCancelCallback = () => {
    setAddModalOpen(false);
  };


  /**
 * 修改弹框取消操作
 */
  const addModalCallback = () => {
    setAddModalOpen(true);
  };

  /**
   * 修改完成操作
   * @param accountInfo AccountInfoType
   */
  const editOnFinishCallback = (accountInfo: AccountInfoType) => {
    AccountService.modifyAccount(accountInfo)
      .then(() => {
        message.success('修改成功', 2, () => {
          setEditModalOpen(false);
          getAccountList(pagination, searchValues);
        });
      })
      .catch(e => {
        console.log(e);
        message.error('修改失败', 2);
      });
  };

    /**
   * 修改完成操作
   * @param accountInfo AccountInfoType
   */
    const addOnFinishCallback = (accountInfo: AccountInfoType) => {
      AccountService.saveAccount(accountInfo)
        .then(() => {
          message.success('修改成功', 2, () => {
            setEditModalOpen(false);
            getAccountList(pagination, searchValues);
          });
        })
        .catch(e => {
          console.log(e);
          message.error('修改失败', 2);
        });
    };


    // const columns = [
    //   {
    //     title: '函数名',
    //     dataIndex: 'function_name',
    //     width: 700,
    //   },
    //   {
    //     title: '上报次数',
    //     dataIndex: 'count',
    //     width: 120,
    //   },
    //   {
    //     title: 'Action',
    //     key: 'action',
    //     render: (_: any, record: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
    //       <Space size="small">
    //         <Button
    //             className="button-link"
    //             type="link"
    //             icon={<FormOutlined />}
    //             // onClick={() => props.editClickCallback(roleInfo)}
    //           >
    //             <span className="button-text">修改</span>
    //           </Button>
    //           <Popconfirm
    //             title="确定要删除吗?"
    //             // onConfirm={() => props.deleteCallback(roleInfo)}
    //             okText="确定"
    //             cancelText="取消"
    //           >
    //             <Button type="link" icon={<CloseSquareOutlined />} className="button-link">
    //               <span className="button-text">删除</span>
    //             </Button>
    //           </Popconfirm>
    //       </Space>
    //     ),
    //   },
    // ];
    
    // const data = [
    //   {
    //     id: `${Math.random()}`,
    //     function_name: `React Tree Reconciliation`,
    //     count: 100,
    //     children: [
    //       {
    //         id: `${Math.random()}`,
    //         function_name: 'ErrorBoundary [mount] (#4)',
    //         count: 50,
    //         children: [
    //           {
    //             id: `${Math.random()}`,
    //             function_name: 'ErrorBoundary [mount] (#4)',
    //             count: 50,
    //           },
    //           {
    //             id: `${Math.random()}`,
    //             function_name: 'storyFn [mount]',
    //             count: 50,
    //           },
    //           {
    //             id: `${Math.random()}`,
    //             function_name: 'HashRouter [mount] (#10)',
    //             count: 50,
    //           },
    //         ],
    //       },
    //       {
    //         id: `${Math.random()}`,
    //         function_name: 'storyFn [mount]',
    //         count: 50,
    //       },
    //     ],
    //   },
    // ];
  
    const getDisplayTag = (status?: number) => {
      if (status === 1) {
        return '是'
      } else {
        return '否';
      }
    };

    const columns = [
      {
        title: '菜单标题',
        dataIndex: 'name',
        width: 120,
      },
      {
        title: '排序',
        dataIndex: 'sequence',
        width: 120,
      },
       {
        title: '权限标识',
        dataIndex: 'privilege_type',
        width: 120,
      },
      {
        title: '可见',
        dataIndex: 'is_display',
        width: 120,
      },
      {
        title: '更新日期',
        dataIndex: 'update_time',
        width: 120,
      },
      {
        title: '操作',
        key: 'action',
        width: 120,
        render: (_: any, record: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
          <Space size="small">
            <Button
                className="button-link"
                type="link"
                icon={<FormOutlined />}
                // onClick={() => props.editClickCallback(roleInfo)}
              >
                <span className="button-text">修改</span>
              </Button>
              <Popconfirm
                title="确定要删除吗?"
                // onConfirm={() => props.deleteCallback(roleInfo)}
                okText="确定"
                cancelText="取消"
              >
                <Button type="link" icon={<CloseSquareOutlined />} className="button-link">
                  <span className="button-text">删除</span>
                </Button>
              </Popconfirm>
          </Space>
        ),
      },
    ];
    
    const data = mockMenuList

  return (
    <div className="panel">
      <TreeTable className="panel-body" rowKey="id" dataSource={data} columns={columns} />
    </div>

    // <div className="panel">
    //   <AccountSearchUI
    //     searchChangeCallback={searchChangeCallback}
    //     searchResetCallback={searchResetCallback}
    //   />
    //   <AccountAddModifyUI
    //   searchChangeCallback={searchChangeCallback}
    //   searchResetCallback={searchResetCallback}
    //   addClickCallback={addModalCallback}
    //   />
    //   <AccountListUI
    //     listLoading={false}
    //     accountList={accountList}
    //     pagination={pagination}
    //     listChangeCallback={listChangeCallback}
    //     editClickCallback={editClickCallback}
    //     updateStatusCallback={updateStatusCallback}
    //     detailClickCallback={detailClickCallback}
    //   />
    //   <Modal
    //     title="账号修改"
    //     width={570}
    //     open={editModalOpen}
    //     onCancel={editModalCancelCallback}
    //     footer={null}
    //   >
    //     <AccountFormUI
    //       roleList={roleList}
    //       accountInfo={editAccountInfo}
    //       onFinishCallback={editOnFinishCallback}
    //     />
    //   </Modal>
    //   <Modal
    //     title="账号详情"
    //     width={570}
    //     open={detailModalOpen}
    //     onCancel={() => {
    //       setDetailModalOpen(false);
    //     }}
    //     footer={null}
    //   >
    //     <AccountDetailUI
    //       accountDetail={detailAccountInfo}
    //       key={detailAccountInfo?.account_info.account_id.toString()}
    //     />
    //   </Modal>

    //   <Modal
    //     title="账号新增"
    //     width={570}
    //     open={addModalOpen}
    //     onCancel={addModalCancelCallback}
    //     footer={null}
    //   >
    //     <AccountFormUI
    //       roleList={roleList}
    //       accountInfo={addAccountInfo}
    //       onFinishCallback={addOnFinishCallback}
    //     />
    //   </Modal>
      
    // </div>
  );
};

export default MenuList;
