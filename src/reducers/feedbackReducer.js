import * as feedbackConstants from '../constants/feedback.js';

const initialState = {
    feedbacks: [],
};

const feedbackReducer = (state = initialState, action) => {
    switch (action.type) {
        case feedbackConstants.GET_FEEDBACKS:
            return {
                ...state,
                feedbacks: []
            };

        case feedbackConstants.GET_FEEDBACKS_SUCCESS:
            return {
                ...state,
                feedbacks: action.payload
            };

        case feedbackConstants.GET_FEEDBACKS_ERROR:
            return {
                ...state,
                feedbacks: []
            };
        case feedbackConstants.SUBMIT_FEEDBACK:
            console.log('in reducer js', action.payload)
            return {
                ...state,
                feedbacks: state.feedbacks.push(action.payload)
            };
        default:
            return state;
    }
};

export default feedbackReducer;
