import {post,get} from './apiFun';

export const requestLogin = params => { return post('login', params) };

export const getUserList = params => { return get(`userList`, { params: params }); };

export const getUserListPage = params => { return get(`userListPage`, { params: params }); };

export const removeUser = params => { return get(`userRemove`, { params: params }); };

export const batchRemoveUser = params => { return get(`userBatchRemove`, { params: params }); };

export const editUser = params => { return get(`userEdit`, { params: params }); };

export const addUser = params => { return get(`userAdd`, { params: params }); };