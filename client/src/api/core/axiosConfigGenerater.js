export const generateAxiosConfig = (isAuth, enableLoader) => {
  const config = {};

  if (isAuth && !enableLoader) {
    config.headers = {
      "X-Enable-Authentication": "Authentication"
    };
  } else if (enableLoader && !isAuth) {
    config.headers = {
      "X-Enable-Loader": "Loader"
    };
  } else if (isAuth && enableLoader) {
    config.headers = {
      "X-Enable-Authentication": "Authentication",
      "X-Enable-Loader": "Loader"
    };
  }

  return config;
};
