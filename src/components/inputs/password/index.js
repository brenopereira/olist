import React, { Component }from 'react'
import AlertComponent from './../alert';

import './password.css'

class Password extends Component {

  constructor(props){
    super(props);

    this.state = {
      password: '',
      password_confirm: '',
      strength: 0,
      validator: false,
      numbers: 0,
      characters: 0,
      uppercases: 0
    };

    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangePasswordConfirm = this.handleChangePasswordConfirm.bind(this);

  }

  handleChangePassword = (e) => {

    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
      strength: this.state.numbers + this.state.uppercases + this.state.characters
    })

    if(e.target.value.length >= 6){
      this.setState({
        characters: 33.33
      });
    } else {
      this.setState({
        characters: 0
      });
    }
    
    if(/\d/.test(e.target.value)){
      this.setState({
        numbers: 33.33
      });
    } else {
      this.setState({
        numbers: 0
      });
    }
    
    if(/[A-Z]/.test(e.target.value)){
      this.setState({
        uppercases: 33.33
      });
    } else {
      this.setState({
        uppercases: 0
      });
    }
  } 

  handleChangePasswordConfirm = (e) => {
    if(this.state.password === e.target.value){
      this.setState({
        error: '',
        [e.target.name]: [e.target.value]
      });
    } else {
      this.setState({
        error: 'Senha não são similares'
      });
    }
  }

  render(){
    const ProgressBar = () => {
      if(this.state.strength === 0){
        return (
          <div className="password-strength" style={{backgroundColor: '#909095', width: `${this.state.strength}%`}}></div>
        );
      }
      if(this.state.strength >= 1 && this.state.strength <= 33.33){
        return (
          <div className="password-strength" style={{backgroundColor: '#f79682', width: `${this.state.strength}%`}}></div>
        );
      }
      if(this.state.strength >= 34 && this.state.strength <= 66.66){
        return (
          <div className="password-strength" style={{backgroundColor: '#f7bc1c', width: `${this.state.strength}%`}}></div>
        );
      }
      if(this.state.strength >= 66.67 && this.state.strength <= 100){
        return (
          <div className="password-strength" style={{backgroundColor: '#1fe6a8', width: `${this.state.strength}%`}}></div>
        );
      } 

      return (
        <div className="password-strength" style={{width: `${this.state.strength}%`}} />
      );
    }

    const RulesList = this.props.rules.map(function(rule, index){

      // Nenhum está preenchido
      if(this.state.characters === 0 && this.state.numbers === 0 && this.state.uppercases === 0 && rule.rule_type === 'characters'){
        return <li className="none" key={index}>{rule.title}</li>
      } 

      // Caso os demais campos estejam preenchidos e ele não
      if(this.state.characters === 0 && this.state.numbers === 33.33 && this.state.uppercases === 33.33 && rule.rule_type === 'characters'){
        return <li className="fail" key={index}>{rule.title}</li>
      }

      // Caso o campo esteja preenchido
      if(this.state.characters === 33.33 && rule.rule_type === 'characters'){
        return <li className="success" key={index}>{rule.title}</li>
      }

      
      // Nenhum está preenchido
      if(this.state.numbers === 0 && this.state.characters === 0 && this.state.uppercases === 0 && rule.rule_type === 'number'){
        return <li className="none" key={index}>{rule.title}</li>
      } 

      // Caso os demais campos estejam preenchidos e ele não
      if(this.state.numbers === 0 && this.state.characters === 33.33 && this.state.uppercases === 33.33 && rule.rule_type === 'number'){
        return <li className="fail" key={index}>{rule.title}</li>
      }
      
      // Caso o campo esteja preenchido
      if(this.state.numbers === 33.33 && rule.rule_type === 'number'){
        return <li className="success" key={index}>{rule.title}</li>
      }


      // Nenhum está preenchido
      if(this.state.uppercases === 0 && this.state.characters === 0 && this.state.numbers === 0 && rule.rule_type === 'uppercase'){
        return <li className="none" key={index}>{rule.title}</li>
      } 
      
      // Caso os demais campos estejam preenchidos e ele não
      if(this.state.uppercases === 0 && this.state.characters === 33.33 && this.state.numbers === 33.33 && rule.rule_type === 'uppercase'){
        return <li className="fail" key={index}>{rule.title}</li>
      }
      
      // Caso o campo esteja preenchido
      if(this.state.uppercases === 33.33 && rule.rule_type === 'uppercase'){
        return <li className="success" key={index}>{rule.title}</li>
      }

      return <li className="none" key={index}>{rule.title}</li>

    }.bind(this));

    const ErroComponent = () => {
      if(this.state.error){
        return <AlertComponent type="danger" message={this.state.error} />;
      } 
      return null;
    }

    return (
        <div className="inputsPassword">
          <div className="password">
            <div className="form-group ">
              <label htmlFor="inputPassword" className="col-form-label">Senha</label>
              <input
                style={{borderColor: this.props.active ? '#1fe6a8' : ''}}
                autoComplete="new-password"
                type="password"
                className="form-control col-form-input"
                name="password"
                value={this.props.password}
                onChange={(e) => {this.props.onChange(e); this.handleChangePassword(e)}}
                placeholder="Digite a sua senha"
              /> 
            </div>
            <div>
              <div className="password-strength-container">
                <ProgressBar />
              </div>
              <ul className="password-strength-steps">
                {RulesList}
              </ul>
            </div>
          </div>
          <div className="passwordConfirm">
            <div className="form-group ">
              <label htmlFor="inputPassword" className="col-form-label">Confirme sua senha</label>
              <input
                style={{borderColor: this.props.active ? '#1fe6a8' : ''}}
                autoComplete="new-password-confirm"
                type="password"
                className="form-control col-form-input"
                name="password_confirm"
                value={this.props.password_confirm}
                onChange={(e) => {this.props.onChange(e); this.handleChangePasswordConfirm(e)}}
                placeholder={"Digite a sua senha novamente"}
              />
              <ErroComponent />
            </div>
          </div>
        </div>
    );
  }
}

export default Password;
