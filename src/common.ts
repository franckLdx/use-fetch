export interface Pending {
  state: 'nothing' | 'loading'
  response: undefined,
  error: undefined,
}

export interface Loading {
  state: 'loading';
  response: undefined,
  error: undefined,
}

export interface Loaded {
  state: 'loaded';
  response: unknown,
  error: undefined,
}

export interface Error {
  state: 'error';
  response: undefined,
  error: unknown,
}

export type State = Pending | Loading | Loaded | Error;

export type Action =
  | { type: 'LOADING' }
  | { type: 'LOADED', response: unknown }
  | { type: 'ERROR', error: unknown }

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'LOADING':
      return { state: 'loading', response: undefined, error: undefined };
    case 'LOADED':
      return { state: 'loaded', response: action.response, error: undefined };
    case 'ERROR':
      return { state: 'error', response: undefined, error: action.error };
    default:
      break;
  }
  return state;
}
