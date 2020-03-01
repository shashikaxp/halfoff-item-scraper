import http from "../core/http";

const login = (formData) => {
    return http.post("/auth/login", formData, false, true)
}

export default {
    login
}