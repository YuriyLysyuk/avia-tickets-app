'use strict';

/**
 * Api service
 */

import axios from 'axios';
import config from '../config/config';

class Api {
  constructor(config) {
    this.apiUrl = config.apiUrl;
  }

  // Get countries
  async countries() {
    try {
      const response = await axios.get(`${this.apiUrl}/countries`);
      return response.data;
    } catch (err) {
      console.log(err);
      return Promise.reject();
    }
  }

  // Get cities
  async cities() {
    try {
      const response = await axios.get(`${this.apiUrl}/cities`);
      return response.data;
    } catch (err) {
      console.log(err);
      return Promise.reject();
    }
  }
}

const api = new Api(config);

export default api;
