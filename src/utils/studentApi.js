import axios from 'axios';
import { base_url, blog_auth_api, blog_not_auth_api, blog_delete_data, login } from '../Apis/constantsApi';

const axiosInstance = axios.create({
    baseURL: base_url,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const GetAll_WithoutToken = async () => {
    try {
        const rsp = await axiosInstance.get(blog_not_auth_api);
        return rsp.data;
    } catch (error) {
        console.error('Error:', error.message || error.response);
        throw error;
    }
};

export const GetAll_WithToken = async (accessToken) => {
    try {
        const rsp = await axiosInstance.get(blog_auth_api, {
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

export const postDataLogin = async (username, password) => {
    try {
        const rsp = await axiosInstance.post(login, {
            username,
            password
        });
        if (rsp.data && rsp.data.access) {
            return rsp.data.access;
        } else {
            throw new Error('Đăng nhập thất bại');
        }
    } catch (error) {
        console.error('Error:', error.message || error.response);
        throw error;
    }
};

export const deleteData = async (postID, accessToken) => {
    try {
        const rsp = await axiosInstance.delete(`${blog_delete_data}${postID}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        });
        return rsp.data;
    } catch (error) {
        console.error('Error:', error.message || error.response);
        throw error;
    }
};