import React, { Component }from 'react'

import './button.css'

class Button extends Component {
  render(){
    if(!this.props.loading){
      return (
        <div className="inputsButton">
          <div className="form-group ">
            <button 
              className="form-control button-submit"
              type={this.props.type
            }>
              {this.props.title}
            </button>
          </div>
        </div>
      );
    }

    if(this.props.loading){
      return (
        <div className="inputsButton">
          <div className="form-group ">
            <button 
              className="form-control button-submit"
              type={this.props.type
            }>
              Carregando...
            </button>
          </div>
        </div>
      );
    }

    return null;
  }
}

export default Button;
