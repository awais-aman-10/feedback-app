import React, { PureComponent } from 'react'
import { Layout } from 'antd'
import { connect } from 'react-redux'
import { logout } from '../actions/loginActions'

const { Header } = Layout

class Navbar extends PureComponent {
    render() {
        return (
            <Header className="header">
                <div className="logo">Feedback App</div>
                <button type="default" className="logout-btn" onClick={() => this.props.signOut()}>Logout</button>
            </Header>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signOut: () => {
            dispatch(logout())
        }
    }
}

export default connect(null, mapDispatchToProps)(Navbar)
