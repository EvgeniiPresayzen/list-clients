import * as actionTypes from '../actions/actionTypes';

const initialState = {
    clients: []
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_CLIENTS:
            return {
                ...state,
                clients: action.clients
            };
        default: return state;
    }

};

export default reducer;