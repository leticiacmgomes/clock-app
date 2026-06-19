import axios from "axios";

export const getCurrentIP = async () => {
    try {
        const response = await axios.get(`https://api.ipbase.com/v2/info?apikey=${import.meta.env.VITE_API_KEY_IP}`);
        return response.data;

    } catch (error) {
        console.error(error);
        throw error;
    }
}