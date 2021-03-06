import * as actionTypes from '../actions/actionTypes';

const initialState = {
    clients: [],
    search: '',
    error: false
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_CLIENTS:
            return {
                ...state,
                clients: action.clients
            };
        case actionTypes.SET_ERROR_CLIENTS:
            return {
                ...state,
                error: true
            };
        case actionTypes.SEARCH:
            return {
                ...state,
                search: action.value
            };
        default: return state;
    }

};

export default reducer;