import styles from '../css/Shared.module.css';
import { useState } from 'react';
import SortByDropdown from './SortByDropdown.jsx';

function SearchBar() { 
    const [sortByIsOpen, setSortByIsOpen] = useState(false);

    const openSortBy = () => {
        setSortByIsOpen(true);
    }

    return (
        <div className="search-bar">
            {!sortByIsOpen ? <button className={styles[`filter-options`]} onClick={openSortBy} type="button">
                Sort by
            </button> : <SortByDropdown />}
            <div className={styles[`filter-options`]}>
                Filter
            </div>
        </div>
    )
};

export default SearchBar;