import React, {Component} from 'react'

export default class AlertComponent extends Component {
  render(){
    return ( 
      <div className={'alert-panel alert alert-' + this.props.type}>
        <span>{this.props.message}</span>
      </div>
    );
  }
} 