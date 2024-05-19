import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5000/job-portal/admin',
    timeout: 5000, // Adjust timeout as needed
})

api.interceptors.request.use(
    ({ ...config }: any) => {

        // Ensure headers are initialized if not present
        if (!config.headers) {
            config.headers = {};
        }
        const isUser = localStorage.getItem('job-token');

        // Add common headers here if needed
        config.headers['Authorization'] = `Bearer ${isUser}`;
        return config;
    },
    (error: AxiosError) => {
        // Handle request error
        console.error('Request error:', error);
        return Promise.reject(error);
    }
);

// Response interceptor
api.interceptors.response.use(
    (response: AxiosResponse) => {
        // Handle successful response
        console.log('Response received:', response.data);
        return response;
    },
    (error: AxiosError) => {
        // Handle response error
        console.error('Response error:', error);
        return Promise.reject(error);
    }
);

export default api;
