import SumOfTransaction from '../Components/SumOfTransaction';
import { connect } from 'react-redux';

const getSum = arr => {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr
      .map(item => item.exchanged)
      .reduce((prev, curr) => prev + curr)
      .toFixed(2);
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
