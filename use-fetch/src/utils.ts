export interface Loading {
  fetchState: 'loading';
  result: undefined,
}

export interface Loaded {
  fetchState: 'loaded';
  result: unknown,
}

export interface Error {
  fetchState: 'error';
  result: unknown,
}

export type State = Loading | Loaded | Error;

export type Action =
  | { type: 'LOADING' }
  | { type: 'LOADED', response: unknown }
  | { type: 'ERROR', error: unknown }

export const reducer = (fetchState: State, action: Action): State => {
  switch (action.type) {
    case 'LOADING':
      return { fetchState: 'loading', result: undefined };
    case 'LOADED':
      return { fetchState: 'loaded', result: action.response };
    case 'ERROR':
      return { fetchState: 'error', result: action.error };
    default:
      break;
  }
  return fetchState;
}
