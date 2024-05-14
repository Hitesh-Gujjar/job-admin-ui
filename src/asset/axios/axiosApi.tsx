import api from "./axiosInterceptors"
import axios, { AxiosError, AxiosResponse } from 'axios';

interface callGetApiTypes {
    url: string
}

interface callPostApiTypes {
    url: string
    data: any
}

const callGetApi = async ({ url }: callGetApiTypes) => {
    const data = await api.get(url);

    return data;
}

const loginApi = axios.create({
    baseURL: 'http://localhost:5000/job-portal/admin',
    timeout: 5000,
});

// Function to perform login and obtain a token
export const handleLoginAPi = async (data: any): Promise<string | null> => {
    try {
        const response = await loginApi.post('/user/login', data);
        const token = response.data.token;
        localStorage.setItem('token', token);
        return token;
    } catch (error) {
        console.error('Login error:', error);
        return null;
    }
};

export { callGetApi }