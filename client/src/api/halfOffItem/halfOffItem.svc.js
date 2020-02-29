import http from "../core/http";

let getHalfOffItems = () => {
    return http.get('halfOffItems?page=2');
}

export default {
    getHalfOffItems
}