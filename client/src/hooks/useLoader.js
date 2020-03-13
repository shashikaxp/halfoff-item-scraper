import { useState } from "react";
import * as _ from "lodash";
import axios from "../api/core/axiosInstance";
import { STORAGE } from "../constants/storage";
import { HEADERS } from "../constants/headers";

const getErrorDetails = error => {
  return {
    errorCode: _.get(error, "response.status"),
    data: _.get(error, "response.data")
  };
};

const hanldeToken = config => {
  const tempConfig = config;
  const token = localStorage.getItem(STORAGE.TOKEN);
  if (_.has(config.headers, HEADERS.AUTH)) {
    const headers = _.omit(config.headers, [HEADERS.AUTH]);
    headers.common.Authorization = `Bearer ${token}`;
    tempConfig.headers = headers;
  }
  return tempConfig;
};

export const useLoader = () => {
  const [loader, setLoader] = useState(false);
  const [isError, setIsError] = useState(false);
  const [apiErrorDetails, setApiErrorDetails] = useState({
    data: {}
  });

  axios.interceptors.request.use(
    function(config) {
      let newConfig = config;
      if (_.has(newConfig.headers, HEADERS.LOADER)) {
        setLoader(true);
        const headers = _.omit(newConfig.headers, [HEADERS.LOADER]);
        newConfig.headers = headers;
      }
      setIsError(false);
      newConfig = hanldeToken(newConfig);
      return newConfig;
    },
    function(error) {
      setLoader(false);
      setIsError(false);
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  axios.interceptors.response.use(
    function(response) {
      setLoader(false);
      setIsError(false);
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function(error) {
      setLoader(false);
      setIsError(true);
      setApiErrorDetails(getErrorDetails(error));
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );

  return [loader, isError, apiErrorDetails];
};
