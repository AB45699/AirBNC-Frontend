import {getProperties} from "../../../api.js";
import PropertyCard from "./PropertyCard.jsx";
import './PropertiesGrid.css';
import {useEffect, useState} from "react";

function PropertiesGrid({ searchParams }) {
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
   

    if (isLoading) {
        return <p>Loading...</p>
    };

    if (hasErrored) {
        return <p> {hasErrored?.response?.data?.msg} <br /> Sorry properties could not load, please try again! </p>
    };

    return (
        <section className="property-cards-container">
            {allProperties.map((property) => {
                return <PropertyCard key={property.property_id} property={property}/>
            })}
        </section>
         
    )
};

export default PropertiesGrid;