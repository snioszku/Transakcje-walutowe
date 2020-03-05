const Errors = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_ERROR':
      return { error: action.message };
    default:
      return state;
  }
};
export default Errors;
