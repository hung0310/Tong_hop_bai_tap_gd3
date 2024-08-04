import * as url from '../Apis/constantsApi';
import * as method_axios from '../utils/AxiosUtils';

export const GetData_Without_Token = () => {
    return method_axios.GetAll_WithoutToken(url.blog_not_auth_api);
};

export const GetData_With_Token = (accessToken) => {
    return method_axios.GetAll_WithToken(url.blog_auth_api, accessToken);
}

export const GetData_Not_auth_API = (page) => {
    return method_axios.GetAll_Post_Not_auth_API(url.blog_post_get_all_not_auth_api, page);
};

export const PostData_Login = (username, password) => {
    return method_axios.postDataLogin(url.login, username, password);
};

export const DeleteData = () => {
    return method_axios.deleteData(url.blog_delete_data);
};