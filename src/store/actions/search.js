import * as actionTypes from './actionTypes';

export const getSearch = (value) => {
    return {
        type: actionTypes.SEARCH,
        value: value
    };
};