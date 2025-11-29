import "../css/PropertiesGrid.css";

function PropertyCard( {property} ) {
    return (
        
        <div className="property-card">
            <p> 
                <img className="property-image-card" src={property.image}/>, 
                {property.property_name}, 
                {property.location}, 
                £{property.price_per_night}, 
                {property.host} </p>
        </div>

        
    )
};

export default PropertyCard;