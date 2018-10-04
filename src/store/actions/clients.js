import data from '../../assets/Data/clients.json';
import * as actionTypes from './actionTypes';

export const setClients = (clients) => {
    return {
        type: actionTypes.SET_CLIENTS,
        clients: clients
    };
};
export const setDetails = (id) => {
    return {
        type: actionTypes.SET_DETAILS,
        personId: id
    };
};
export const initClients = () => {
    return dispatch => dispatch(setClients(data));
};