import { useReducer, useEffect, useMemo } from 'react';
import { reducer, Action } from './utils';

export function useFetch(query: string) {
  const [state, dispatch] = useReducer(
    reducer,
    { fetchState: 'loading', result: undefined }
  );

  useEffect(
    () => { executeQuery(query, dispatch); },
    [query]
  );

  return [state.fetchState, state.result];
}

const executeQuery = async (query: string, dispatch: React.Dispatch<Action>) => {
  try {
    dispatch({ type: 'LOADING' });
    const raw = await fetch(query);
    if (!raw.ok) {
      dispatch({ type: 'ERROR', error: raw });
      return;
    }
    const response = await raw.json();
    dispatch({ type: 'LOADED', response });
  } catch (error) {
    dispatch({ type: 'ERROR', error });
  }
};
