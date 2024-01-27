import { View, Text } from 'react-native';
import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] =useState(false);
    const [error, setError] =useState(null)
    const SERVER = process.env.SERVER_URL


    const fetchData = async () => {
        setIsLoading(true)


        try{
            const response = await axios.get('https://jirani-bebe9d207799.herokuapp.com/api/products');

            //console.log('Response Data:', response.data);
            setData(response.data)
            setIsLoading(false)
        } catch (error) {
            console.error('Error fetching data:', error);
            setError(error);
        } finally{
            setIsLoading(false)
        }
    }

    useEffect (() => {
        fetchData()
    }, []);

//fetch data manually
    const refetch = () =>{
        setIsLoading(true)
        fetchData();
    }

return {data, isLoading, error, refetch}
}

export default useFetch
