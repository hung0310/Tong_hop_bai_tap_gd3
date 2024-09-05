export const SET_QUERY = 'SET_QUERY';
export const SET_ID = 'SET_ID';

export const setQuery = (query) => ({
    type: SET_QUERY,
    payload: query
})

export const setID = (id_blog) => ({
    type: SET_ID,
    payload: id_blog
}) 