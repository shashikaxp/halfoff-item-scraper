import axios from "./axiosInstance";
import { generateAxiosConfig } from './axiosConfigGenerater';

let get = async (url, isAuth, enableLoader) => {
    let config = generateAxiosConfig(isAuth, enableLoader);
    const result = await axios.get(url, config);
    return result.data;
};

let post = async (url, data, isAuth, enableLoader) => {
    let config = generateAxiosConfig(isAuth, enableLoader);
    const result = await axios.post(url, data, config);
    return result.data;
};

export default {
    get,
    post
}