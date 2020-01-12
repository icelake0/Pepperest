import React, {Component} from  'react'

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
                <div className="max-content">
                    <WrappedComponent {...this.props} />
                </div>
            );
        }
    }
}