import axios from "axios";

export const getProperties = async (orderQuery, sortByQuery) => {
    const allPropertiesURL = `https://airbnc-oijh.onrender.com/api/properties`;
    console.log(orderQuery);
    const { data: {properties: allProperties} } = await axios.get(allPropertiesURL, 
        {params:
            {order: orderQuery,
                sort: sortByQuery

            }}
    );
  
    return allProperties;
};
