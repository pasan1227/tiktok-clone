import axios from 'axios';

const instance = axios.create({
    baseURL: "https://tiktok--backend.herokuapp.com/",
});

export default instance;