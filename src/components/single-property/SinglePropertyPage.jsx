import { useParams } from 'react-router-dom'; 
import { getSingleProperty } from '../../../api.js';
import {useEffect, useState} from 'react';
import './SingleProperty.css';

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
            setIsLoading(false);
        }
    };

    useEffect(()=>{
        fetchSingleProperty();
    }, []); 

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div className="single-property-images">Images carousel placeholder</div>
    )
}

export default SinglePropertyPage;