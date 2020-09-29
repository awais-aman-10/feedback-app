import * as constants from '../constants/feedback.js';

export const submitForm = (formValues) => (dispatch) => {
  console.log('sdks ', formValues)
  dispatch({type: constants.SUBMIT_FEEDBACK, payload: formValues});
};
