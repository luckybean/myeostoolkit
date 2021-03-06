/**
 *
 * VoteUs
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import submitAction from './actions';


export class VoteUs extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { handleSubmit } = this.props;
    return (
      <a href="#" onClick={handleSubmit}>Vote for GenerEOS</a>
    );
  }
}

VoteUs.propTypes = {
  //dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
});

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: () => dispatch(submitAction()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'VoteUs', reducer });
const withSaga = injectSaga({ key: 'VoteUs', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(VoteUs);
