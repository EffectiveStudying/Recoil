import axios, { Axios, AxiosError } from 'axios';
import { User } from 'types';
import { authInstance, instance } from './api';

export type createUserRequest = {
    username: string;
    email: string;
    password: string;
};

export type UserError = {
    username?: string[];
    email?: string[];
    password?: string[];
};

type Error = {
    errors: UserError;
};

export const createUser = async (user: createUserRequest): Promise<User | Error> => {
    try {
        const result = await instance.post('/users', { user });
        return result.data.user;
    } catch (e) {
        if (axios.isAxiosError(e)) {
            return e.response?.data;
        }
        return { errors: {} };
    }
};

export type signinRequest = {
    email: string;
    password: string;
};

export const signin = async (user: signinRequest): Promise<User | Error> => {
    try {
        const result = await instance.post('/users/login', { user });
        return result.data.user;
    } catch (e) {
        if (axios.isAxiosError(e)) {
            return e.response?.data;
        }
        return { errors: {} };
    }
};

export const currentUser = async (): Promise<User | Error> => {
    try {
        const result = await authInstance.get('/user');
        return result.data.user;
    } catch (e) {
        if (axios.isAxiosError(e)) {
            return e.response?.data;
        }
        return { errors: {} };
    }
};
