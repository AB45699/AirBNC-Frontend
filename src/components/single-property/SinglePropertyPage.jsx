import { useParams } from 'react-router-dom'; 
import { getSingleProperty } from '../../../api.js';
import {useEffect, useState} from 'react';
import './SingleProperty.css';
import PropertyDetailsCard from './PropertyDetailsCard.jsx';
import ImagesCarousel from './ImagesCarousel.jsx';

function SinglePropertyPage() {
    const {property_id} = useParams();
    const [property, setProperty] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasErrored, setHasErrored] = useState(null);

    
    const fetchSingleProperty = async () => {
        try {
            const fetchedSingleProperty = await getSingleProperty(property_id);
            setProperty(fetchedSingleProperty);
            setIsLoading(false);
        } catch (err) {
            setHasErrored(err);
            console.log(err)
            setIsLoading(false);
        }
    };

    useEffect(()=>{
        fetchSingleProperty();
    }, []); 

    if (isLoading) {
        return <p>Loading...</p>
    };

    if (hasErrored) {
        return <p> {hasErrored?.response?.data?.msg} <br /> Sorry properties could not load, please try again! </p>
    };

    return (
        <>
            <ImagesCarousel property={property}/>
            <PropertyDetailsCard property={property}/>
        </>
    )
}

export default SinglePropertyPage;