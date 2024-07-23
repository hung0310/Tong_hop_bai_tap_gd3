import axios from 'axios';

const base_url = 'https://qt.levanlau.net/api';

export const getData = async () => {
    const rsp = await axios.get(`${base_url}/blog/blog_category_level_1_get_all_not_auth_ap`);
    return rsp.data;
};