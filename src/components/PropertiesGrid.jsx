import {getProperties} from "../../api.js";
import {useState} from "react";

function PropertiesGrid() {
    const [properties, setProperties] = useState([]);

    const fetchProperties = async () => {
        const properties = await getProperties();
        setProperties(properties); 
        console.log(properties)
    }

    return (
        <button onClick={fetchProperties}>push me</button>
        
    )
};

export default PropertiesGrid;