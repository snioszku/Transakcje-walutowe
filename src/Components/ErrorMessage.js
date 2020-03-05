import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ({ Errors }) => ({
  Errors,
});

const Errors = ({ Errors }) => {
  if (Errors) {
    return (
      <div>
        <p style={{ color: 'red' }}>{Errors.error} </p>
        {/* <button onClick={onRetry}>Retry</button> */}
      </div>
    );
  }
  return null;
};
const ErrorMessage = connect(mapStateToProps, null)(Errors);
export default ErrorMessage;
