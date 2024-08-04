import axios from 'axios';

export const GetAll_WithoutToken = async (blog_not_auth_api) => {
    try {
        const rsp = await axios.get(blog_not_auth_api);
        return rsp.data;
    } catch (error) {
        console.error('Error:', error.message || error.response);
        throw error;
    }
};

export const GetAll_Post_Not_auth_API = async (blog_post_get_all_not_auth_api, page) => {
    try {
        const rsp = await axios.get(`${blog_post_get_all_not_auth_api}?page=${page}`);
        return rsp.data;
    } catch(error) {
        throw error;
    }
};

export const GetAll_WithToken = async (blog_auth_api, accessToken) => {
    try {
        const rsp = await axios.get(blog_auth_api, {
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

export const postDataLogin = async (login, username, password) => {
    try {
        const rsp = await axios.post(login, {
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

export const deleteData = async (blog_delete_data) => {
    try {
        const rsp = await axios.delete(blog_delete_data);
        return rsp.data;
    } catch (error) {
        console.error('Error:', error.message || error.response);
        throw error;
    }
};