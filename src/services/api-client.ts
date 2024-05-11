import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'c0507f7be6cd43bcb903228fe2cef341'
    }
})