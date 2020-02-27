const AddorDeleteTansaction = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return [
        ...state,
        {
          title: action.transaction.title,
          amount: parseFloat(action.transaction.amount),
          currency: parseFloat(action.transaction.currency),
          exchanged: parseFloat(
            (
              parseFloat(action.transaction.amount) *
              parseFloat(action.transaction.currency)
            ).toFixed(2),
          ),
          id: action.id,
        },
      ];
    case 'DELETE_TRANSACTION':
      return state.filter(t => t.id !== action.id);
    default:
      return state;
  }
};

export default AddorDeleteTansaction;
