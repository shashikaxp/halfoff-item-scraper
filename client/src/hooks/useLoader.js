import axios from "../api/core/axiosInstance";
import { useState } from "react";

export const useLoader = () => {

    const [loader, setLoader] = useState(false)

    axios.interceptors.request.use(function (config) {
        setLoader(true);
        // Do something before request is sent
        return config;

    }, function (error) {
        setLoader(false);
        // Do something with request error
        return Promise.reject(error);
    });

    // Add a response interceptor
    axios.interceptors.response.use(function (response) {
        setLoader(false);
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, function (error) {
        setLoader(false);
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    });

    return loader;

}
