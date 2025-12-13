import closeIcon from '../assets/close-button.png';
import './filter-options/FilterMenu.css';

function CloseButton({ closeModal }) {
    return (
        <button type="button" className="close-modal-button" onClick={closeModal} >
            <img className="close-icon" src={closeIcon} alt="close=button"/>
        </button>
    )
};

export default CloseButton;