const CurrencyRate = (state = {}, action) => {
  switch (action.type) {
    case 'FECHT_RATE':
      return {
        //...state,
        euro: action.response[0].rates[7].mid,
        funt: action.response[0].rates[10].mid,
        frank: action.response[0].rates[9].mid,
      };
    case 'FECHT_ERROR':
      return console.log(Error);
    default:
      return state;
  }
};

export default CurrencyRate;
