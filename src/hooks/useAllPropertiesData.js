import {useState, useEffect} from 'react';
import {getProperties} from "../../api.js";


export default function useAllPropertiesData( searchParams ) {
    const [allProperties, setAllProperties] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasErrored, setHasErrored] = useState(null);

    const orderQuery = searchParams.get("order");
    const sortByQuery = searchParams.get("sort");
    const propertyTypeQuery = searchParams.get("property_type");
    const minPriceQuery = searchParams.get("minprice");
    const maxPriceQuery = searchParams.get("maxprice");
 
    const fetchProperties = async () => {
        try {
            const fetchedProperties = await getProperties(orderQuery, sortByQuery, propertyTypeQuery, minPriceQuery, maxPriceQuery);
            setAllProperties(fetchedProperties); 
            setIsLoading(false);
        } catch (err) {
            setHasErrored(err);
            setIsLoading(false);
        }
        
    };

    useEffect(()=>{
        fetchProperties();
    }, [orderQuery, sortByQuery, propertyTypeQuery, minPriceQuery, maxPriceQuery])

    

    return {allProperties, isLoading, hasErrored}

}