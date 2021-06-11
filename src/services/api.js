import axios from 'axios';

const BACKEND_URL = 'https://aipm-server.herokuapp.com/api/v1/';

const aipm = axios.create({
  baseURL: BACKEND_URL,
});

export default aipm;
