import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Input } from 'antd'

export default (props) => {
  const { feedback, updateFeedbackStatus } = props

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
            <button type='default' className='approve-btn btn' onClick={() => updateFeedbackStatus(feedback.id, 'Approved')}>Approve</button>
        }
        {
          (feedback.status === 'Pending' || feedback.status === 'Approved') &&
            <button type='default' className='reject-btn btn' onClick={() => updateFeedbackStatus(feedback.id, 'Rejected')}>Reject</button>
        }
      </div>
    </div>
  )
}
