import axios from 'axios';

console.log(process.env.SITE_URL);

export default axios.create({
    baseURL: process.env.SITE_URL
        ? `https://${process.env.SITE_URL}`
        : 'http://localhost:8080',
});
