import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import FeedbackShow from '../components/feedbackShow'
import PageLayout from './pageLayout'
import { updateFeedbackStatus } from '../actions/feedbackActions'

class ReviewFeedback extends PureComponent {

  updateFeedbackStatus = (feedbackId, status) => {
    this.props.updateFeedbackStatus(feedbackId, status)
  }

  render() {
    const { feedback } = this.props
    return (
      <PageLayout>
        <FeedbackShow
          feedback={feedback[0]}
          updateFeedbackStatus={this.updateFeedbackStatus}
        />
      </PageLayout>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
    feedback: state.feedbackReducer.feedbacks.filter(item => item.id === parseInt(ownProps.match.params.feedback_id, 10))
})

const mapDispatchToProps = dispatch => ({
    updateFeedbackStatus: (feedbackId, status) => {
        dispatch(updateFeedbackStatus(feedbackId, status))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewFeedback)
