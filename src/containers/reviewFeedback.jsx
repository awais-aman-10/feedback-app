import React, { Component } from 'react'
import { connect } from 'react-redux'
import FeedbackShow from '../components/feedbackShow'
import PageLayout from '../components/pageLayout'
import { updateFeedbackStatus } from '../actions/feedbackActions'

class ReviewFeedback extends Component {

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

const mapStateToProps = (state, ownProps) => {
  const feedbackId = parseInt(ownProps.match.params.feedback_id)
  return {
    feedback: state.feedbackReducer.feedbacks.filter(item => item.id === feedbackId)
  }
}

const mapDispatchToProps = dispatch => {
    return {
        updateFeedbackStatus: (feedbackId, status) => {
            dispatch(updateFeedbackStatus(feedbackId, status))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewFeedback)
