import React, { Fragment } from 'react'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'

const { Sider } = Layout

export default ({ role }) => (
    <Sider width={200}>
        <Menu
            theme='dark'
            mode='inline'
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['1']}
            style={{ height: '100vh' }}
        >
            { role === 'manager' ?
                <Fragment>
                    <Menu.Item key='1'>
                        <span>All feedbacks</span>
                        <Link to='/' />
                    </Menu.Item>
                </Fragment>
                :
                null
            }
        </Menu>
    </Sider>
)
