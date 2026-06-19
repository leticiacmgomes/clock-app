import axios from "axios";

export const getQuote = async () => {
    const options = {
        method: 'GET',
        url: 'https://quotes15.p.rapidapi.com/quotes/random/',
            params: {
        language_code: 'en'
    },
    headers: {
        'x-rapidapi-key': import.meta.env.VITE_API_KEY_QUOTE,
            'x-rapidapi-host': 'quotes15.p.rapidapi.com',
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
};