import Modal from '@mui/material/Modal';
import '../css/FilterMenu.css';
import Slide from '@mui/material/Slide';
import PropertyTypeFilters from './PropertyTypeFilters';

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
            <PropertyTypeFilters />
        <button className="apply-filters-button">Apply filters</button>
            </div>
        </Slide>
    
        </Modal>
    )
}; 

export default FilterMenuModal;