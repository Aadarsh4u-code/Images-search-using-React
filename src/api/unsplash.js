import axios from 'axios';

export default axios.create({ //create method, creates instance of axios client with default of properties
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID Beii1ZRy3CwODY8bQ422u7U3PG1mEpAK7RsNakMbdxk'
  }
}); 