import React, { useEffect, useState } from 'react';
import {MenuProps, Layout, Menu, Button, theme, Space, Dropdown } from 'antd';
import {
  GithubOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LoginOutlined,
  ProfileOutlined,
  LockOutlined,
} from '@ant-design/icons';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ProfileService } from '../../../services/Profile';
import { ProfileInfoType } from '../../../store/types/profileType';
import { useDispatch } from 'react-redux';
import { DispatchLogoutAction } from '../../../store/actions/adminAction';
import { AccountInfoType } from '../../../store/types/accountType';
import '../component/home.css';
import FrameHeaderUI from '../component/HeaderUI';
import FrameSidebarUI from '../component/SidebarUI';
import FrameBreadcrumbUI from '../component/BreadcrumbUI';
import FrameFooterUI from '../component/FooterUI';
import { setProfileAccountInfo } from '../../../store/local';
import {
  PrivilegeInfoType,
  PrivilegeListItemType,
  PrivilegeTypeNav,
} from '../../../store/types/privilegeType';
import DynamicIcon from '../../../components/DynamicIcon/DynamicIcon';
import { FrameBreadcrumbItem } from '../../../store/types/adminType';

// const {Menu, Button} = antd;
const { Header, Sider, Content } = Layout;

const homeConfig = {
  footerText: 'Admin System ©2023 Created by Frank',
};

const mockMenuItems: MenuProps['items'] = [
  {
    label: '账号管理',
    key: 'privilege',
    children: [
      {
        label: <Link to="/privilege/add">添加权限</Link>,
        key: 'privilege-add',
        // icon: <UnorderedListOutlined />,
      },
      {
        label: <Link to="/privilege/list">权限列表</Link>,
        key: 'privilege-list',
        // icon: <UnorderedListOutlined />,
      },
    ],
    // icon: <LockOutlined />,
  },
  {
    label: '角色管理',
    key: 'privilege',
    children: [
      {
        label: <Link to="/privilege/add">添加权限</Link>,
        key: 'privilege-add',
        // icon: <UnorderedListOutlined />,
      },
      {
        label: <Link to="/privilege/list">权限列表</Link>,
        key: 'privilege-list',
        // icon: <UnorderedListOutlined />,
      },
    ],
    // icon: <LockOutlined />,
  },
  {
    label: '权限管理',
    key: 'privilege',
    children: [
      {
        label: <Link to="/privilege/add">添加权限</Link>,
        key: 'privilege-add',
        // icon: <UnorderedListOutlined />,
      },
      {
        label: <Link to="/privilege/list">权限列表</Link>,
        key: 'privilege-list',
        // icon: <UnorderedListOutlined />,
      },
    ],
    // icon: <LockOutlined />,
  },
];

/**
 * 根据权限列表返回获取导航item列表
 * @param privilegeList 权限列表数据
 * @returns 导航的 item
 */
const getNavItemsByPrivilegeList = (
  privilegeList?: PrivilegeListItemType[]
): MenuProps['items'] => {
  let navItems: MenuProps['items'] = [];
  if (!privilegeList) {
    return navItems;
  }
  privilegeList.forEach(privilegeItem => {
    if (privilegeItem.privilege_info.privilege_type === PrivilegeTypeNav) {
      navItems?.push({
        label: privilegeItem.privilege_info.name,
        key: String(privilegeItem.privilege_info.privilege_id),
        icon: <DynamicIcon name={privilegeItem.privilege_info.icon} />,
      });
    }
  });
  return navItems;
};

/**
 * 根据权限列表获取菜单 item
 * @param privilegeList 权限列表
 * @returns 导航对应的菜单列表
 */
const getMenuItemsByPrivilegeList = (
  privilegeList?: PrivilegeListItemType[]
): MenuProps['items'] => {
  let menuItems: MenuProps['items'] = [];
  if (!privilegeList || privilegeList.length === 0) {
    return undefined;
  }
  console.log('menuItems privilegeList:', privilegeList)
  privilegeList.forEach(privilegeItem => {
    menuItems?.push({
      label:
        privilegeItem.child_privileges.length > 0 ? (
          privilegeItem.privilege_info.name
        ) : (
          <Link to={privilegeItem.privilege_info.page_router}>
            {privilegeItem.privilege_info.name}
          </Link>
        ),
      key: String(privilegeItem.privilege_info.privilege_id),
      icon: <DynamicIcon name={privilegeItem.privilege_info.icon} />,
      children: getMenuItemsByPrivilegeList(privilegeItem.child_privileges),
    });
  });

  return menuItems;
};

const FrameHome: React.FC = () => {
  const [loginAccountInfo, setLoginAccountInfo] = useState<AccountInfoType>();
  const [privilegeList, setPrivilegeList] = useState<PrivilegeListItemType[]>();
  const [navItems, setNavItems] = useState<MenuProps['items']>([]); // 导航列表
  const [menuItems, setMenuItems] = useState<MenuProps['items']>([]); // 菜单列表
  const [breadcrumbItems, setBreadcrumbItems] = useState<FrameBreadcrumbItem[]>([]); // 面包导航

  const dispatch = useDispatch();

  const location = useLocation();

  useEffect(() => {
    getProfileInfo();
    // console.log(location);
  }, []);

  /**
   * 登录退出操作
   */
  const logoutCallback = () => {
    DispatchLogoutAction(dispatch, null); // dispatch redux
    window.location.href = '/';
  };

  /**
   * 导航选中切换操作
   */
  const navSelectCallback = (info: any) => {
    const navIdStr = info.key ? info.key : '';
    // 查找导航对应的菜单权限
    let menuPrivileges: PrivilegeListItemType[] = [];
    privilegeList?.forEach(privilegeItem => {
      if (String(privilegeItem.privilege_info.privilege_id) === navIdStr) {
        menuPrivileges = privilegeItem.child_privileges;
      }
    });
    let menuItems = getMenuItemsByPrivilegeList(menuPrivileges);
    setMenuItems(menuItems);
  };

  /**
   * 获取个人资料
   */
  const getProfileInfo = () => {
    setPrivilegeNavItems(); // 更新导航权限
    setPrivilegeMenusItems(); // 更新菜单权限

    ProfileService.getProfileInfo()
      .then((profileInfo: any) => {
        setProfileAccountInfo(profileInfo.account_info);
        setLoginAccountInfo(profileInfo.account_info);
        setPrivilegeList(profileInfo.privilege_list);
        setPrivilegeNavItems(profileInfo.privilege_list); // 更新导航权限

        setPrivilegeMenusItems(profileInfo.privilege_list); // 更新菜单权限
      })
      .catch(e => {
        console.log('get profile catch: ', e);
        // alert(e)
      });

  
      // ProfileService.getProfileInfo()
      // .then((profileInfo: ProfileInfoType) => {
        
      //   // setProfileAccountInfo(profileInfo.account_info);
      //   setLoginAccountInfo(profileInfo.account_info);
      //   setPrivilegeList(profileInfo.privilege_list);
      //   setPrivilegeNavItems(profileInfo.privilege_list); // 更新导航权限
      //   setPrivilegeMenusItems(profileInfo.privilege_list); // 更新菜单权限
      // })
      // .catch(e => {
      //   console.log('get profile catch: ', e);
      //   // alert(e)
      // });

      

      var account_info: AccountInfoType
      account_info = {
          "account_id": BigInt(1),
          "name": "admin",
          "given_name": "given_name",
          "email": "@email",
          "phone": "123456789",
          "mobile": "123456789",
          "status": 1,
          "create_time": "20230606",
          "update_time": "20230607",
          "role_ids": "22"
        }

      const mockProfileInfo = {
        account_info,

        "privilege_list": [
          {
            "label": "账号",
            "key": "privilege",
            "children": [
              {
                "label": "<Link to=\"/privilege/add\">添加权限</Link>",
                "key": "privilege-add",
                "icon": "<UnorderedListOutlined />"
              },
              {
                "label": "<Link to=\"/privilege/list\">权限列表</Link>",
                "key": "privilege-list",
                "icon": "<UnorderedListOutlined />"
              }
            ]
          },
          {
            "label": "角色管理",
            "key": "privilege",
            "children": [
              {
                "label": "<Link to=\"/privilege/add\">添加权限</Link>",
                "key": "privilege-add",
                "icon": "<UnorderedListOutlined />"
              },
              {
                "label": "<Link to=\"/privilege/list\">权限列表</Link>",
                "key": "privilege-list",
                "icon": "<UnorderedListOutlined />"
              }
            ]
          },
          {
            "label": "权限管理",
            "key": "privilege",
            "children": [
              {
                "label": "<Link to=\"/privilege/add\">添加权限</Link>",
                "key": "privilege-add",
                "icon": "<UnorderedListOutlined />"
              },
              {
                "label": "<Link to=\"/privilege/list\">权限列表</Link>",
                "key": "privilege-list",
                "icon": "<UnorderedListOutlined />"
              }
            ]
          }
        ]
      }
  };

  /**
   * 更新导航 item 数据
   * @param privilegeList 权限列表
   */
  const setPrivilegeNavItems = (privilegeList?: PrivilegeListItemType[]) => {
    const navItems = getNavItemsByPrivilegeList(privilegeList);
    setNavItems(navItems);
  };

  /**
   * 更新菜单 item 数据
   * @param privilegeList 权限列表
   */
  const setPrivilegeMenusItems = (privilegeList?: PrivilegeListItemType[]) => {
    if (!privilegeList || privilegeList.length === 0) {
      setMenuItems([]);
      return;
    }
    // 获取第一个导航的默认ID
    let defNavId: bigint | undefined;
    if (privilegeList && privilegeList.length > 0) {
      defNavId = privilegeList[0].privilege_info.privilege_id;
    }
    // 查找导航对应的菜单权限
    let menuPrivileges: PrivilegeListItemType[] = [];
    privilegeList?.forEach(privilegeItem => {
      if (privilegeItem.privilege_info.privilege_id === defNavId) {
        menuPrivileges = privilegeItem.child_privileges;
      }
    });
    let menuItems = getMenuItemsByPrivilegeList(menuPrivileges);
    // todo 测试加上mock
    
    // let menuItems = mockMenuItems
    // menuItems?.push(...mockMenuItems);
    setMenuItems(menuItems);
  };

  /**
   * 菜单点击回调
   * @param e
   */
  const menuClickCallback = (e: any) => {
    const menuId: string = e.key;
    if (menuId === '') {
      return;
    }
    console.log(e);
    let updateBreadcrumbItems: FrameBreadcrumbItem[] = [
      {
        key: '1',
        name: '系统',
        link: '',
      },
      {
        key: '2',
        name: '个人中心',
        link: '',
      },
      {
        key: '3',
        name: '个人中心',
        link: '/profile/info',
      },
    ];
    // todo
    setBreadcrumbItems(updateBreadcrumbItems);
  };

  const [collapsed, setCollapsed] = useState(false);
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();

  const menuItemsAccount: MenuProps['items'] = [
    {
      label: <Link to="/profile/info">个人信息</Link>,
      key: 'profile_info',
      icon: <ProfileOutlined rev={undefined} />,
    },
    {
      label: <Link to="/profile/repass">修改密码</Link>,
      key: 'profile_repass',
      icon: <LockOutlined rev={undefined} />,
    },
    {
      type: 'divider',
    },
    {
      label: <a onClick={logoutCallback}>退出登录</a>,
      key: 'profile_logout',
      icon: <LoginOutlined rev={undefined} />,
    },
  ];
  
  return (
    <Layout>
      {/* <FrameHeaderUI
        loginAccountInfo={loginAccountInfo}
        logoutCallback={logoutCallback}
        navItems={navItems}
        navSelectCallback={navSelectCallback}
      /> */}
      <Layout>
        <FrameSidebarUI menuItems={menuItems} menuClickCallback={menuClickCallback} collapsed={collapsed}/>
{/* 
        <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider> */}
        <Layout className="admin-main">
          
        <Header style={{ padding: 0, background: 'white' }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined rev={undefined} /> : <MenuFoldOutlined rev={undefined} />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <span className="admin-header-action-2">
            <a target={'_blank'} href="https://github.com/RoboticsAndCloud/ailu-admin_typescript" rel="noreferrer">
              <GithubOutlined rev={undefined} />
            </a>
          </span>

          <Dropdown menu={{ items: menuItemsAccount }}>
            <span className="admin-header-action-2">
              <Space>
                <UserOutlined rev={undefined} />
                {loginAccountInfo?.name}
              </Space>
            </span>
          </Dropdown>
        </Header>
          {/* <FrameBreadcrumbUI items={breadcrumbItems} /> */}
          <Layout.Content className="admin-content">
            <Outlet />
          </Layout.Content>
          <FrameFooterUI text={homeConfig.footerText} />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default FrameHome;
