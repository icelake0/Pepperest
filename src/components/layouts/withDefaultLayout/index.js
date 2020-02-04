import React, {Component, Fragment } from  'react'
import {Header, HeaderAlternate} from 'components/shared';

export default function withDefaultLayout(WrappedComponent, data = {}){
    return class extends Component{
        constructor(props){
            super(props);
            this.state = {
                ...data
            }
        }

        render(){
            return (
              <Fragment>
                <Header />
                {this.state.hasAlternateHeader ? (
                  <HeaderAlternate
                    links={this.state.links}
                    page={this.state.page}
                  />
                ) : null}
                <div className="max-content">
                  <WrappedComponent {...this.props} />
                </div>
              </Fragment>
            );
        }
    }
}