import React, {Fragment} from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {authUser, updateUser} from "./store/actions/auth";
import Main from './pages/Main';
import Profile from "./components/Profile";
import AuthPage from "./pages/Auth";
import Project from "./components/Project";
import {User} from "./components/User";

const App = (props) => {
    const {authUser, errors, removeError, currentUser, updateUser} = props;
    return (<Fragment>
            <Route path='/auth' exact render={props => {
                return (<Main onAuth={authUser} errors={errors} {...props}/>)
            }
            }/>
            <Route path='/' exact render={props => {
                return (<AuthPage onAuth={authUser} errors={errors} {...props}/>)
            }
            }/>
            <Route path='/profile' render={props => {
                return (<Profile onAuth={authUser} errors={errors} {...props}/>)
            }
            }/>
            <Route path='/user' render={props => {
                return (<User onAuth={authUser} signUp errors={errors} {...props}/>)
            }
            }/>
            <Route path='/project' render={props => {
                return (<Project onAuth={authUser} error={errors} {...props}/>)
            }}/>
        </Fragment>
    )
};

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser,
        errors: state.errors
    };
}


export default withRouter(
    connect(mapStateToProps, {authUser, updateUser})(App)
);
