import axios from 'axios';


const API_BASE_URL = 'https://api.sofascore.com/api/v1';
const API_BASE_URL2 = 'https://www.footballtransfers.com/en/players/actions/overview/overview';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },

  
});

const api2 = axios.create({
  baseURL: API_BASE_URL2,
  headers: {
    'Content-Type': 'application/json',
  },
});

const ApiService = {
getteams: async () => {
    try {
        const response = await api.get('/sport/football/events/live');
        return response.data;
    } catch (error) {
        throw error;
    }
},

getSingleMatch: async (id) => {

  try {
      const response = await api.get(`/event/${id}`);
      return response.data;
  } catch (error) {
      throw error;
  }
},

getPlayers: async () => {
    try {
        const response = await api2.get('/');
        return response.data;
    } catch (error) {
        throw error;
    }
},



getTournaments : async () => {
  try {
      const response = await api.get('/config/top-unique-tournaments/MA/football');
      return response.data.uniqueTournaments;
  } catch (error) {
      throw error;
  }
},

};

export default ApiService;