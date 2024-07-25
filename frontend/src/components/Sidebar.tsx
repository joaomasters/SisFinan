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
    <Sider width={200} className="site-layout-background">
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%', borderRight: 0 }}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.SubMenu key="sub1" icon={<DashboardOutlined />} title="Dashboard">
          <Menu.Item key="3"><Link to="/dashboard">Dashboard 1</Link></Menu.Item>
          <Menu.Item key="4"><Link to="/dashboard2">Dashboard 2</Link></Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="5" icon={<SettingOutlined />}>
          <Link to="/settings">Settings</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;