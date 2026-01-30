import './SingleProperty.css';

function PropertyDetailsCard({property}) {

    return (
      
        <div className="single-property-details">
            <p className="single-property-details__title"> 
                {property.property_name}
            </p>
            <div className="single-property-details__description">
                <p className="single-property-details__location">Property in {property.location}</p>
                <p className="single-property-details__description-text">{property.description}</p>
            </div>  
        </div>
        
    )
}

export default PropertyDetailsCard;