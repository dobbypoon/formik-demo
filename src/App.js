import React, { Component } from 'react';
import { connect } from 'react-redux';

import RegisterForm from './form';
import './App.css';

const mapStateToProps = state => ({
  ...state.formReducer
})

class App extends Component {

  render() {
    return (
      <div className="formik-demo">
        <div className="state">
          {/* {
            JSON.stringify(this.props)
          } */}
          <ul>
            Members:
            {this.props.members.map((member, i) => <li key={i}>{member.fullName}</li>)}
          </ul>
          <ul>
            Vote:
            {Object.keys(this.props.voteCounter).map((key, i) => (
              <li key={i}>
                <span>{key}: {this.props.voteCounter[key]}</span>
              </li>
            ))}
          </ul>
        </div>
        <RegisterForm />
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(App);

