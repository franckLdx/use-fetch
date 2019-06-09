export const reducer = (fetchState, action) => {
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
};
