import checkmark from '../../assets/check.png';
import './FilterMenu.css';

function PropertyTypeFilters({propertyTypeQuery, setPropertyTypeQuery}) {
    const propertyTypes = [
        "Apartment", 
        "House", 
        "Studio", 
        "Loft", 
        "Villa", 
        "Cottage", 
        "Chalet", 
        "Cabin", 
        "Mansion", 
        "Castle", 
        "Bungalow", 
        "Townhouse", 
        "Penthouse", 
        "Duplex"
    ];
    
    return (
        <div className="property-type-filter-container">
            <p>Property types</p>
                {propertyTypes.map((propertyType) => {
                    return <button 
                            type="button" 
                            key={propertyType}
                            className={`property-type-option-selector ${propertyTypeQuery === propertyType ? "selected" : ""}`}
                            onClick={()=>{setPropertyTypeQuery(propertyType)}}
                            >
                                {propertyType} 
                                {propertyTypeQuery === propertyType && (<img className="tick" src={checkmark} alt="tick icon"/> )}
                            
                            </button>
                })}
        </div>
    )
}; 

export default PropertyTypeFilters;