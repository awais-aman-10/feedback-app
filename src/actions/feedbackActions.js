import * as constants from '../constants/feedback.js';
import { notification } from 'antd';

export const submitForm = (formValues) => (dispatch) => {
  dispatch({ type: constants.SUBMIT_FEEDBACK, payload: formValues });
  notification.success({ message: 'Feedback successfully submitted' });
};
