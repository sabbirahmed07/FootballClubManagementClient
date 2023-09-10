import axios from 'axios';

const setBaseUrl = () => {
  axios.defaults.baseURL = 'http://club-manager-api.onrender.com';
};

export default setBaseUrl;
