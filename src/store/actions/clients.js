import data from '../../assets/Data/clients.json';
import * as actionTypes from './actionTypes';

export const setClients = (clients) => {
    return {
        type: actionTypes.SET_CLIENTS,
        clients: clients
    };
};

export const errorClients = (err) => {
    return {
        type: actionTypes.SET_ERROR_CLIENTS,
        errorMessage: err
    }
}
export const initClients = () => {
    try {
        return dispatch => dispatch(setClients(data));
    } catch (err) {
        return dispatch => dispatch(errorClients(err));
    }

};