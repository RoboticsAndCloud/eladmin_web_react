import { Layout, Menu, MenuProps } from 'antd';
// @ts-ignore
import logoImg from '../../../assets/images/sboot.png';

interface FrameSidebarUIProps {
  menuItems: MenuProps['items'];
  menuClickCallback?: (e: any) => void;
  collapsed?:boolean
}

const FrameSidebarUI = (props: FrameSidebarUIProps) => {
  return (
    <Layout.Sider trigger={null} collapsible collapsed={props.collapsed}
      // collapsible
      collapsedWidth="48px"
      width="208px"
      className="admin-sidebar"
      theme="dark"
    >
    <div className="admin-header-logo">
      <a href="/">
      <img src={logoImg} alt="logo"></img>
      <span> Admin System </span>
      </a>
    </div>
      <Menu
        theme="dark"
        mode="inline"
        className="admin-sidebar-menu"
        style={{
          height: `${document.body.offsetHeight - 96}px`,
        }}
        items={props.menuItems}
        onClick={props.menuClickCallback}
      />
    </Layout.Sider>
  );
};

export default FrameSidebarUI;
