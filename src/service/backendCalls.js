
import axios from 'axios'

const apiUrl = (path) => `http://localhost:2137/${path}`
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
      const response = await axios.post(apiUrl('alcohols'), newAlcohol);
  
      console.log(response.data);
  
    } catch (error) {
      console.error(error);
    }
  };


// export async function fetchData() {
//   const data = JSON.stringify({
//     "collection": "Alcohols",
//     "database": "Alcohols",
//     "dataSource": "Cluster0",
//   })

//   var config = {
//     method: 'get',
//     url: 'https://eu-central-1.aws.data.mongodb-api.com/app/data-pqrnf/endpoint/data/v1/action/find',
//     headers: {
//       'Content-Type': 'application/json',
//       'Access-Control-Request-Headers': '*',
//       'api-key': 'JkM7cQf3tAvVNIArZRXj9InVHIXwcu3Cys9KaIXjkjgdMQnblF6vRHCjBGTReNJE',
//     },
//     data: data
//   };

//   axios(config).then(res => {
//     console.log(JSON.stringify(res.data))
//   }).catch(err => console.log(err))

// }