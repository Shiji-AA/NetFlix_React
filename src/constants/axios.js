import axios from 'axios';
import { baseUrl } from '../constants/constant.js';

const instance = axios.create({
  baseURL: baseUrl,
});

export default instance
