import axios from 'axios';
import { base_url, endPoints } from './apiEndpoint';

const axiosInstance = axios.create({
    baseURL: base_url,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const GetAll_WithoutToken = async () => {
    try {
        const rsp = await axiosInstance.get(endPoints.blog_not_auth_api);
        return rsp.data;
    } catch (error) {
        console.error('Error:', error.message || error.response);
        throw error;
    }
};

export const GetAll_WithToken = async (accessToken) => {
    try {
        const rsp = await axiosInstance.get(endPoints.blog_auth_api, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        return rsp.data;
    } catch (error) {
        console.error('Error:', error.message || error.response);
        throw error;
    }
};