import Modal from '@mui/material/Modal';
import './FilterMenu.css';
import Slide from '@mui/material/Slide';
import PropertyTypeFilters from './PropertyTypeFilters.jsx';
import PriceRangeSlider from './PriceRangeSlider.jsx';
import {useState} from 'react';
import CloseButton from '../CloseButton.jsx';


function FilterMenuModal( {isModalOpen, setIsModalOpen, searchParams, setSearchParams, propertyTypeQuery, setPropertyTypeQuery} ) {
    const [priceQuery, setPriceQuery] = useState([0, 550]);

    function closeModal() {
        setIsModalOpen(false);
    };

    const setFilterQueries = (propertyTypeQuery, priceQuery) => {
        const newParams = new URLSearchParams(searchParams);

        {propertyTypeQuery ? newParams.set("property_type", propertyTypeQuery) : null};
        newParams.set("minprice", priceQuery[0]);
        newParams.set("maxprice", priceQuery[1]);

        setSearchParams(newParams);
        closeModal();
    };

    return (
        <Modal 
            open={isModalOpen}
            onClose={closeModal} 
            > 

            <Slide direction="left" in={isModalOpen} mountOnEnter unmountOnExit>

                <div className="filter-menu-modal">
                    <CloseButton closeModal={closeModal}/>

                    <PriceRangeSlider 
                        setPriceQuery={setPriceQuery}/>

                    <PropertyTypeFilters
                        propertyTypeQuery={propertyTypeQuery} 
                        setPropertyTypeQuery={setPropertyTypeQuery}/>
            
                    <button type="button" className="apply-filters-button" onClick={()=>{setFilterQueries(propertyTypeQuery, priceQuery)}}>
                        Apply filters
                    </button>
                
                </div>
            </Slide>
    
        </Modal>
    )
}; 

export default FilterMenuModal;