import { merge, concat } from 'lodash'
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
                feedbacks: merge({}, state.searchedBreed, action.payload)
            };

        case feedbackConstants.GET_FEEDBACKS_ERROR:
            return {
                ...state,
                feedbacks: []
            };
        case feedbackConstants.SUBMIT_FEEDBACK:
            return {
                ...state,
                feedbacks: concat(state.feedbacks, action.payload)
            };
        default:
            return state;
    }
};

export default feedbackReducer;
