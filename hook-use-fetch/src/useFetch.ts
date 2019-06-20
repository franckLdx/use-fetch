import { useReducer, useEffect, DependencyList } from 'react';
import { reducer, Action, FetchState } from './utils';

export function useFetch(query: string, dependencies: DependencyList): [FetchState, undefined | unknown] {
  const [state, dispatch] = useReducer(
    reducer,
    { fetchState: 'loading', result: undefined }
  );

  useEffect(
    () => { executeQuery(query, dispatch); },
    dependencies
  );

  return [state.fetchState, state.result];
}

const executeQuery = async (query: string | undefined | null, dispatch: React.Dispatch<Action>) => {
  try {
    dispatch({ type: 'LOADING' });
    if (!query) {
      return;
    }
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
