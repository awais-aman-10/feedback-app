import React, { Component, Fragment } from 'react'
import { Form, Input, Row, Col } from 'antd'
import { connect } from 'react-redux'
import { login } from '../actions/loginActions'
import history from '../RouteHistory'

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
}

class Login extends Component {
    componentDidMount = () => {
        if (this.props.loggedInUser && this.props.loggedInUser.email !== undefined) {
            history.push('/feedbacks')
        }
    }

    onFinish = (values) => {
        this.props.submitForm(values, this.props.users)
    }

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
    }

    render() {
        return (
            <Fragment>
                <Row justify="space-around" align="middle" className="full-height">
                    <Col span={6} className="bordered">
                        <Form
                            {...layout}
                            name="basic"
                            onFinish={this.onFinish}
                            onFinishFailed={this.onFinishFailed}
                        >
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                                justify="space-around"
                                align="middle"
                            >
                                <Input placeholder="E-mail" />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                                justify="space-around"
                                align="middle"
                            >
                                <Input.Password placeholder="Password" />
                            </Form.Item>

                            <div className='login-btn-area'>
                                <button type="primary">
                                    Login
                                </button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.authReducer.users,
        loggedInUser: state.authReducer.loggedInUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitForm: (formValues, users) => {
            dispatch(login(formValues, users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
