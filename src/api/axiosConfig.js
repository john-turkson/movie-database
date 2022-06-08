import axios from 'axios';
import clientConfig from './clientConfig';

const axiosClient = axios.create({
    baseURL: clientConfig.baseURL,
    headers: {
        'Content-Type': 'application/json'
    },
    params: {
        api_key: clientConfig.apiKey
    }

});

axiosClient.interceptors.request.use((config) => {
    console.log(config);
    return config;
}, (error) => {
    console.log(`Error: ${error}`);
    return Promise.reject(error);
})

axiosClient.interceptors.response.use((response) => {
    console.log(response);
    return response;
}, (error) => {
    console.log(`Error: ${error}`);
    return Promise.reject(error);
})

export default axiosClient;