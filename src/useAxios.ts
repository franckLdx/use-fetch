import { useCallback, useReducer, useEffect, useMemo } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { reducer } from './common';

export function useAxios(initialConfig: AxiosRequestConfig) {
  const [state, dispatch] = useReducer(
    reducer,
    { state: 'nothing', response: undefined, error: undefined }
  );

  const setQuery = useCallback(
    (config: AxiosRequestConfig) => {
      dispatch({ type: 'LOADING' });
      axios(config)
        .then(response => dispatch({ type: 'LOADED', response }))
        .catch(error => dispatch({ type: 'ERROR', error }));
    },
    []
  );

  useEffect(
    () => {
      if (initialConfig) {
        setQuery(initialConfig);
      }
    },
    [initialConfig, setQuery]
  );

  return [state, setQuery];
}