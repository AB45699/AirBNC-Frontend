import {getProperties} from "../../api.js";
import PropertyCard from "./PropertyCard.jsx";
import {useEffect, useState} from "react";

function PropertiesGrid() {
    const [allProperties, setAllProperties] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasErrored, setHasErrored] = useState(null);

    const fetchProperties = async () => {
        try {
            const fetchedProperties = await getProperties();
            setAllProperties(fetchedProperties); 
            setIsLoading(false);
        } catch (err) {
            setHasErrored(err);
            setIsLoading(false);
        }
        
    };

    useEffect(()=>{
        fetchProperties();
    }, [])

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