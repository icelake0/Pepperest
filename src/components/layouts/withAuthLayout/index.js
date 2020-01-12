import React, { Component } from 'react';

export default function withAuthLayout(WrappedComponent, data = {}) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        ...data
      };
    }

    render() {
      return (
        <div className="max-content">
          <div className="auth">
            <div className="auth-logo">
              <img src="/assets/images/logo.png" alt="logo" />
            </div>
            <WrappedComponent {...this.props} />
          </div>
        </div>
      );
    }
  };
}
