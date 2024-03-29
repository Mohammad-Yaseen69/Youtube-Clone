import axios from "axios";

const Base_Url = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchData = async (url) => {
    const { data } = await axios.get(`${Base_Url}/${url}`, options)
    return data
}