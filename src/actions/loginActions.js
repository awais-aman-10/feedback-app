import { notification } from 'antd'
import * as constants from '../constants/auth.js'
import history from '../RouteHistory'

export const login = (formValues, users) => (dispatch) => {
    let foundUser = users.filter((u) => u.email === formValues.email && u.password === formValues.password)
    if (foundUser.length > 0) {
        dispatch({ type: constants.LOGIN_SUCCESS, payload: foundUser[0] })
        history.push('/feedbacks')
    }
    else {
        dispatch({ type: constants.LOGIN_ERROR })
        notification.error({ message: 'Invalid email or password' })
    }
}

export const logout = () => (dispatch) => {
    dispatch({ type: constants.LOGIN_ERROR })
}
