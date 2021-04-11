import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { simpleAction } from './actions/simpleAction'
import RegisterForm from './form';
import './App.css';

// const mapDispatchToProps = dispatch => ({
//   simpleAction: () => dispatch(simpleAction())
// })

const mapStateToProps = state => ({
  ...state
})

class App extends Component {
  // simpleAction = (event) => {
  //   this.props.simpleAction();
  // }

  render() {
    return (
      <div className="App">
        <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>
        <RegisterForm />
        {/* <button onClick={this.simpleAction}>Test redux action</button> */}
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(App);

