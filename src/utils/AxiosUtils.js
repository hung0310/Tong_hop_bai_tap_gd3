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

export const GetAll_Course_Category = async (course_category) => {
    try {
        const rsp = await axios.get(course_category);
        return rsp;
    } catch(error) {
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

export const GetAll_Post_Search = async (blog_post_search, content_search) => {
    try {
        const rsp = await axios.get(`${blog_post_search}?search=${content_search}`);
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

export const postComment = async (url_comment, fullname, phone, comment) => {
    try {
        const rsp = await axios.post(url_comment, {
            fullname,
            phone,
            comment,
        });
        return rsp.message;
    } catch (error) {
        console.error('Error:', error.message || error.response);
        throw error;
    }
};

export const GetView_Most = async (blog_view_most) => {
    try {
        const rsp = await axios.get(blog_view_most);
        return rsp;
    } catch(error) {
        throw error;
    } 
}; 