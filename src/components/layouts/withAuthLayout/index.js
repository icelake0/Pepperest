/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default function withAuthLayout(WrappedComponent, data = {}) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        ...data,
      };
    }

    render() {
      return (
        <div className="max-content">
          <div className="auth">
            <div className="auth-logo">
              <NavLink to="/">
                <img src="/assets/images/logo.png" alt="logo" />
              </NavLink>
            </div>
            <WrappedComponent {...this.props} />
          </div>
        </div>
      );
    }
  };
}
