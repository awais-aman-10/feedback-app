import React, { PureComponent, Fragment } from 'react'
import { Layout } from 'antd'
import { connect } from 'react-redux'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { logout } from '../actions/loginActions'

const { Content } = Layout

class PageLayout extends PureComponent {

    render() {
        const { loggedInUser, signOut, children } = this.props
        return (
            <Fragment>
                <Layout>
                    <Navbar logout={signOut} />
                    <Layout>
                        <Sidebar role={loggedInUser && loggedInUser.role} />
                        <Layout className='page-layout'>
                            <Content className='site-layout-background'>
                                { children }
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    loggedInUser: state.authReducer.loggedInUser
})

const mapDispatchToProps = dispatch => ({
    signOut: () => {
        dispatch(logout())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(PageLayout)
