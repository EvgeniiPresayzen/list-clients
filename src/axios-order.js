import axios from 'axios';

const instance =  axios.create({
    baseURL: 'https://list-clients.firebaseio.com/'
});

export default instance;