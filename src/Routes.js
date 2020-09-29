import React, { Component } from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import history from './RouteHistory'

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => authed === true
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
        />
    )
}


class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path='/'
                        component={(props) => <Login {...props} {...props.location.state} />}
                    />
                    <PrivateRoute authed={this.props.loggedInUser && this.props.loggedInUser.email !== undefined } path='/home' component={(props) => <Home {...props} {...props.location.state} />} />
                    <Redirect to='/' />
                </Switch>
            </Router>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedInUser: state.authReducer.loggedInUser
    };
};

export default connect(mapStateToProps, null)(Routes);
