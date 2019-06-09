export interface Loading {
    fetchState: 'loading';
    result: undefined;
}
export interface Loaded {
    fetchState: 'loaded';
    result: unknown;
}
export interface Error {
    fetchState: 'error';
    result: unknown;
}
export declare type State = Loading | Loaded | Error;
export declare type Action = {
    type: 'LOADING';
} | {
    type: 'LOADED';
    response: unknown;
} | {
    type: 'ERROR';
    error: unknown;
};
export declare const reducer: (fetchState: State, action: Action) => State;
