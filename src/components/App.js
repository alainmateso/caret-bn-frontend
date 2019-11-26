
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fireReduxAction } from '../actions/defaultAction';

class App extends Component {
  componentDidMount() {
    const { props } = this;
    props.fireReduxAction();
  }

  render() {
    const { props: { default: { text } } } = this;
    return (
      <div>
        <h1>Welcome to barefoot Nomad</h1>
        <h3>{text}</h3>
      </div>
    );
  }
}

App.propTypes = {
  fireReduxAction: PropTypes.func.isRequired,
  default: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  default: state.default,
});

export default connect(mapStateToProps, { fireReduxAction })(App);
