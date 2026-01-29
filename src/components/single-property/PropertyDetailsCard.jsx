import './SingleProperty.css';

function PropertyDetailsCard({property}) {

    return (
      
        <div className="single-property-details">
            <p className="property-details-property-name"> {property.property_name}</p>
            <p>Property in {property.location}</p>
            <p style={{fontFamily:"AirbnbLight", fontSize:13}}>{property.description}</p>
        </div>
        
    )
}

export default PropertyDetailsCard;