import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '025c520084864e78b974363cfeac2127'
    }
})