import { useEffect, useState } from "react";
import eventsJSON from "../data/events.json"


const useEventsData = ()=>{
    const [data, setData]= useState([]);
    const [isloading,setIsLoading]=useState(true);
    const [error,setError]= useState(null);

    useEffect(()=>{

        setTimeout(()=>{
            try{
                setData(eventsJSON)
                setIsLoading(false);

            }
            catch(error){
                setError(error)
            }
        },4000);

    },[]);
    


    return {
        events: data?._embedded?.events || [],
        isloading,
        error,
    };
};

export default useEventsData;