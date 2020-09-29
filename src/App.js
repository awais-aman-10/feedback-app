import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Editor } from "@tinymce/tinymce-react";

import projectStore from './store.js';
import FeedbackForm from './components/feedbackForm'
import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { content: "" };
  }

  render () {
    return (
      <Provider store={projectStore}>
        <FeedbackForm />
      </Provider>
    )
  }
}

export default App;
