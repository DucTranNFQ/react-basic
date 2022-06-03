import React, {useState} from 'react'
import { Outlet, Link } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SettingOutlined,
  LogoutOutlined,
  DashboardOutlined
} from '@ant-design/icons';

import style from "./MainLayout.module.scss"

const { Header, Sider, Content } = Layout;

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
        <Layout>
			<Sider trigger={null} collapsible collapsed={collapsed}>
			<div className={`logo ${style.logo}`}>Duc Tran</div>
			<Menu
				theme="dark"
				mode="inline"
				defaultSelectedKeys={['1']}
                items={[
                    {
                        key: '1',
                        icon: <DashboardOutlined />,
                        label: <Link to="dashboard">Dashboard</Link>,
                    },
                    {
                        key: '2',
                        icon: <SettingOutlined />,
                        label: <Link to="settings">Settings</Link>,
                    },
                    {
                        key: '3',
                        icon: <LogoutOutlined />,
                        label: <Link to="logout">Logout</Link>,
                    },
                ]}
			/>
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
