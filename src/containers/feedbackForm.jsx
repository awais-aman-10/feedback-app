import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Editor } from '@tinymce/tinymce-react'
import { Form, Input } from 'antd'

import { submitForm } from '../actions/feedbackActions'

class FeedbackForm extends Component {
  state = {
    content: ''
  }

  formRef = React.createRef()
  handleChange = content => {
    this.setState({ content: content })
  }

  handleSubmit = values => {
    let data = {
      id: this.props.feedbacks.length + 1,
      content: this.state.content,
      username: this.props.loggedInUser && this.props.loggedInUser.name,
      status: 'Pending',
      title: values.title
    }
    this.props.submitForm(data)
    this.formRef.current.resetFields()
  }

  render() {
    return (
      <div>
        <Form
          onFinish={this.handleSubmit}
          ref={this.formRef}
        >
          <h2>Submit feedback</h2>
          <h4>Provide a detailed feedback</h4>
          <Form.Item
            name='title'
            rules={[
              {
                required: true,
                message: 'Please input some title!',
              },
            ]}
          >
            <Input placeholder='Enter title here' />
          </Form.Item>
          <Form.Item
            name='content'
            rules={[
              {
                required: true,
                message: 'Please input some description!',
              },
            ]}
          >
            <Editor
              value={this.state.content}
              init={{
                height: 400,
                menubar: true
              }}
              onEditorChange={this.handleChange}
            />
          </Form.Item>

          <br />
          <Form.Item >
            <button className='form-submit' type='primary'>
              Submit
            </button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  feedbacks: state.feedbackReducer.feedbacks,
  loggedInUser: state.authReducer.loggedInUser
})

const mapDispatchToProps = dispatch => ({
    submitForm: (formValues) => {
      dispatch(submitForm(formValues))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackForm)
