import "./PropertiesGrid.css";
import FavouritesIcon from "./FavouritesIcon.jsx";
import starIcon from '../../assets/star-icon.png';

function PropertyCard( {property} ) {
    return (
        <div className="property-card">
            <div className="property-card-image-wrapper">
                <FavouritesIcon property={property}/>
                <img className="property-card-image" src={property.image} alt="image of property"/>
            </div>
            <div className="property-card-info"> 
                <p style={{fontWeight:"bold"}}>{property.property_name} </p>
                <p>{property.location}</p>
                <p> £{property.price_per_night} per night •  
                    <span style={{fontWeight:"normal"}}> {property.avg_rating?.slice(0, 4) || "0"} </span>
                    <span><img  className="star-icon" src={starIcon} alt="star-icon"/></span></p>
            </div>
        </div>
    )
};

export default PropertyCard;