import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import User from "./components/User";

class App extends Component {
  render() {
    return (
      <div className="App">
          <User userData={this.props.user$} />
          <button onClick={() => this.props.setName('Redux Tutorials')}>Change Name In Redux Store</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    salary$: state.salary$,
    user$: state.user$
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch({
        type: 'setName',
        payload: name
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
