import React, { Component } from 'react';
import { Header, HeaderAlternate } from 'components/shared';

export default function withDefaultLayout(WrappedComponent, data = {}) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        ...data,
        ...props,
      };
    }

    render() {
      return (
        <>
          <Header />
          {this.state.hasAlternateHeader ? (
            <HeaderAlternate
              links={this.state.links}
              page={this.state.page}
              location={this.state.location}
            />
          ) : null}
          <div className="max-content">
            <WrappedComponent {...this.props} />
          </div>
        </>
      );
    }
  };
}
