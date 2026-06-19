import axios from "axios";

export const getQuote = async () => {
    const options = {
        method: 'GET',
        url: 'https://quotes15.p.rapidapi.com/quotes/random/',
            params: {
        language_code: 'en'
    },
    headers: {
        'x-rapidapi-key': '33dad84244mshc17e49e89ccd7d2p142ac3jsn57f967495927',
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