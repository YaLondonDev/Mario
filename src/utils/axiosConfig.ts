import axios from 'axios';

export const axiosConfig = () => {
  axios.defaults.withCredentials = true;
};
