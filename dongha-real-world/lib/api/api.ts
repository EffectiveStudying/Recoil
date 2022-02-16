import axios, { AxiosRequestConfig } from 'axios';

const instance = axios.create({
    baseURL: 'https://api.realworld.io/api',
});

const authInstance = axios.create({
    baseURL: 'https://api.realworld.io/api',
});

authInstance.interceptors.request.use(function (config: AxiosRequestConfig) {
    const token = localStorage.getItem('token');
    if (!token) {
        return config;
    }
    if (!config.headers) {
        config.headers = {};
    }
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export { instance, authInstance };
