import React, { Component, Fragment } from 'react'
import { Layout } from 'antd'
import Navbar from './Navbar'
import { connect } from 'react-redux'
import Sidebar from './Sidebar'

const { Content } = Layout

class PageLayout extends Component {

    render() {
        const { loggedInUser } = this.props
        return (
            <Fragment>
                <Layout>
                    <Navbar />
                    <Layout>
                        <Sidebar role={loggedInUser && loggedInUser.role} />
                        <Layout className='page-layout'>
                            <Content className='site-layout-background'>
                                { this.props.children }
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedInUser: state.authReducer.loggedInUser
    }
}

export default connect(mapStateToProps, null)(PageLayout)
