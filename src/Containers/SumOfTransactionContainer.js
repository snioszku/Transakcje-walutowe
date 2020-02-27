import React from 'react';
import SumOfTransaction from '../Components/SumOfTransaction';
import { connect } from 'react-redux';

const getSum = arr => {
  if (arr.length === 0) {
    return 0;
  } else {
    return parseFloat(
      arr.map(item => item.exchanged).reduce((prev, curr) => prev + curr),
    );
  }
};

const mapStateToProps = ({ AddorDeleteTansaction }) => ({
  sum: getSum(AddorDeleteTansaction),
});

const SumOfTransactionContainer = connect(
  mapStateToProps,
  null,
)(SumOfTransaction);

export default SumOfTransactionContainer;
