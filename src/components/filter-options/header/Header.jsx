import './Header.css';
import airbnb_logo from '../../../assets/airbnb_logo.png';
import SearchBar from './SearchBar.jsx';

function Header( {searchParams, setSearchParams} ) {
    return (
        <header className="header">
            <img className="logo" src={airbnb_logo} alt="logo"/>
            <SearchBar searchParams={searchParams} setSearchParams={setSearchParams}/>
        </header>
    )
};

export default Header;