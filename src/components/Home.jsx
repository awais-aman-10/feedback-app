import React, { Component } from 'react'
import { connect } from 'react-redux'
import PageLayout from './pageLayout'
import FeedbackForm from './feedbackForm'
import FeedbackList from '../containers/feedbackList'

class Home extends Component {

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


const mapStateToProps = (state) => {
    return {
        loggedInUser: state.authReducer.loggedInUser
    }
}

export default connect(mapStateToProps, null)(Home)
