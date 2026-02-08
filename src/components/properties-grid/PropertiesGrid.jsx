import useAllPropertiesData from "../../hooks/useAllPropertiesData.js";
import PropertyCard from "./PropertyCard.jsx";
import './PropertiesGrid.css';

function PropertiesGrid({searchParams}) {
    const {allProperties, isLoading, hasErrored} = useAllPropertiesData(searchParams);
   
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