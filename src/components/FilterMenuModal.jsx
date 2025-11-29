import Modal from '@mui/material/Modal';
import '../css/FilterMenu.css';
import Slide from '@mui/material/Slide';
import PropertyTypeFilters from './PropertyTypeFilters';
import PriceRangeSlider from './PriceRangeSlider';
import {useState} from 'react';

function FilterMenuModal( {modalIsOpen, setModalIsOpen, searchParams, setSearchParams} ) {
    const [propertyTypeQuery, setPropertyTypeQuery] = useState(null);
    const [priceQuery, setPriceQuery] = useState([0, 550]);

    function closeModal() {
        setModalIsOpen(false);
    };

    const setFilterQueries = (propertyTypeQuery, priceQuery) => {
        const newParams = new URLSearchParams(searchParams)
        {propertyTypeQuery ? newParams.set("property_type", propertyTypeQuery) : null}
        newParams.set("minprice", priceQuery[0])
        newParams.set("maxprice", priceQuery[1])
        setSearchParams(newParams)
        closeModal()
    };

    return (
        <Modal 
        open={modalIsOpen}
        onClose={closeModal}
        >
        <Slide direction="left" in={modalIsOpen} mountOnEnter unmountOnExit>
        <div className="filter-menu-modal">
        <button onClick={closeModal} className="close-modal-button">Close</button>
            <PriceRangeSlider 
            setPriceQuery={setPriceQuery}/>
            <PropertyTypeFilters 
            setPropertyTypeQuery={setPropertyTypeQuery}/>
          
          <div className="apply-filters-button-container">
          <button className="apply-filters-button" onClick={()=>{setFilterQueries(propertyTypeQuery, priceQuery)}}>Apply filters</button>
            </div>
            </div>
        </Slide>
    
        </Modal>
    )
}; 

export default FilterMenuModal;