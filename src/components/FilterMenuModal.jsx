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
            <PropertyTypeFilters />
        <button onClick={closeModal}>Close</button>
            </div>
        </Slide>
    
        </Modal>
    )
}; 

export default FilterMenuModal;