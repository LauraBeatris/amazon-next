import axios from 'axios';

export default axios.create({
    baseURL: process.env.SITE_URL
        ? `https://${process.env.SITE_URL}`
        : 'http://localhost:8080',
});
