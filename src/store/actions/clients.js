import data from '../../assets/Data/clients.json';
import axios from "../../axios-order";
import * as actionTypes from './actionTypes';

export const setClients = (clients) => {
    return {
        type: actionTypes.SET_CLIENTS,
        clients: clients
    };
};

export const errorClients = (err) => {
    return {
        type: actionTypes.SET_ERROR_CLIENTS
    }
}
export const initClients = () => {
    return dispatch => axios.get('https://list-clients.firebaseio.com/lists.json')
        .then( response => {
            dispatch(setClients(response.data));
        })
        .catch( error => {
            dispatch(errorClients());
        });
};