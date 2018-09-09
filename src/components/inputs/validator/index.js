import React, { Component }from 'react'
import './validator.css';

// Classe para validar via props rules
// Criado por Breno Pereira
class Validator extends Component {

  constructor(props) {
    super(props);

    this.state = {
      rules: this.props.rules,
      validate: false
    };
  }

  onPasswordComplete = () => {
    
  };

  handleChange = () => {
    let variations = {}
    
    this.props.rules.map(function(rule, index){
      
      if(rule.rule_type === 'characters'){
        if(this.props.password[0].length >= rule.rule_count){
          variations['character'] = true;
        } else {
          variations['character'] = false;
        }
      }

      if(rule.rule_type === 'number'){
        variations['number'] = /\d/.test(this.props.password[0]);
      }

      if(rule.rule_type === 'uppercase'){
        variations['uppercase'] = /[A-Z]/.test(this.props.password[0]);
      }

      let countVerifications = 0;

      for (let check in variations) {
        if(variations[check] == true){
          countVerifications++;
        } else {
          countVerifications = 0;
        }
      }
      
      this.setState({
        isValid: countVerifications >= true,
        password: this.props.password
      }, () => {
        if (this.props.onChange !== null) {
          this.props.onChange(this.state, countVerifications);
        }
      });

    }.bind(this));
  }

  render(){
    const RulesComponent = () => this.props.rules.map(function(rule, index){
      return (
        <li key={index}>
          { rule.title }
        </li>    
      );
    });

    return (
      <div>
        <div className="password-strength-container">
          <div className="password-strength" style={{backgroundColor: '#1fe6a8', width: `${this.props.strength}%`}} />
        </div>
        <ul className="password-strength-steps">
          <RulesComponent />
        </ul>
      </div>
    );
  }

}

export default Validator;
