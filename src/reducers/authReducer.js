import * as loginConstants from '../constants/auth.js'

const initialState = {
    users: [
        {
            email: 'manager@gmail.com',
            password: 'manager1234',
            name: 'John Manager',
            role: 'manager'
        },
        {
            email: 'user@gmail.com',
            password: 'user1234',
            name: 'Tom User',
            role: 'user'
        },
        {
            email: 'user2@gmail.com',
            password: 'user1234',
            name: 'John User',
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
