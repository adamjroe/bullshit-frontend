import React, { PropTypes, Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default function Box(props){
  return (
    <div className="top-margin">
        <Col xs={2}>
          <div>{ props.word }</div>
        </Col>
      </div>
    );
}

Box.propTypes = {
  word: PropTypes.string,
};
