import Modal from '@mui/material/Modal';
import '../css/FilterMenu.css';
import Slide from '@mui/material/Slide';
import PropertyTypeFilters from './PropertyTypeFilters';
import PriceRangeSlider from './PriceRangeSlider';

function FilterMenuModal( {modalIsOpen, setModalIsOpen, searchParams, setSearchParams} ) {

    function closeModal() {
        setModalIsOpen(false);
    }

    return (
        <Modal 
        open={modalIsOpen}
        onClose={closeModal}
        >
        <Slide direction="left" in={modalIsOpen} mountOnEnter unmountOnExit>
        <div className="filter-menu-modal">
        <button onClick={closeModal} className="close-modal-button">Close</button>
            <PriceRangeSlider/>
            <PropertyTypeFilters 
            searchParams={searchParams} 
            setSearchParams={setSearchParams}/>
          
            </div>
        </Slide>
    
        </Modal>
    )
}; 

export default FilterMenuModal;