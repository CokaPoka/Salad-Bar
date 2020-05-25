import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../../Service/AuthService';

const PrivateRoute = (props) => (
    <Route {...props.routeProps} render={() => (
        isLogin() ? (
            <div>{props.children}</div>
        ) : (
                <Redirect to="/" />)
    )} />
);

export default PrivateRoute;