import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import feedbackReducer from './feedbackReducer.js';
import authReducer from './authReducer.js';

const rootReducer = combineReducers({
    authReducer,
    feedbackReducer,
    form: formReducer
});

export default rootReducer;
