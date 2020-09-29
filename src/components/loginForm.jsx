import React, { Fragment } from 'react'
import { Form, Input, Row, Col } from 'antd'

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
}

export default (props) => (
    <Fragment>
        <Row justify='space-around' align='middle' className='full-height'>
            <Col span={6} className='bordered'>
                <Form
                    {...layout}
                    name='basic'
                    onFinish={(values) => props.onFinish(values)}
                    onFinishFailed={(errInfo) => props.onFinishFailed(errInfo)}
                >
                    <Form.Item
                        name='email'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                        justify='space-around'
                        align='middle'
                    >
                        <Input placeholder='E-mail' />
                    </Form.Item>

                    <Form.Item
                        name='password'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        justify='space-around'
                        align='middle'
                    >
                        <Input.Password placeholder='Password' />
                    </Form.Item>

                    <div className='login-btn-area'>
                        <button type='primary'>
                            Login
                        </button>
                    </div>
                </Form>
            </Col>
        </Row>
    </Fragment>
)

