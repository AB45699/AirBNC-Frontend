import Modal from '@mui/material/Modal';
import '../css/Header.css';
import Slide from '@mui/material/Slide';

function FilterMenuModal( {modalIsOpen, setModalIsOpen} ) {

    function closeModal() {
        setModalIsOpen(false);
    }

    return (
        
        <Modal 
        open={modalIsOpen}
        onClose={closeModal}
        keepMounted>
             

            <Slide direction="up" in={modalIsOpen} mountOnEnter unmountOnExit>
            <div className="filter-menu-modal">
                
                <p>modal open</p>
           
            <button onClick={closeModal}>Close</button>
             </div>
            </Slide>
       
          </Modal>
    )
}; 

export default FilterMenuModal;