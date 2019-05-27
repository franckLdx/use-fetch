import { useCallback, useReducer, useEffect, useMemo } from 'react';
import { reducer } from './common';

export function useFetch(initialQuery: string) {
  const [state, dispatch] = useReducer(
    reducer,
    { state: 'nothing', response: undefined, error: undefined }
  );

  const setQuery = useCallback(
    (query: string) => {
      dispatch({ type: 'LOADING' });
      fetch(query)
        .then(response => {
          dispatch({ type: 'LOADED', response });
        })
        .catch(error => dispatch({ type: 'ERROR', error }));
    },
    []
  );

  useEffect(
    () => {
      if (initialQuery) {
        setQuery(initialQuery);
      }
    },
    [initialQuery, setQuery]
  );

  return [state, setQuery];
}
