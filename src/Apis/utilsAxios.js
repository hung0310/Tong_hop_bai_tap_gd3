import axios from 'axios';

const base_url = 'https://qt.levanlau.net/api';

export const GetAll_WithoutToken = async () => {
    try {
        const rsp = await axios.get(`${base_url}/blog/blog_category_level_1_get_all_not_auth_api`);
        return rsp.data;
    } catch (error) {
        console.error('Error:', error.message || error.response);
        throw error;
    }
};

export const GetAll_WithToken = async (accessToken) => {
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