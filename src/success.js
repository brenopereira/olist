import React, { Component } from 'react';
import './index.css';

class SuccessPage extends Component {

  render() {
    return (
        <div className="app" style={{margin: 40}}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <div className="containerForm">
                  <div className="contentLogo"> 
                    <h1 className="logo">olist</h1>
                  </div>
                  <div className="contentMessage">
                    <i className="fa fa-check" />
                    <h3>Tudo certo</h3>
                    <p>Verifique sua caixa de entrada para confirmar seu e-mail</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default SuccessPage;
