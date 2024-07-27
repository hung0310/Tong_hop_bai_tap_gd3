import axios from 'axios';

const base_url = 'https://qt.levanlau.net/api';

export const getDataBlog = async () => {
    const rsp = await axios.get(`${base_url}/blog/blog_category_level_1_get_all_not_auth_api`);
    return rsp.data;
};

export const postDataLogin = async (username, password) => {
    console.log(username + " " + password);
    try {
        const rsp = await axios.post(`${base_url}/auth/login/`, {
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

export const getDataBlogAllAPI = async (accessToken) => {
    try {
        const rsp = await axios.get(`${base_url}/blog/blog_category_level_1_get_all_api`, {
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