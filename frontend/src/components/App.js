import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { Row, Col, Panel } from 'react-bootstrap';
import Box from './Box';

const styles = {
  width: '95%',
  //maxWidth: 500,
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
          <Row>
            <Col xsOffset={1}>
              <Box word="thisword1"/>
              <Box word="thisword2"/>
              <Box word="thisword3"/>
              <Box word="thisword4"/>
              <Box word="thisword5"/>
          </Col>
        </Row>
        <Row>
          <Col xsOffset={1}>
            <Box word="thisword1"/>
            <Box word="thisword2"/>
            <Box word="FREE WORD"/>
            <Box word="thisword4"/>
            <Box word="thisword5"/>
        </Col>
        </Row>
        <Row>
          <Col xsOffset={1}>
            <Box word="thisword1"/>
            <Box word="thisword2"/>
            <Box word="thisword3"/>
            <Box word="thisword4"/>
            <Box word="thisword5"/>
        </Col>
      </Row>
      </Panel>
    );
  }
}

export default connect(
  state => state,
)(App);
