import React, { Component, Fragment } from 'react'
import { Layout } from 'antd'
import Navbar from '../Navbar/Navbar';
import 'antd/dist/antd.css';
import { connect } from 'react-redux'
import './styles.css';
import Sidebar from '../Sidebar/Sidebar';
import FeedbackForm from '../feedbackForm';

const { Content } = Layout;

class Home extends Component {

    render() {
        return (
            <Fragment>
                <Layout>
                    <Navbar />
                    <Layout>
                        <Sidebar role={this.props.loggedInUser && this.props.loggedInUser.role} />
                        <Layout style={{ padding: '24px 24px 24px 24px' }}>
                            <Content
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    margin: 0,
                                    overflow: 'initial'
                                }}
                            >
                                <FeedbackForm></FeedbackForm>
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
    };
};

export default connect(mapStateToProps, null)(Home);
