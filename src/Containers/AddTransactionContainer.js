import { connect } from 'react-redux';
import AddTransaction from '../Components/AddTransaction';
import addNewTransaction from '../ActionCreators/addNewTransaction';
import FetchRate from '../ActionCreators/FetchRate';
import React, { Component } from 'react';

class AddTransactionContainer extends Component {
  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate(prevProps) {
    if (
      JSON.stringify(this.props.CurrencyRate) !==
      JSON.stringify(prevProps.CurrencyRate)
    ) {
      this.fetchData();
    }
  }

  fetchData() {
    const { FetchRate } = this.props;
    FetchRate();
  }

  render() {
    const { addNewTransaction, CurrencyRate, Errors } = this.props;
    // if (isFetching && !todos.length) {
    //   return <p>Loading...</p>;
    // }
    // if (errorMessage && !todos.length) {
    //   return (
    //     <FetchError message={errorMessage} onRetry={() => this.fetchData()} />
    //   );
    // }

    return (
      <AddTransaction
        addNewTransaction={addNewTransaction}
        CurrencyRate={CurrencyRate}
        Errors={Errors}
      />
    );
  }
}

const mapStateToProps = ({ CurrencyRate, Errors }) => ({
  CurrencyRate,
  Errors,
});

const mapDispatchToProps = dispacht => ({
  addNewTransaction: id => dispacht(addNewTransaction(id)),
  FetchRate: () => dispacht(FetchRate()),
});
AddTransactionContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddTransactionContainer);
export default AddTransactionContainer;
