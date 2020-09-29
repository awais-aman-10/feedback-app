import { merge, concat } from 'lodash'
import * as feedbackConstants from '../constants/feedback.js'

const initialState = {
    feedbacks: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case feedbackConstants.GET_FEEDBACKS:
            return {
                ...state,
                feedbacks: []
            }
        case feedbackConstants.GET_FEEDBACKS_SUCCESS:
            return {
                ...state,
                feedbacks: merge({}, state.searchedBreed, action.payload)
            }
        case feedbackConstants.GET_FEEDBACKS_ERROR:
            return {
                ...state,
                feedbacks: []
            }
        case feedbackConstants.SUBMIT_FEEDBACK:
            return {
                ...state,
                feedbacks: concat(state.feedbacks, action.payload)
            }
        case feedbackConstants.UPDATE_FEEDBACK_STATUS:
            let filteredResult = state.feedbacks.filter((item) => item.id === action.payload.feedbackId)[0]
            filteredResult.status = action.payload.status

            let resultedArray = state.feedbacks.map(item => item.id === filteredResult.id ? filteredResult : item)
            return {
                ...state,
                feedbacks: resultedArray
            }
        default:
            return state
    }
}
