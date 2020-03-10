// eslint-disable-next-line import/prefer-default-export
export const generateAxiosConfig = (isAuth, enableLoader) => {
  if (isAuth && enableLoader) {
    return {
      headers: [
        { "X-Enable-Authentication": "Authentication" },
        { "X-Enable-Loader": "Loader" }
      ]
    };
  }
  if (isAuth) {
    return {
      headers: [{ "X-Enable-Authentication": "Authentication" }]
    };
  }
  if (enableLoader) {
    return {
      headers: [{ "X-Enable-Loader": "Loader" }]
    };
  }
};
