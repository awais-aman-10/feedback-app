import React, { Component, Fragment } from 'react'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import './styles.css'

const { Sider } = Layout;

export default class Sidebar extends Component {
    render() {
        return (
            <Sider width={200} className="site-layout-background">
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['1']}
                    style={{ height: '100vh' }}
                    onSelect={(e) => { console.log(e) }}
                >
                    {this.props.role === 'manager' ?
                        <Fragment>
                            <Menu.Item key="1">
                                <span>All feedbacks</span>
                                <Link to="/" />
                            </Menu.Item>
                            <Menu.Item key="2">
                                <span>Approved feedbacks</span>
                                <Link to="/approved" />
                            </Menu.Item>
                            <Menu.Item key="3">
                                <span>Rejected feedbacks</span>
                                <Link to="/rejected" />
                            </Menu.Item>
                        </Fragment>
                        :
                        null
                    }
                </Menu>
            </Sider>
        )
    }
}
