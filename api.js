import axios from "axios";

export const getProperties = async () => {
    const { data: {properties: allProperties} } = await axios.get("https://airbnc-oijh.onrender.com/api/properties");
  
    return allProperties;
};
