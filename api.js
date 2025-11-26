import axios from "axios";

export const getProperties = async (orderQuery, sortByQuery, propertyTypeQuery, minPriceQuery, maxPriceQuery) => {
    const allPropertiesURL = `https://airbnc-oijh.onrender.com/api/properties`;
   
    const { data: {properties: allProperties} } = await axios.get(allPropertiesURL, 
        {params:
            {order: orderQuery,
                sort: sortByQuery,
                property_type: propertyTypeQuery, 
                minprice: minPriceQuery, 
                maxprice: maxPriceQuery
            }}
    );
  
    return allProperties;
};
