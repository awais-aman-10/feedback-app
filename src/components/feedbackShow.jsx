import React, { Component } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Input } from 'antd'

class FeedbackShow extends Component {

  render() {
    const { feedback } = this.props
    return (
      <div>
        <h2> Title: </h2>
        <Input
          defaultValue={feedback.title}
          disabled={true}
          className='input-field'
        />
        <br/>
        <Editor
          value={feedback.content}
          disabled={true}
          init={{
            height: 400,
            menubar: true,
            disabled: true
          }}
        />
        <div className='btn-area'>
          {
            (feedback.status === 'Pending' || feedback.status === 'Rejected') &&
              <button type='default' className='approve-btn btn' onClick={() => this.props.updateFeedbackStatus(feedback.id, 'Approved')}>Approve</button>
          }
          {
            (feedback.status === 'Pending' || feedback.status === 'Approved') &&
              <button type='default' className='reject-btn btn' onClick={() => this.props.updateFeedbackStatus(feedback.id, 'Rejected')}>Reject</button>
          }
        </div>
      </div>
    )
  }
}


export default FeedbackShow
