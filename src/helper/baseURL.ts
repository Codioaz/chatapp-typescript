import axios from 'axios';

export const baseURL = axios.create({
    baseURL:'https://b494c23919ed.ngrok.io/api/v1/'
});

