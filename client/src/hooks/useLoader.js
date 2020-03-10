import axios from "../api/core/axiosInstance";
import { useState } from "react";
import * as _ from "lodash";

export const useLoader = () => {
  const [loader, setLoader] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  axios.interceptors.request.use(
    function(config) {
      setLoader(true);
      setIsError(false);
      // Do something before request is sent
      return config;
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
      setErrorMessage(getErrorMessage(error));
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );

  return [loader, isError, errorMessage];
};

const getErrorMessage = error => {
  return _.get(error, "response.data.message");
};
