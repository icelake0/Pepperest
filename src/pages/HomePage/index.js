import React , {Fragment}from 'react';
import {NavLink} from 'react-router-dom'


const HomePage = props => {
    return (
      <Fragment>
        <h2>Home page works</h2>
        <NavLink to="/payments">
            Go to payment
        </NavLink>
      </Fragment>
    );
}

export default HomePage;