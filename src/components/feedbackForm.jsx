import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Editor } from '@tinymce/tinymce-react';
import { submitForm } from '../actions/feedbackActions'
import '../styles.css';

class FeedbackForm extends Component {
  constructor(props) {
    super(props);
    this.state = { content: "" };
  }

  handleChange = (event) => {
    console.log(event)
    this.setState({ content: event });
  }

  handleSubmit = (event) => {
    this.props.submitForm(this.state.content)
  }

  render () {
    const { feedbacks } = this.props;
    console.log('feedbacks are ', feedbacks)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Introduction to Software Engineering</h2>
          <h3>Provide a course overview</h3>
          <Editor
            value={this.state.content}
            init={{
              height: 500,
              menubar: true
            }}
            onEditorChange={this.handleChange}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      feedbacks: state.feedbackReducer.feedbacks
    };
};

const mapDispatchToProps = dispatch => {
    return {
      submitForm: (formValues) => {
        dispatch(submitForm(formValues))
      }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackForm);
