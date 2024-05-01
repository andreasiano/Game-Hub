import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'ca84de713f7f495aa29303a2db1fc1da'
    }
})