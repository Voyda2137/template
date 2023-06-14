
import axios from 'axios'

const apiUrl = (path) => `http://localhost:2137/${path}`;

export async function fetchData() {
    try {
      const response = await axios.get(apiUrl('alcohols'));
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  export const addAlcohol = async (newAlcohol) => {
    try {
      const response = await axios.post(apiUrl('addAlcohol'), newAlcohol);
  
      console.log(response);
  
    } catch (error) {
      console.error(error);
    }
  };