import React from 'react'
import { Layout } from 'antd'

const { Header } = Layout

export default (props) => (
    <Header className='header'>
        <div className='logo'>Feedback App</div>
        <button type='default' className='logout-btn' onClick={() => props.logout()}>Logout</button>
    </Header>
)

