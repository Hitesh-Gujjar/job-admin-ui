import api from "./axiosInterceptors";
import axios, { AxiosError, AxiosResponse } from "axios";

interface callGetApiTypes {
    url: string;
}

interface callPostApiTypes {
    url: string;
    data: any;
}

const callGetApi = async ({ url }: callGetApiTypes) => {
    const data = await api.get(url);

    return data;
};

const callPostApi = async (url: string, data: any) => {
    const response = await api.post(url, data);

    return response;
};

export { callGetApi, callPostApi };
