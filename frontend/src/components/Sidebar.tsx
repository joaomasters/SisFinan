import React from 'react';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  DashboardOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom'; // Se estiver usando React Router

const { Sider } = Layout;

const Sidebar: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}> {/* Garante que o layout ocupe 100% da altura da tela */}
    <Sider className="site-layout-background"
    breakpoint="lg"
    collapsedWidth="0"
    onBreakpoint={(broken) => {
      console.log(broken);
    }}
    onCollapse={(collapsed, type) => {
      console.log(collapsed, type);
    }}
    style={{ height: '100vh', position: 'fixed', top: 0, left: 0  }} // Garante que o Sider ocupe 100% da altura da tela
    >
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%', borderRight: 0 }}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.SubMenu key="sub1" icon={<DashboardOutlined />} title="Teste">
          <Menu.Item key="3"><Link to="/Teste2">Dashboard 1</Link></Menu.Item>
          <Menu.Item key="4"><Link to="/Teste3">Dashboard 2</Link></Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="5" icon={<SettingOutlined />}>
          <Link to="/settings">Settings</Link>
        </Menu.Item>
      </Menu>
    </Sider>
    </Layout>
  );
};

export default Sidebar;