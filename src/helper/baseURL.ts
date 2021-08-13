import axios from 'axios';

export const baseURL = axios.create({
    baseURL:'http://35a917785d3b.ngrok.io/api/v1/'
});

