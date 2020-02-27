const DELETE_TRANSACTION = 'DELETE_TRANSACTION';

const deleteTransaction = id => ({ type: DELETE_TRANSACTION, id });

export default deleteTransaction;
