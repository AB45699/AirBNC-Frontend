import './SingleProperty.css';

function PropertyDetailsCard({property}) {

    return (
      
        <div className="property-name-card">
            <div className="property-details-property-name"> 
                {property.property_name}
            </div>
        </div>
        
    )
}

export default PropertyDetailsCard;