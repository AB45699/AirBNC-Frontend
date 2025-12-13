import SortByDropdown from '../SortByDropdown.jsx';
import {useState} from 'react'; 
import FilterMenuModal from '../FilterMenuModal.jsx';
import './Header.css';


function SearchBar({searchParams, setSearchParams}) { 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [propertyTypeQuery, setPropertyTypeQuery] = useState(null);

    function openModal() {
        setIsModalOpen(true);
    };

    return (
        <div className="search-bar">
            <SortByDropdown searchParams={searchParams} setSearchParams={setSearchParams} />

            {!isModalOpen ? <button className="filter-option" type="button" onClick={openModal}>
                Filter  
            </button> : 
                
                <FilterMenuModal 
                    isModalOpen={isModalOpen} 
                    setIsModalOpen={setIsModalOpen}
                    searchParams={searchParams} 
                    setSearchParams={setSearchParams}
                    propertyTypeQuery={propertyTypeQuery}
                    setPropertyTypeQuery={setPropertyTypeQuery}/> 
                } 
        </div>
    )
};

export default SearchBar;