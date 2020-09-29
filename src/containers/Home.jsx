import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import PageLayout from './pageLayout'
import FeedbackForm from './feedbackForm'
import FeedbackList from './feedbackList'

class Home extends PureComponent {
    render() {
        const { loggedInUser } = this.props
        return (
            <PageLayout>
                { loggedInUser.role === 'manager' ?
                    <FeedbackList />
                    :
                    <FeedbackForm />
                }
            </PageLayout>
        )
    }
}


const mapStateToProps = state => ({
    loggedInUser: state.authReducer.loggedInUser
})

export default connect(mapStateToProps)(Home)
