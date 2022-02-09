import axios from "axios";
import Cookies from 'js-cookie';
import * as variables from '@api/variables';
import * as auth from '@api/auth';
import * as transactions from '@api/transactions';
import * as stats from '@api/stats';
import * as portfolio from '@api/portfolio';

const axiosAPI = axios.create({
    baseURL : import.meta.env.VITE_PUBLIC_BASE_PATH
});

async function send(method, path, data) {
    let url = import.meta.env.VITE_PUBLIC_BASE_PATH + path;
    let token = Cookies.get('auth_token');
    let auth = (token) ? 'Bearer ' + token : '';

    const headers = {
        Authorization: auth
    };

    return axiosAPI({
        mode: 'cors',
        method,
        url,
        data,
        headers,
        //withCredentials: true,
    });
};

export async function get(path) {
    return await send('GET', path)
}

export async function post(path, data) {
    let req = await send('POST', path, data)

    return req
}

export async function upload(path, data) {
    const formData = new FormData();
    formData.append('dataFile', data);

    return await send('POST', path, formData)
}

export { variables, auth, transactions, stats, portfolio };