import React, { Component } from 'react';
import Text from './components/inputs/text'
import Password from './components/inputs/password'
import Button from './components/inputs/button'
import {Redirect} from 'react-router-dom'
import './index.css';


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      loading: false,
      fullname: '',
      email: '',
      password: '',
      active: false,
      redirect: false,
      validate: {
        fullname: false,
        email: false
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      active: true,
      loading: true
    });

    setTimeout(function(){
      this.setState({
        redirect: true
      });
    }.bind(this), 2000);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: [e.target.value]
    });
  }

  render() {

    if(this.state.redirect){
      return <Redirect to={'/success'} />
    }

    return (
        <div className="app" style={{margin: 40}}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <div className="containerForm">
                  <div className="contentLogo"> 
                    <h1 className="logo">olist</h1>
                    <h5>Crie sua conta</h5>
                  </div>
                  <form onSubmit={this.handleSubmit}>
                    <Text 
                      active={this.state.active}
                      name="fullname"
                      label="Nome completo"
                      placeholder="Digite seu nome completo"
                      onChange={this.handleChange}
                      value={this.state.fullname}
                      validated={this.state.validate.fullname}
                    />
                    <Text 
                      active={this.state.active}
                      name="email"
                      label="E-mail"
                      placeholder="Digite seu e-mail"
                      onChange={this.handleChange}
                      value={this.state.email}
                      validated={this.state.validate.email}
                    />
                    <Password
                      active={this.state.active}
                      rules={[
                        {
                          title: 'Pelo menos 6 caracteres',
                          rule_type: 'characters',
                          rule_count: 6
                        },
                        {
                          title: 'Pelo menos 1 letra maiúscula',
                          rule_type: 'uppercase',
                          rule_count: 1
                        },
                        {
                          title: 'Pelo menos 1 número',
                          rule_type: 'number',
                          rule_count: 1
                        }
                      ]}
                      onChange={this.handleChange}
                    />
                    <Button 
                      type="submit"
                      title="Criar conta"
                      loading={this.state.loading}
                    />   
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
