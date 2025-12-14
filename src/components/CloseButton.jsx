import closeIcon from '../assets/close-button.png';
import '../App.css';

function CloseButton({ closeModal }) {
    return (
        <button type="button" className="close-button" onClick={closeModal} >
            <img className="close-icon" src={closeIcon} alt="close=button"/>
        </button>
    )
};

export default CloseButton;