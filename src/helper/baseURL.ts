import axios from 'axios';

export const baseURL = axios.create({
    baseURL: 'http://02565f6f4a89.ngrok.io/api/v1/'
});

