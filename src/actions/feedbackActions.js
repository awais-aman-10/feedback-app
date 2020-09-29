import { notification } from 'antd'
import { SUBMIT_FEEDBACK, UPDATE_FEEDBACK_STATUS } from '../constants/feedback.js'
import history from '../RouteHistory'

export const submitForm = (formValues) => (dispatch) => {
  dispatch({ type: SUBMIT_FEEDBACK, payload: formValues })
  notification.success({ message: 'Feedback successfully submitted' })
}

export const updateFeedbackStatus = (feedbackId, status) => (dispatch) => {
  dispatch({ type: UPDATE_FEEDBACK_STATUS, payload: { feedbackId: feedbackId, status: status } })
  notification.success({ message: `Feedback ${status}` })
  history.push('/feedbacks')
}
