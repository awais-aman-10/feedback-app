import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import FeedbackTable from '../components/feedbackTable'

class FeedbackList extends PureComponent {
  render() {
    const { feedbacks } = this.props
    return (
      <div>
        <FeedbackTable feedbacks={feedbacks} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
    feedbacks: state.feedbackReducer.feedbacks
})

export default connect(mapStateToProps)(FeedbackList)
