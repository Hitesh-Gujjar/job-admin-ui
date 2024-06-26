import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/job-portal/admin",
  timeout: 5000, // Adjust timeout as needed
});

api.interceptors.request.use(
  ({ ...config }: any) => {
    const isUser = localStorage.getItem("job-token");
    if (isUser) {
      // Add common headers here if needed
      config.headers["Authorization"] = `Bearer ${isUser}`;
    }

    return config;
  },
  (error: AxiosError) => {
    // Handle request error
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

// // Response interceptor
// api.interceptors.response.use(
//   (response: AxiosResponse) => {
//     // Handle successful response
//     console.log("Response received:", response.data);
//     return response;
//   },
//   (error: AxiosError) => {
//     // Handle response error
//     console.error("Response error:", error);
//     return Promise.reject(error);
//   }
// );

api.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        // Handle errors globally
        if (error.response) {
            // Server responded with a status other than 2xx
            if (error.response.status === 401) {
                // Handle unauthorized errors (e.g., redirect to login)
                console.log('Unauthorized! Redirecting to login...');
            } else if (error.response.status === 500) {
                // Handle server errors
                console.log('Server error! Please try again later.');
            }
        } else if (error.request) {
            // No response was received from the server
            console.log('Network error! Please check your connection.');
        } else {
            // Something else happened while setting up the request
            console.log('Error', error.message);
        }
        return Promise.reject(error);
    }
);


export default api;
