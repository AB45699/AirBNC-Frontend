function PropertyTypeFilters({setPropertyTypeQuery}) {
    const propertyTypes = ["Apartment", "House", "Studio", "Loft", "Villa", "Cottage", "Chalet", "Cabin", "Mansion", "Castle", "Bungalow", "Townhouse", "Penthouse", "Duplex"]
  

    return (
        <div className="property-type-filter-container">
            <p>Property types</p>
            {propertyTypes.map((propertyType)=>{
                return <button 
                        type="button" 
                        key={propertyType}
                        className="property-type-option-selector"
                        onClick={()=>{setPropertyTypeQuery(propertyType)}}>
                    {propertyType}
                    </button>
            })}

        </div>
    )
}; 

export default PropertyTypeFilters;