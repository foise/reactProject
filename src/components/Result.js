import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

function Result(props) {
  return (
    <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
        Your score is <strong>{props.testResult}</strong> out of <strong>10</strong>!
      </div>
    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  testResult: PropTypes.number.isRequired
};

export default Result;
