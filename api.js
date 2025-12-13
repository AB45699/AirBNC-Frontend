import axios from "axios";

export const getProperties = async (orderQuery, sortByQuery, propertyTypeQuery, minPriceQuery, maxPriceQuery) => {
    const allPropertiesURL = `https://airbnc-oijh.onrender.com/api/properties`;
   
    const { data: {properties: allProperties} } = await axios.get(allPropertiesURL, 
        {params:
            {
                order: orderQuery,
                sort: sortByQuery,
                property_type: propertyTypeQuery, 
                minprice: minPriceQuery, 
                maxprice: maxPriceQuery
            }
        }
    );
  
    return allProperties;
};

export const getSingleProperty = async (property_id) => {
    const singlePropertyURL = `https://airbnc-oijh.onrender.com/api/properties/${property_id}`;

    const {data: {property}} = await axios.get(singlePropertyURL);

    return property;
}
