import './SingleProperty.css';

function PropertyDescription({property}) {

    return (
      
        <div className="property-name-card">{property.property_name}</div>
        
    )
}

export default PropertyDescription;