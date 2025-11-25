function PropertyTypeFilters({searchParams, setSearchParams}) {
    const propertyTypes = ["Apartment", "House", "Studio", "Loft", "Villa", "Cottage", "Chalet", "Cabin", "Mansion", "Castle", "Bungalow", "Townhouse", "Penthouse", "Duplex"]
    let selectedPropertyType;

    const setPropertyType = (propertyType) => {
        const newParams = new URLSearchParams(searchParams)
        newParams.set("property_type", propertyType);
        setSearchParams(newParams)
    };

    return (
        <div className="property-type-filter-container">
            <p>Property types</p>
            {propertyTypes.map((propertyType)=>{
                return <button 
                        type="button" 
                        key={propertyType}
                        className="property-type-option-selector"
                        onClick={()=>{selectedPropertyType=propertyType}}>
                    {propertyType}
                    </button>
            })}

            <button className="apply-filters-button" onClick={() => setPropertyType(selectedPropertyType)}>Apply</button>
   
        </div>
    )
}; 

export default PropertyTypeFilters;