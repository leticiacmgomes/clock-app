import axios from 'axios';


export const getCurrentTime = async () => {
    const options = {
        method: 'GET',
        url: 'https://world-time-api3.p.rapidapi.com/ip',
        headers: {
            'x-rapidapi-key': import.meta.env.VITE_API_KEY_TIME,
            'x-rapidapi-host': 'world-time-api3.p.rapidapi.com',
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

