
import API_KEY from './Keys'
import { useState,useEffect } from 'react'
 export const useGoogleSearch = (term) => {
    const CONTEXT_KEY = "f43a807469b8a49d4";
 const [data,setdata] = useState(null);
 useEffect( () => {
         const fetchData = async () => {
            fetch(`https://www.googleapis.com/customsearch/v1?key=
            ${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
            .then(response => response.json())
            .then(result =>{
                setdata(result);
            })
            .catch(err => err.message);
         }
         fetchData()
        
 },[term])

 return {data};
}

export default useGoogleSearch
