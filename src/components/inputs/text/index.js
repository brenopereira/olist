import React, {Component}from 'react'
import './text.css'

class Text extends Component {

  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handlePasswordPassed = this.handlePasswordPassed.bind(this);
    this.handlePasswordValidate = this.handlePasswordValidate.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: [e.target.value]
    });
  };

  handlePasswordPassed = () => {};
  handlePasswordValidate = () => {};

  render(){
    return (
      <div className="form-group">
        <label htmlFor={"inputText-" + this.props.name} className="col-form-label">{this.props.label}</label>
        <input
          style={{borderColor: this.props.active ? '#1fe6a8' : ''}}
          id={"inputText-" + this.props.name}
          autoComplete={"inputText-" + this.props.name}
          type="text"
          className="form-control col-form-input"
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.onChange}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

export default Text;
