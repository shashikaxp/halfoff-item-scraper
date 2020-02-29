export const generateAxiosConfig = (isAuth, enableLoader) => {

    if (isAuth && enableLoader) {
        return {
            headers: [
                { 'X-Enable-Authentication': 'Authentication' },
                { 'X-Enable-Loader': 'Loader' }]
        }

    } else if (isAuth) {
        return {
            headers: [
                { 'X-Enable-Authentication': 'Authentication' }
            ]
        }

    } else if (enableLoader) {
        return {
            headers: [
                { 'X-Enable-Loader': 'Loader' }
            ]
        }
    }

}

