import { connect } from 'react-redux';
import TransactionsList from '../Components/TransactionsList';
import deleteTransaction from '../ActionCreators/deleteTransaction';

const mapStateToProps = state => ({
  transactions: state.AddorDeleteTansaction,
});
const mapDispatchToProps = dispatch => ({
  deleteTransaction: id => dispatch(deleteTransaction(id)),
});

const TransactionsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TransactionsList);
export default TransactionsListContainer;
