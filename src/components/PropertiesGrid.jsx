import {getProperties} from "../../api.js";
import PropertyCard from "./PropertyCard.jsx";
import {useEffect, useState} from "react";

function PropertiesGrid({searchParams, setSearchParams}) {
    const [allProperties, setAllProperties] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasErrored, setHasErrored] = useState(null);
    const orderQuery = searchParams.get("order");
    const sortByQuery = searchParams.get("sort");
 
    const fetchProperties = async (orderQuery, sortByQuery) => {
        try {
            const fetchedProperties = await getProperties(orderQuery, sortByQuery);
            console.log(fetchedProperties);
            setAllProperties(fetchedProperties); 
            setIsLoading(false);
        } catch (err) {
            setHasErrored(err);
            setIsLoading(false);
        }
        
    };

    useEffect(()=>{
        fetchProperties(orderQuery, sortByQuery);
        console.log(orderQuery, "order query", sortByQuery, "sort query")
    }, [orderQuery, sortByQuery])

    //  useEffect(()=>{
    //     fetchProperties(orderQuery);
    //     console.log(orderQuery, "order query")
    // }, [orderQuery])

    if (isLoading) {
        return <p>loading...</p>
    }

    return (
        <section className="property-cards-container">
            {allProperties.map((property) => {
                return <PropertyCard key={property.property_id} property={property}/>
            })}
        </section>
         
    )
};

export default PropertiesGrid;