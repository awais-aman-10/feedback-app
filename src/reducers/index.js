import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import feedbackReducer from './feedbackReducer.js';

const rootReducer = combineReducers({
    feedbackReducer,
    form: formReducer
});

export default rootReducer;
