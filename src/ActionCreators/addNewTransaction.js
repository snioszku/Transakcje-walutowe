const ADD_TRANSACTION = 'ADD_TRANSACTION';
let id = 0;

const addNewTransaction = transaction => ({
  type: ADD_TRANSACTION,
  transaction,
  id: id++,
});
export default addNewTransaction;
