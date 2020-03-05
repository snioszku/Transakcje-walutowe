import { connect } from 'react-redux';
import TransactionsList from '../Components/TransactionsList';
import deleteTransaction from '../ActionCreators/deleteTransaction';

const mapStateToProps = state => ({
  transactions: state.AddorDeleteTansaction.reverse(),
});
// const mapDispatchToProps = dispatch => ({
//   deleteTransaction: id => dispatch(deleteTransaction(id)),
// });

const TransactionsListContainer = connect(mapStateToProps, {
  deleteTransaction,
})(TransactionsList);
export default TransactionsListContainer;
