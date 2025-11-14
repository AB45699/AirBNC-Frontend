import {getProperties} from "../../api.js";
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

    return (
        <>
        {isLoading ? <p>loading...</p> : <ul>
        {allProperties.map((property) => {
            return (
                <li key={property.property_id}>
                    {property.property_name}
                </li>
            )
        })}
       </ul>}
       
        </>
         
    )
};

export default PropertiesGrid;