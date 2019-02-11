import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID e0bc4b6a22773a422b0dd11b74105a4b946699ad9e7b21bcfa9bf35a10bce837' 
    }
});