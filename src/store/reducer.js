import * as actionTypes from './actions';

const initialState = {
    clients: []
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.CLIENTS_ADD:
            return {
                ...state,
                clients: state.clients.concat()
            }
    }
    return state;
};

export default reducer;