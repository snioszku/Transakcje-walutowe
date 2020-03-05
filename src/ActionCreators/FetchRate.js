const FetchRate = () => dispatch => {
  return fetch(`http://api.nbp.pl/api/exchangerates/tables/A?format=json`)
    .then(response => response.json())
    .then(
      response =>
        dispatch({
          type: 'FECHT_RATE',
          response,
        }),
      error => {
        dispatch({
          type: 'FETCH_ERROR',
          message: 'Could not fetch currency rate. Refresh page',
        });
      },
    );
};

export default FetchRate;

//import { getIsFetching } from '../Reducers/createList';

//   export const fetchTodos = filter => (dispatch, getState) => {
//     if (getIsFetching(getState(), filter)) {
//       return Promise.resolve();
//     }
//     dispatch({
//       type: 'FETCH_TODOS_REQUEST',
//       filter,
//     });
//     return api.fetchTodos(filter).then(
//       response => {
//         dispatch({
//           type: 'FETCH_TODOS_SUCCESS',
//           filter,
//           response,
//         });
//       },
//       error => {
//         dispatch({
//           type: 'FETCH_TODOS_FAILURE',
//           filter,
//           message: error.message || 'some error',
//         });
//       },
//     );
//   };
