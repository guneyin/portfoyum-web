import * as authStore from '@stores/auth';
import * as variables from '@api/variables';
import * as auth from '@api/auth';
import * as transactions from '@api/transactions';
import * as stats from '@api/stats';
import * as portfolio from '@api/portfolio';

async function send(method, path, data) {
    let url = import.meta.env.VITE_PUBLIC_BASE_PATH + path;

    var opts = { 
        method: method,
        mode: 'cors',
        credentials: 'include',
        withCredentials: true,
        cache: 'no-cache',
        headers: {},
    };

    if (data instanceof FormData) {
        //opts.headers['Content-Type'] = 'multipart/form-data';  
        opts.body = data;     
    } else if (!!data) {
        opts.headers['Content-Type'] = 'application/json';  
        opts.body = JSON.stringify(data); 
    }

    const authData = await authStore.data();

    if (!!authData.access_token) {
        opts.headers['Authorization'] = 'Bearer ' + authData.access_token;
    }

    const res = await fetch(url, opts);

    // if (res.status === 401) {
    //     res.redirect = '/';
    // };

    return res;
}

export async function get(path) {
    return await send('GET', path)
}

export async function post(path, data) {
    return await send('POST', path, data)
}

export async function upload(path, data) {
    const formData = new FormData();
    formData.append('dataFile', data);

    return await send('POST', path, formData)
}

export { variables, auth, transactions, stats, portfolio };