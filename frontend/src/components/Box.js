import React, { PropTypes, Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

export default function Box(props){
  return (
    <div className="top-margin">
        <Col xs={2}>
          <Button bsStyle="primary">{ props.word }</Button>
        </Col>
      </div>
    );
}

Box.propTypes = {
  word: PropTypes.string,
};
