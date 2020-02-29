import { CONFIG } from '../../config';
import axios from "axios";

const instance = axios.create({
    baseURL: CONFIG.API_BASE_URL
});

export default instance;