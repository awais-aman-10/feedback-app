import * as loginConstants from '../constants/auth.js'

const initialState = {
    users: [
        {
            email: 'awais@gmail.com',
            password: 'awais123',
            name: 'Awais',
            role: 'manager'
        },
        {
            email: 'aman@gmail.com',
            password: 'aman123',
            name: 'Aman',
            role: 'user'
        },
        {
            email: 'John@gmail.com',
            password: 'john123',
            name: 'John',
            role: 'user'
        }
    ],
    loggedInUser: {}
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case loginConstants.LOGIN_SUCCESS:
            return {
                ...state,
                loggedInUser: action.payload
            }
        case loginConstants.LOGIN_ERROR:
            return {
                ...state,
                loggedInUser: {}
            }
        default:
            return state
    }
}

export default authReducer
