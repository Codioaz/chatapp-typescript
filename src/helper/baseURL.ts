import axios from 'axios';

export const baseURL = axios.create({
    baseURL:'http://63eecc8433d1.ngrok.io/api/v1/'
});

