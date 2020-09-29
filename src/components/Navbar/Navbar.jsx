import React, { Component } from 'react'
import { Layout, Menu, Button } from 'antd'
import { connect } from 'react-redux'
import { logout } from '../../actions/loginActions'
import './styles.css'

const { Header } = Layout;

class Navbar extends Component {
    render() {
        return (
            <Header className="header">
                <div className="logo">Feedback App</div>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Button type="default" className="logout-btn" onClick={() => this.props.signOut()}>Logout</Button>
                </Menu>
            </Header>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signOut: () => {
            dispatch(logout())
        }
    };
};

export default connect(null, mapDispatchToProps)(Navbar);
