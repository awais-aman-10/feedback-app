import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { login } from '../actions/loginActions'
import LoginForm from '../components/loginForm'
import history from '../RouteHistory'

class Login extends PureComponent {
    componentDidMount = () => {
        const { email } = this.props.loggedInUser
        if (email !== undefined) {
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
            <LoginForm
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
            />
        )
    }
}

const mapStateToProps = state => ({
    users: state.authReducer.users,
    loggedInUser: state.authReducer.loggedInUser
})

const mapDispatchToProps = dispatch => ({
    submitForm: (formValues, users) => {
        dispatch(login(formValues, users))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
