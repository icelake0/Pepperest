import React, {Component, Fragment } from  'react'
import {Header} from 'components/shared';

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
                <div className="max-content">
                  <WrappedComponent {...this.props} />
                </div>
              </Fragment>
            );
        }
    }
}