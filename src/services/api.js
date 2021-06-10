import axios from 'axios';

const BACKEND_URL = 'http://localhost:3000/api/v1';

const aipm = axios.create({
  baseURL: BACKEND_URL,
});

export default aipm;
