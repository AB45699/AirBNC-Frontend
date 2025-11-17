import SortByDropdown from './SortByDropdown.jsx';
import {useState} from 'react'; 
import FilterMenuModal from './FilterMenuModal.jsx';


function SearchBar() { 
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal() {
        setModalIsOpen(true);
    }

    return (
        <div className="search-bar">
            <SortByDropdown />

            {!modalIsOpen ? <button className="filter-option" type="button" onClick={openModal}>
                Filter
                </button> : 
                
                <FilterMenuModal 
                    modalIsOpen={modalIsOpen} 
                    setModalIsOpen={setModalIsOpen}/>} 
        </div>
    )
};

export default SearchBar;