import np from 'nprogress';
import 'nprogress/nprogress.css'
import axios from 'axios';

import urlList from './apiList';

np.configure({ showSpinner: false });

const getUrl = key =>{
    return urlList.hasOwnProperty(key) ? urlList[key] : '';
}

const common = (key, fun) => {
    try {
        np.start();
        let path = getUrl(key);
        if(path){
            return fun(path);
        } else {
            return Promise.reject({
                status: 404,
                statusText: 'Url is undefined',
                message: '当前请求的接口不存在'
            });
        }
    } finally {
        np.done();
    }
}

export const post = (key, params) => {
    return common(key, path => {
        return axios.post(path, params);
    })
};
export const get = (key, params) => {
    return common(key, path => {
        return axios.get(path, params);
    })
};