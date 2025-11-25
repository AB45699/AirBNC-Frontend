import axios from "axios";

export const getProperties = async (orderQuery, sortByQuery, propertyTypeQuery) => {
    const allPropertiesURL = `https://airbnc-oijh.onrender.com/api/properties`;
   
    const { data: {properties: allProperties} } = await axios.get(allPropertiesURL, 
        {params:
            {order: orderQuery,
                sort: sortByQuery,
                property_type: propertyTypeQuery
            }}
    );
  
    return allProperties;
};
