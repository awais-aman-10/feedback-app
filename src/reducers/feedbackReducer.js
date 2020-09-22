import * as organizationActionsConstants from '../constants/feedback.js';

const initialState = {
    feedback: [],
};

const feedbackReducer = (state = initialState, action) => {
    switch (action.type) {
        case organizationActionsConstants.GET_FEEDBACKS:
            return {
                ...state,
                feedback: []
            };

        case organizationActionsConstants.GET_FEEDBACKS_SUCCESS:
            return {
                ...state,
                feedback: action.payload
            };

        case organizationActionsConstants.GET_FEEDBACKS_ERROR:
            return {
                ...state,
                feedback: []
            };
        default:
            return state;
    }
};

export default feedbackReducer;
