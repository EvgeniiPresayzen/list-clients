import * as actionTypes from '../actions/actionTypes';

const initialState = {
    clients: [],
    details: []
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_CLIENTS:
            return {
                ...state,
                clients: action.clients
            };
        case actionTypes.SET_DETAILS:
            const updatedArray = state.clients.filter((client, index) => index === action.personId);
            const NewClient = updatedArray[0];
            return {
                ...state,
                details: NewClient
            };
        default: return state;
    }

};

export default reducer;