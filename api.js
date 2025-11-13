import axios from "axios";

export const getProperties = async () => {
    const res = await axios.get("https://airbnc-oijh.onrender.com/properties");

    console.log(res);
    return res;
};
