import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'dc37f12693mshe4327562b7dc81ap17f4bejsn91e6530c253d',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        } 
    });

    return data;
}