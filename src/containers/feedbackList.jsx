import React, { Component } from 'react'
import { connect } from 'react-redux'
import FeedbackTable from '../components/feedbackTable'

class FeedbackList extends Component {

  render() {
    const { feedbacks } = this.props
    return (
      <div>
        <FeedbackTable feedbacks={feedbacks} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    feedbacks: state.feedbackReducer.feedbacks
  }
}

export default connect(mapStateToProps, null)(FeedbackList)
