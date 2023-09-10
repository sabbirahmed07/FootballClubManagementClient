import axios from 'axios';

const setBaseUrl = () => {
	axios.defaults.baseURL = 'http://localhost:8080';
};

export default setBaseUrl;
