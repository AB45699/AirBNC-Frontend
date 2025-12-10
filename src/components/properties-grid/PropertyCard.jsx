import "./PropertiesGrid.css";

function PropertyCard( {property} ) {
    return (
        <div className="property-card">
            <div className="property-card-image-wrapper">
                <img className="property-card-image" src={property.image} alt="image of property"/>
            </div>
            <div className="property-card-info"> 
                <p style={{fontWeight:"bold"}}>{property.property_name} </p>
                <p>{property.location}</p>
                <p> £{property.price_per_night} • {property.host} </p>
            </div>
        </div>

        
    )
};

export default PropertyCard;