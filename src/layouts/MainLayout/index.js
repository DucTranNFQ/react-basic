import React, {useEffect, useState} from 'react'
import { Outlet, Link } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SettingOutlined,
  LogoutOutlined,
  DashboardOutlined,
  LoginOutlined,
  UserAddOutlined,
  UserOutlined
} from '@ant-design/icons';

import style from "./MainLayout.module.scss"
import { userAPI } from '../../api/userAPI';

const { Header, Sider, Content } = Layout;

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [userData, setUserData] = useState({});
    useEffect(() => {
        userAPI.fetchUserData(localStorage.token).then(user => setUserData(user))
    }, [])
    const { role } = userData;
    const handleLogout = () => {
        localStorage.removeItem('token')
        setUserData({})
    }
  return (
    <>
        <Layout>
			<Sider trigger={null} collapsible collapsed={collapsed}>
			<div className={`logo ${style.logo}`}>Duc Tran</div>
			<Menu
				theme="dark"
				mode="inline"
				defaultSelectedKeys={['1']}
			>
                {
                    role === 'admin' || role === 'member' ? 
                    <Menu.Item icon={<DashboardOutlined />} key="dashboard"><Link to="dashboard">Dashboard</Link></Menu.Item>
                    : null
                }
                {
                    role === 'admin' ? 
                    <Menu.Item icon={<SettingOutlined />} key="settings"><Link to="settings">Settings</Link></Menu.Item>
                    : null
                }
                {
                    role === 'admin' || role === 'member' ? 
                    <Menu.Item icon={<LogoutOutlined />} key="logout" onClick={handleLogout}>Logout</Menu.Item>
                    : null
                }
                {
                    !localStorage.token &&
                    <Menu.Item icon={<LoginOutlined />} key="login"><Link to="login">Login</Link></Menu.Item>
                }
                {
                    !localStorage.token &&
                    <Menu.Item icon={<UserAddOutlined />} key="signup"><Link to="signup">Signup</Link></Menu.Item>
                }
            </Menu>
			</Sider>
			<Layout className="site-layout">
				<Header
					className="site-layout-background"
					style={{
					padding: 0,
					}}
				>
					{React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
					className: 'trigger',
					onClick: () => setCollapsed(!collapsed),
					})}
				</Header>
				<Content
					className="site-layout-background"
					style={{
						margin: '24px 16px',
						padding: 24,
						minHeight: 280,
					}}
					>
					<Outlet />
				</Content>
			</Layout>
		</Layout>
    </>
  )
}
