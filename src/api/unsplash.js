import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 224d9a11964a3c3505b26b02728ca0979c4131ebdae9bd0286164ee58d34f79d'
    }
});

