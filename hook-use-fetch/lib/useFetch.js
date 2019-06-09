var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useReducer, useEffect } from 'react';
import { reducer } from './utils';
export function useFetch(query) {
    const [state, dispatch] = useReducer(reducer, { fetchState: 'loading', result: undefined });
    useEffect(() => { executeQuery(query, dispatch); }, [query]);
    return [state.fetchState, state.result];
}
const executeQuery = (query, dispatch) => __awaiter(this, void 0, void 0, function* () {
    try {
        dispatch({ type: 'LOADING' });
        const raw = yield fetch(query);
        if (!raw.ok) {
            dispatch({ type: 'ERROR', error: raw });
            return;
        }
        const response = yield raw.json();
        dispatch({ type: 'LOADED', response });
    }
    catch (error) {
        dispatch({ type: 'ERROR', error });
    }
});
