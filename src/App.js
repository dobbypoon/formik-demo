import React, { Component } from 'react';
import { connect } from 'react-redux';

import RegisterForm from './form';
import './App.css';

const mapStateToProps = state => ({
  ...state
})

class App extends Component {

  render() {
    return (
      <div className="formik-demo">
        <div className="state">
          {
            JSON.stringify(this.props)
          }
        </div>
        <RegisterForm />
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(App);

