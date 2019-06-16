import axios from 'axios';


export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID 7bb435fdbe4f6f7e4e585dd9167bdaa3e04710672472424a2e47611c09fc81ee'
    }
});