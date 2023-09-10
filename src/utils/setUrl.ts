import axios from 'axios';

const setBaseUrl = () => {
  axios.defaults.baseURL = 'https://club-manager-api.onrender.com';
};

export default setBaseUrl;
