import Modal from '@mui/material/Modal';
import '../css/FilterMenu.css';
import Slide from '@mui/material/Slide';
import PropertyTypeFilters from './PropertyTypeFilters';
import PriceRangeSlider from './PriceRangeSlider';

function FilterMenuModal( {modalIsOpen, setModalIsOpen} ) {

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
            <PropertyTypeFilters />
          
            </div>
        </Slide>
    
        </Modal>
    )
}; 

export default FilterMenuModal;