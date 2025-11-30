import "../css/PropertiesGrid.css";

function PropertyCard( {property} ) {
    return (
        <div className="property-card">
            <div className="property-card-image-wrapper">
                <img className="property-card-image" src={property.image}/>
                </div>
            <div className="property-card-info"> 
                <span style={{fontWeight:"bold"}}>{property.property_name} </span>• {property.location} • £{property.price_per_night} • {property.host} 
            </div>
        </div>

        
    )
};

export default PropertyCard;