import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { Panel, Input } from 'react-bootstrap';

const styles = {
  width: '80%',
  maxWidth: 500,
  margin: '10px auto',
};

class App extends Component {

  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange() {
    this.props.updateInput(this.refs.textField.getValue());
  }

  render() {
    return (
      <Panel header={ <h1>Bullshit Bingo</h1>} style={ styles } >
        <h3> Fun for the whole Kiron Family</h3>
      </Panel>
    );
  }
}

export default connect(
  state => state,
)(App);
